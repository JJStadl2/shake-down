// import './bootstrap' ;
import { Modal } from "bootstrap";
// import  'bootstrap';
import "@popperjs/core";
import Chart from "chart.js/auto";
import Sortable from "sortablejs";
const bootstrap = require("./bootstrap");
const gramConverter = 1000;
const ounceConverter = 16;
window.addEventListener("DOMContentLoaded", function (e) {
    this.window.showPassword = function showPassword(id) {
        let password = document.getElementById(id);
        if (password.type === "password") {
            password.type = "text";
        } else {
            password.type = "password";
        }
    };
    this.window.addMasterListItem = function addMasterListItem() {
        let numberOfItemsToAdd = document.getElementById("linesToAdd");
        let linesToAdd = 1;
        if (numberOfItemsToAdd === null || +numberOfItemsToAdd.value < 1) {
            numberOfItemsToAdd.value = linesToAdd;
        } else {
            linesToAdd = +numberOfItemsToAdd.value;
        }

        for (let i = 0; i < linesToAdd; i++) {
            let listByItems = true;
            let listen = false;
            let itemTable = document.getElementById('modal-item-table-body');
            let row = document.createElement("tr");

            // Create cells and input elements.
            let cell1 = document.createElement("td");

            let itemName = createListItemInput(
                "text",
                "itemName",
                i,
                "item_name",
                listen
            );
            itemName.placeholder = "Item Name";
            itemName.classList.add("form-control");

            let cell6 = document.createElement("td");
            cell6.id = "btn-td-" +i;
            let deleteBtn = createDeleteButton(i);

            let cell2 = document.createElement("td");
            let itemWeight = createListItemInput(
                "number",
                "itemWeight",
                i,
                "item_weight",
                listen
            );
            itemWeight.value = 0;
            itemWeight.classList.add("for-weight");
            itemWeight.classList.add("number-input");
            itemWeight.classList.add("form-control");
            itemWeight.setAttribute('step','0.01');
            //itemWeight.style.width = '40%';
            cell2.classList.add("number-col");

            let cell3 = document.createElement("td");
            let select = document.createElement("select");
            select.id = "uom-" + i;
            select.name = "uom[]";
            select.setAttribute("data-column-name", "uom");
            select.className = "form-control";

            let ozOption = document.createElement("option");
            let lbsOption = document.createElement("option");
            let grOption = document.createElement("option");
            let kgOption = document.createElement("option");
            ozOption.value = "in_ounces";
            ozOption.text = "OZ";
            lbsOption.value  = 'in_lbs';
            lbsOption.text = 'LBS'

            grOption.value = "in_grams";
            grOption.text = "G";
            kgOption.value  = 'in_kilos';
            kgOption.text = 'KG';
            select.appendChild(ozOption);
            select.appendChild(lbsOption);
            select.appendChild(grOption);
            select.appendChild(kgOption);

            //append inputs to cells.
            cell1.appendChild(itemName);
            cell2.appendChild(itemWeight);

            let selectCell = document.createElement("td");
            let categorySelect = getCategroySelect(i,null, listen);
            categorySelect.name = 'itemCategory[]'
            selectCell.append(categorySelect);

            cell3.appendChild(select);
            cell6.appendChild(deleteBtn);

            // Append cells to the row.
            // row.appendChild(iconCell);
            row.appendChild(cell1);
            row.appendChild(selectCell);
            row.appendChild(cell3);
            row.appendChild(cell2);
            row.appendChild(cell6);

            // Append the row to the table.
            itemTable.appendChild(row);


        }
        document.getElementById('newItemCount').value = linesToAdd;
        numberOfItemsToAdd.value = 1;
    };
    this.window.showListAssignModal = function showListAssignModal(itemId,itemName){

        document.getElementById('itemIdforAssign').value = itemId;
        // document.getElementById('userItemIdforAssign').value = userItemId;

        let table = document.getElementById("modal-assign-item-table-body");
        let header = document.getElementById('AssignItemToListModalLabel');
        header.innerHTML = 'Assign/Unassign item: '+itemName;

        let url = '/get-user-lists/'+itemId;
        let userLists;

        axios.get(url)
        .then((res) => {
            let data = res.data;
            userLists = data.userLists;

            if(data.status !== '1'){
                alert(data.msg);
                return;
            }

            for (let i = 0; i < userLists.length; i++) {

                let row = document.createElement("tr");
                let listNameCell = document.createElement("td");
                let assignCell = document.createElement("td");

                listNameCell.innerHTML = userLists[i].name;

                let checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = 'listCheckBox-'+i;
                checkbox.name = 'listIds[]';
                checkbox.value = userLists[i].id;

                if(userLists[i].itemAssigned == true){
                    checkbox.checked = true;
                }

                assignCell.appendChild(checkbox);
                row.appendChild(listNameCell);
                row.appendChild(assignCell);
                table.appendChild(row);
            }

        });

    }
    this.window.showGearAssignModal = function showGearAssignModal(listId){

        let table = document.getElementById("add-item-table-body");

        let url = '/get-user-items/'+listId;
        let userItems;

        axios.get(url)
        .then((res) => {
            let data = res.data;
            userItems = data.userItems;
            if(data.status !== '1'){
                alert(data.msg);
                return;
            }

            for (let i = 0; i < userItems.length; i++) {

                let row = document.createElement("tr");
                let itemNameCell = document.createElement("td");
                let itemCategoryCell = document.createElement("td");
                let itemWeightCell = document.createElement("td");
                let itemUOMCell = document.createElement("td");
                let assignCell = document.createElement("td");

                itemNameCell.innerHTML = userItems[i].item_name;
                itemCategoryCell.innerHTML = userItems[i].item_category;
                itemWeightCell.innerHTML = userItems[i].item_weight;
                itemUOMCell.innerHTML = userItems[i].uom;


                let checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = 'itemCheckBox-'+i;
                checkbox.name = 'itemIds[]';
                checkbox.value = userItems[i].item_id;
                assignCell.appendChild(checkbox);

                row.appendChild(itemNameCell);
                row.appendChild(itemCategoryCell);
                row.appendChild(itemWeightCell);
                row.appendChild(itemUOMCell);

                row.appendChild(assignCell);
                table.appendChild(row);
            }


        });

    }

    this.window.assignToGearList = function assignToGearList(element){
        let listId = element.getAttribute('data-list-id');
        let itemId = element.getAttribute('data-item-id');

        if(!element.checked){
            listId = '';
        }

        let url = '/assign-to-gear-list'
        let data = {
            list_id: listId,
            id: itemId
        };


        axios.post(url,data)
          .then((response) => {
            response = response.data;
            if(response.status == 1){

            }else{
                alert(response.msg);
            }

          }, (error) => {
            console.log(error);
          });

    }

    this.window.addListItem = function addListItem(categorycounter = null, groupCategory = null) {
        let numberOfItemsToAdd = document.getElementById("linesToAdd");
        let linesToAdd = 1;
        let listViewInput;
        if (numberOfItemsToAdd === null || +numberOfItemsToAdd.value < 1) {
            numberOfItemsToAdd.value = linesToAdd;
        } else {
            linesToAdd = +numberOfItemsToAdd.value;
        }

        for (let i = 0; i < linesToAdd; i++) {
            let listUOM = document.getElementById("uom").value;
            let finalIElement = document.getElementById("final-i");
            let listByItems = document.getElementById("listByItems").value;
            let itemTable;

            if (+listByItems == 1) {
                listByItems = true;
                itemTable = document.getElementById("item-table-body");
            } else {
                listByItems = false;
                let tableCategory = categorycounter;
                itemTable = document.getElementById(
                    "categoryTable-" + tableCategory
                );
            }

            let userId = document.getElementById("userId").value;
            let listId = document.getElementById("listId").value;
            let finalI = finalIElement.value;
            finalIElement.value = +finalI + 1;

            let row = document.createElement("tr");
            row.id = 'row-'+finalI;

            // Create cells and input elements.
            let cell0 = document.createElement("th");
            cell0.scope = "row";
            cell0.innerHTML = finalI;

            let cell1 = document.createElement("td");

            let counter = document.createElement("input");
            counter.type = "hidden";
            counter.name = "id[]";
            counter.id = "id-" + finalI;
            counter.value = "new-" + finalI;
            counter.setAttribute("data-column-name", "id");

            let listViewType = document.createElement("input");
            listViewType.type = "hidden";

            listViewType.id = "listViewType";
            listViewType.value = listByItems
            listViewInput = listViewType;

            let newRow = document.createElement("input");
            newRow.type = "hidden";
            newRow.id = "newRow-" + finalI;
            newRow.value = true;
            let itemName = createListItemInput(
                "text",
                "itemName",
                finalI,
                "item_name"

            );
            itemName.placeholder = "Item Name";
            itemName.classList.add("form-control");

            let cell6 = document.createElement("td");
            cell6.id = "btn-td-" + finalI;
            let deleteBtn = createDeleteButton(finalI);
            let cell2 = document.createElement("td");

            let itemWeight = createListItemInput(
                "number",
                "itemWeight",
                finalI,
                "item_weight"
            );
            itemWeight.value = 0;
            itemWeight.classList.add("for-weight");
            itemWeight.classList.add("number-input");
            itemWeight.classList.add("form-control");
            cell2.classList.add("number-col");

            let cell3 = document.createElement("td");
            let lineUomCell = document.createElement("td");
            cell3.classList.add("uom-td");
            lineUomCell.classList.add("uom-td");
            let rowUom = document.createElement("input");
            rowUom.type = 'hidden';
            rowUom.id = "uom-" + finalI;


            let  radio1 = createRadio("in_ounces", "", "oz", finalI);
            let radioLabel1 = createLabel(
                "OZ",
                "uom-oz-" + finalI,
                "oz",
                finalI
            );
            let radio2 = createRadio("in_lbs", "", "lbs", finalI);
            let radioLabel2 = createLabel(
                "LBS",
                "uom-lbs-" + finalI,
                "lbs",
                finalI
            );
            let   radio3 = createRadio("in_grams", "", "gram", finalI);
            let radioLabel3 = createLabel(
                "G",
                "uom-gram-" + finalI,
                "gram",
                finalI
            );
            let radio4 = createRadio("in_kilos", "", "kg", finalI);
            let radioLabel4 = createLabel(
                "KG",
                "uom-kg-" + finalI,
                "kg",
                finalI
            );
            let radioLabel5;

            if (listUOM === "us") {
                rowUom.value = "us";
                radio1.checked = true;
                radioLabel5 = createLabel(
                    "OZ",
                    "uom-oz-" + finalI,
                    "oz",
                    finalI,
                    true
                );
            } else {
                rowUom.value = "metric";
                radio3.checked = true;
                radioLabel5 = createLabel(
                    "G",
                    "uom-gram-" + finalI,
                    "gram",
                    finalI,
                    true
                );
            }

            let cell4 = document.createElement("td");
            cell4.classList.add("number-col");
            let packedAmount = createListItemInput(
                "number",
                "packedAmount",
                finalI,
                "amount"
            );

            packedAmount.value = 1;

            packedAmount.classList.add("for-weight");
            packedAmount.classList.add("number-input");
            packedAmount.classList.add("form-control");

            let cell5 = document.createElement("td");
            cell5.classList.add("number-col");
            let totalLineWeight = createListItemInput(
                "number",
                "totalLineWeight",
                finalI,
                "total_line_weight"
            );
            totalLineWeight.value = 0;
            totalLineWeight.setAttribute(
                "data-column-name",
                "total_line_weight"
            );
            totalLineWeight.setAttribute("readonly", true);
            totalLineWeight.classList.add("number-input");
            totalLineWeight.classList.add("form-control");
            totalLineWeight.classList.add("for-total-list-weight");

            //append inputs to cells.
            let iconCell = document.createElement("th");

            let icon = document.createElement('i');
            icon.className = 'fas fa-grip-vertical';
            iconCell.appendChild(icon);

            cell1.appendChild(counter);
            cell1.appendChild(newRow);
            cell1.appendChild(itemName);
            cell2.appendChild(itemWeight);

            let selectCell = document.createElement("td");
            let categorySelect = getCategroySelect(finalI, groupCategory);

            selectCell.append(categorySelect);
            cell3.appendChild(rowUom);
            cell3.appendChild(radio1);
            cell3.appendChild(radioLabel1);
            cell3.appendChild(radio2);
            cell3.appendChild(radioLabel2);

            cell3.appendChild(radio3);
            cell3.appendChild(radioLabel3);
            cell3.appendChild(radio4);
            cell3.appendChild(radioLabel4);



            cell4.appendChild(packedAmount);
            cell5.appendChild(totalLineWeight);
            lineUomCell.appendChild(radioLabel5);
            cell6.appendChild(deleteBtn);

            // Append cells to the row.
            row.appendChild(iconCell);
            row.appendChild(cell1);
            row.appendChild(selectCell);
            row.appendChild(cell3);
            row.appendChild(cell2);
            row.appendChild(cell4);
            row.appendChild(cell5);
            row.appendChild(lineUomCell);
            row.appendChild(cell6);

            // Append the row to the table.
            itemTable.appendChild(row);
            //add functions to calculate and convert total weight.
            addEventListenerWeightCalc(finalI);
        }
        numberOfItemsToAdd.value = 1;

        let container = document.querySelector('.gear-items-container');
        container.appendChild(listViewInput);
    };

    this.window.updateUOM = function updateUOM(value) {
        if (value !== "us") {
            usRadioToMetric();
        } else {
            metricRadioToUs();
        }
    };
    function addEventListenerWeightCalc(row) {
        let neededForWeights = document.querySelectorAll(".for-weight");
        neededForWeights.forEach(function (neededForWeight) {
            neededForWeight.addEventListener("change", function () {
                getLineTotalWeight(row);
            });
        });
    }

    this.window.getLineTotalWeight = function getLineTotalWeight(
        row,
        convert = false
    ) {
        let weight = document.getElementById("itemWeight-" + row).value;
        let packedAmount = document.getElementById("packedAmount-" + row).value;
        let uom = document.getElementById("uom");
        let lineTotalWeightElement = document.getElementById(
            "totalLineWeight-" + row
        );

        let lineTotal = 0;
        lineTotal = +weight * +packedAmount;
        lineTotal = lineTotal.toFixed(3).replace(/[.,]00$/, "");
        lineTotalWeightElement.value = lineTotal;

        updateListItem(lineTotalWeightElement);
    };

    this.window.updateItemUOM = function updateItemUOM(
        row,
       element
    ) {

        if (!element || !(element instanceof HTMLElement)) {
            console.error("Invalid element provided to updateListItem.");
            return;
        }

        let uomElement = document.getElementById(`uom-${row}`);
        let itemWeight = document.getElementById(`itemWeight-${row}`).value;
        let columnName = element.getAttribute('data-column-name');
        let uom = uomElement.value;
        let itemId = document.getElementById(`id-${row}`).value;
        let label = document.getElementById(`line-uom-label-${row}`);
        let labelHTML;
        let newUOM;
        let url = '/update-item-uom';
        let isNewRow = document.getElementById(`newRow-${row}`) ? document.getElementById(`newRow-${row}`).value : false;

        if(itemId.startsWith('new')){
            return updateListItem(element);
        }

        if(columnName.endsWith('ounces') || columnName.endsWith('lbs')){
            newUOM = 'us';
        }else{
            newUOM = 'metric';
        }

        let data = getBooleanData(columnName);
        data['id'] = itemId;
        data['newUOM'] = newUOM;
        data['item_weight'] = itemWeight;
        data['isNewRow'] = isNewRow;

        axios.post(url, data)
        .then((res) => {
            let resData = res.data;
            let item = resData.item;

            if (resData.status === '1') {
                flashBorder(element, true);
                document.getElementById(`itemWeight-${row}`).value = item['item_weight'];
                document.getElementById(`packedAmount-${row}`).value = item['amount'];
                document.getElementById(`totalLineWeight-${row}`).value = item['total_line_weight'];
                uomElement.value = newUOM;
                if(item['in_ounces']){
                    labelHTML = "OZ";
                }
                else if(item['in_lbs']){
                    labelHTML = "LBS";
                }
                else if(item['in_grams']){
                    labelHTML = "G";
                }
                else if(item['in_kilos']){
                    labelHTML = "KG";
                }

                label.innerHTML = labelHTML;

            } else {
                flashBorder(element, false);
                alert(resData.msg || "Update failed, please check your input.");
            }
        })
        .catch((err) => {
            // Enhanced error handling
            flashBorder(element, false);
            alert("Failed to update list item. Please try again later.");
            console.error("Update error:", err);
        });

    };
    this.window.addCategoryGroup = function addCategoryGroup(listId,category, listUOM, userId){

        let columnName;
        if(listUOM === 'us'){
            columnName = 'in_ounces';
        }else{
            columnName = 'in_grams';
        }

        let data = getBooleanData(columnName);
        data['list_id'] = listId;
        data['user_id'] = userId;
        data['item_name'] = '';
        data['item_weight'] = 0;
        data['amount'] = 1;
        data['item_category'] = category;
        data['newCategory'] = true;
        let url = '/list-item'

        axios
        .post(url, data)
        .then((res) => {
            res = res.data;
            if(res.status === '1'){
                location.reload();
            }else{
                alert(res.msg);
            }

        })

        .catch((err) => {

        });

    }
    function flashBorder(element, isSuccess) {
        let columnName = element.getAttribute('data-column-name');
        if(columnName !== 'total_line_weight'){
            element.style.backgroundColor = isSuccess ? '#A8E6CF' : '#F08080';
            // Set a timeout to remove the border after 2 seconds
            setTimeout(() => {
                element.style.backgroundColor = '';
            }, 2000);
        }

    }
    function getBooleanData(columnName) {
        let data = {};
        data["in_ounces"] = false;
        data["in_lbs"] = false;
        data["in_grams"] = false;
        data["in_kilos"] = false;
        data['uom'] = 'us';
        switch (columnName) {
            case "in_ounces":
                data["in_ounces"] = true;
                data['uom'] = 'us';
                break;
            case "in_lbs":
                data["in_lbs"] = true;
                data['uom'] = 'us';
                break;
            case "in_grams":
                data["in_grams"] = true;
                data['uom'] = 'metric';
                break;
            case "in_kilos":
                data["in_kilos"] = true;
                data['uom'] = 'metric';
                break;
            default:
                break;
        }
        return data;
    }

    this.window.updateListItem = function updateListItem(element) {
        // Checking if element is a valid DOM element
        if (!element || !(element instanceof HTMLElement)) {
            console.error("Invalid element provided to updateListItem.");
            return;
        }

        let columnName = element.getAttribute("data-column-name");
        let value = element.value;
        let id = element.id;
        let idArr = id.split("-");

        if (idArr.length === 0) {
            console.error("Invalid ID format.");
            return;
        }

        let row = idArr[idArr.length - 1];
        let itemId = document.getElementById("id-" + row);

        // Check if itemId exists
        if (!itemId) {
            console.error(`Element with ID 'id-${row}' not found.`);
            return;
        }

        let itemIdValue = itemId.value;
        let listId = document.getElementById("listId")?.value || "";
        let url = "/list-item";
        let data = {};
        let userId = document.getElementById("userId")?.value || "";
        let create = true;
        let isMasterList = document.getElementById('isMaster')?.value === 'true';
        let updateCategoryValue = document.getElementById('listViewType')?.value === 'false';
        let isNewRow = document.getElementById(`newRow-${row}`) ? document.getElementById(`newRow-${row}`).value : false;
        let uomRadios = document.querySelectorAll(".form-check-input");
        let uomElement;

        uomRadios.forEach(function (uomRadio) {
            if(uomRadio.type == 'radio' && uomRadio.id.endsWith(row) && uomRadio.checked){
                uomElement = uomRadio;
            }
        });
        let uomColumnName = uomElement.getAttribute("data-column-name");

        if (columnName.startsWith("in_")) {
            data = getBooleanData(columnName);
        }else{
            data = getBooleanData(uomColumnName);
            data[columnName] = value;
        }

        // Assign additional properties to data object

        data["list_id"] = listId;
        data["user_id"] = userId;
        data["id"] = itemIdValue;
        if(updateCategoryValue){
            let select = document.getElementById('itemCategory-'+row).value;
            data['item_category'] = select;
        }

        if (itemIdValue.startsWith('new')) {
            create = true;
        } else {
            create = false;
            url += '/' + itemIdValue;
            if (isMasterList) {
                data['updateMaster'] = true;
            } else if (isNewRow) {
                data['isNewRow'] = true;
            }
        }
        // console.log('data in update: '+ JSON.stringify(data));
        //POST request
        axios.post(url, data)
            .then((res) => {
                let resData = res.data;

                if (resData.status === '1') {
                    flashBorder(element, true);

                    if (create) {
                        itemId.value = resData.newId;
                    }
                    getDeleteBtnData(itemId.value, row);
                } else {
                    flashBorder(element, false);
                    alert(resData.msg || "Update failed, please check your input.");
                }
            })
            .catch((err) => {
                // Enhanced error handling
                flashBorder(element, false);
                alert("Failed to update list item. Please try again later.");
                console.error("Update error:", err);
            });

        if (!isMasterList) {
            updateTotalListWeights();
        }
    };


    function updateTotalListWeights() {
        let baseWeight = 0;
        let totalPackWeight = 0;
        let maxPackWeight = document.getElementById("maxPackWeight").value;
        let classWarningValue = document.getElementById('classWarningValue').value;
        let uomText = "LBS";

        let listId = document.getElementById('listId').value;
        let url = `/get-pack-data/${listId}`;

        axios.get(url)
        .then((res) => {
            let data = res.data;
            let listData = data.listData;
            console.log('list data for pack weights: '+ JSON.stringify(listData));
            if(data.status === '1'){
               baseWeight = listData['baseWeight'];
               totalPackWeight = listData['totalPackWeight'];
               maxPackWeight = listData['maxPackWeight'];
               uomText= listData['weightUom'];
               classWarningValue =listData['classWarningValue']

               if (+baseWeight > +maxPackWeight) {
                   let divElement = document.getElementById("weightWarning-div");
                   divElement.innerText ="Base weight (" +  baseWeight.toFixed(3) +" " +uomText +") exceedes the weight for the '" +classWarningValue+"' style of hiking.";

                   divElement.style.display = "block";
               } else {
                   document.getElementById("weightWarning-div").style.display = "none";
               }

               document.getElementById("baseWeight").value = baseWeight.toFixed(3);
               document.getElementById("totalPackWeight").value =
                   totalPackWeight.toFixed(3);
            }else{
                alert(data.msg);
                return;
            }


        });

    }
    function createListItemInput(
        type,
        nameBase,
        row,
        columnName,
        listen = true
    ) {
        let element = document.createElement("input");
        element.type = type;
        element.name = nameBase + "[]";
        element.id = nameBase + "-" + row;
        element.value = "";
        element.setAttribute("data-column-name", columnName);
        if(listen){
            element.addEventListener("change", function () {
                updateListItem(element);
            });
        }
        return element;
    }
    function getCategroySelect(row, groupCategory = null, listen = true) {

        let select = document.createElement("select");
        select.id = "itemCategory-" + row;
        select.name = "itemCategory-" + row;
        select.setAttribute("data-column-name", "item_category");
        select.className = "form-control";

        let option = document.createElement("option");
        option.value = "";
        option.text = "Choose";
        select.appendChild(option);
        let optionList;

        optionList = async function () {
            try {
                const response = await axios.get("/list-item-categories");
                return response.data;
            } catch (error) {
                // handle error
                console.log(error);
            }
        };


        optionList().then((data) => {

            for (let i = 0; i < data.length; i++) {
                let option = document.createElement("option");
                option.value = data[i].value;
                option.text = data[i].category;
                if (groupCategory != null && data[i].value === groupCategory) {
                    option.selected = true;
                }
                select.appendChild(option);
            }
        });
        if(listen){
            select.addEventListener("change", function () {
                updateListItem(select);
            });
        }


        return select;
    }
    function metricRadioToUs() {
        let inputElements = document.querySelectorAll(".metric-radio");
        inputElements.forEach(function (inputElement) {
            let idArr = inputElement.id.split("-");
            let uom = idArr[1];
            let row = idArr[idArr.length - 1];
            let elementType = inputElement.type;
            let elementTag = inputElement.tagName.toLowerCase();

            let newElement;

            if (elementType === "radio" && uom === "gram") {
                newElement = createRadio("in_ounces", "OZ", "oz", row, true);
            } else if (elementType === "radio" && uom === "kg") {
                newElement = createRadio("in_lbs", "LBS", "lbs", row);
            } else if (elementTag === "label" && uom === "gram") {
                newElement = createLabel("OZ", "uom-oz-" + row, "oz", row);
            } else if (elementTag === "label" && uom === "kg") {
                newElement = createLabel("LBS", "uom-lbs-" + row, "lbs", row);
            }

            if (newElement) {
                inputElement.parentElement.replaceChild(
                    newElement,
                    inputElement
                );
            }
        });
    }
    function usRadioToMetric() {
        let inputElements = document.querySelectorAll(".us-radio");
        inputElements.forEach(function (inputElement) {
            let idArr = inputElement.id.split("-");
            let uom = idArr[1];
            let row = idArr[idArr.length - 1];
            let elementType = inputElement.type;
            let elementTag = inputElement.tagName.toLowerCase();
            let newElement;

            if (elementType === "radio" && uom === "oz") {
                newElement = createRadio("in_grams", "GR", "gram", row);
            } else if (elementType === "radio" && uom === "lbs") {
                newElement = createRadio("in_kilos", "KG", "kg", row);
            } else if (elementTag === "label" && uom === "oz") {
                newElement = createLabel("G", "uom-gram-" + row, "gram", row);
            } else if (elementTag === "label" && uom === "lbs") {
                newElement = createLabel("KG", "uom-kg-" + row, "kg", row);
            }

            if (newElement) {
                inputElement.parentElement.replaceChild(
                    newElement,
                    inputElement
                );
            }
        });
    }
    function createRadio(dataColumnName, label, uom, row) {
        let radio = document.createElement("input");
        radio.className =
            "form-check-input" +
            (uom === "gram" || uom === "kg" ? " metric-radio" : " us-radio");
        radio.type = "radio";
        radio.name = "uom-" + row + "[]";
        radio.id = "uom-" + uom + "-" + row;
        radio.setAttribute("data-column-name", dataColumnName);

        radio.addEventListener("change", function () {
            updateItemUOM(row, radio);
        });
        return radio;
    }
    function createLabel(innerHtml, htmlFor, uom, row, lineLabel = false) {
        let label = document.createElement("label");
        label.className =
            "form-check-label" +
            (uom === "gram" || uom === "kg" ? " metric-radio" : " us-radio");
        label.htmlFor = htmlFor;
        label.innerHTML = innerHtml;
        if (!lineLabel) {
            label.id = "uom-" + uom + "-label-" + row;
        } else {
            label.id = "line-uom-label-" + row;
        }

        return label;
    }

    this.window.updateList = function updateList(element, listId) {
        let columnName = element.getAttribute("data-column-name");
        let value = element.value;
        let url = "/gear-list/" + listId;

        let data = {};
        data[columnName] = value;

        axios
            .post(url, data, listId)
            .then((res) => {
                if(res.data.status === '1'){
                    flashBorder(element, true);
                }else{
                    flashBorder(element, false);
                    alert(res.data.msg);
                }
                // alert(res.data.msg);
            })
            .catch((err) => {
                alert("Failed to update list. Please try again later.");
            });
        if (columnName === "sort" || columnName === "list_class" || columnName === 'list_items') {
            location.reload();
        }
    };

    const headers = document.querySelectorAll(".item-collapsible-header");

    headers.forEach((header) => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            const arrow = header.querySelector(".item-arrow");
            if (content.classList.contains("open")) {
                content.classList.remove("open");
                content.style.maxHeight = null;
                content.style.padding = "0 10px";
                arrow.innerHTML = "&#9660";
            } else {
                content.classList.add("open");
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = "10px";
                arrow.innerHTML = "&#9650";
            }
        });
    });

    let inputs = document.querySelectorAll("#master-item-table input");

    inputs.forEach(function (input) {
        input.disabled = true;
    });

    let listChartbtn =  document.getElementById("listChartBtn");
    if(listChartbtn !== null){
        document .getElementById("listChartBtn").addEventListener("click", function () {
            let listId = document.getElementById("listId").value;
            let url = "/gear-list-analytics/" + listId;

            axios
                .get(url)
                .then((res) => {
                    let chartStatus = Chart.getChart("gearChart");

                    if (chartStatus != undefined) {
                        chartStatus.destroy();
                    }

                    const ctx = document.getElementById("gearChart");
                    let chartData = JSON.parse(res.data.chartData);

                    let myChart = new Chart(ctx, {
                        type: "doughnut", // Chart type
                        data: {
                            labels: chartData.labels,
                            datasets: [
                                {
                                    // label: listName + 'Break Down',
                                    data: chartData.weights,
                                    backgroundColor: chartData.colors,
                                    borderWidth: 1,
                                    hoverOffset: 4,
                                },

                            ],
                        },
                        options: {
                            cutout: 45, // Adjust the cutout percentage here
                            radius: 150,
                            legend: {
                                display: false,
                            },
                            plugins: {
                                datalabels: false,
                                legend: {
                                    labels: {
                                        color: '#fff'
                                    }
                                }
                            },
                            animation: {
                                animateRotate: true,
                                animateScale: true,
                            },
                        },

                    });

                    let baseWeight =
                        document.getElementById("baseWeight").value;
                    let totalPackWeight =
                        document.getElementById("totalPackWeight").value;
                    document.getElementById("modalBaseWeight").textContent =
                        baseWeight;
                    document.getElementById("modalTotalWeight").textContent =
                        totalPackWeight;
                })
                .catch((err) => {
                    alert(err);
                });
        });

    }
    this.window.showConvrsionAlert = function showConvrsionAlert(){
        alert('Changing this value will also update the units of measure and associated values for any item on this gear list.');
    }
    this.window.confirmDelete = function confirmDelete(element) {

        // let isMaster = document.getElementById('isMaster').value;
        let isMaster = document.getElementById('isMaster')?.value === 'true';
        if(!isMaster){
            console.log('is master: '+ isMaster);
        }
        let href = element.getAttribute('data-href');
        let name = element.getAttribute('data-object-name');
        let objectType = element.getAttribute('data-object-type');
        let anchor = document.getElementById('deleteObjectAnchor');
        let modalBody = document.getElementById('deleteModalBody');
        let text = `Are you sure you want to delete ${objectType} ${name}?`;
        let helperDiv = document.getElementById('deleteHelper');
        let helptext;
        helperDiv.innerText = '';
        if(name == '' || name === null || name === undefined){
            text = `Are you sure?`;
        }
        if(objectType === 'item:' && isMaster === false){
            let listName = element.getAttribute('data-list-name');
            helptext = `*Deleting an item from the '${listName}' Gear List will not delete it from your Gear Shed.`;
            helperDiv.append(helptext);
        }
        else if(objectType === 'item:' && isMaster === true){
            helptext = `*Deleting an item from your Gear Shed will delete it from all Gear Lists.`;
            helperDiv.append(helptext);
        }
        else if(objectType === 'category:' && isMaster ===false){
            text = `Are you sure you want to delete all items in the ${name} category from this list?`;
        }
        else if(objectType === 'category:' && isMaster ===true){
            text = `Are you sure you want to delete all items in the ${name} category from ALL your lists?`;
        }
        else if(objectType === 'list:' ){
            text = `Are you sure you want to delete the ${name} list?`;
        }
        else{
            helperDiv.style.display = 'none';
        }

        modalBody.innerHTML = text;
        anchor.setAttribute('href',href);

    }

    function removeRow(row){

        let tableRow = document.getElementById(`row-${row}`)
            tableRow.remove();

    }
    function createDeleteButton(row) {
        let isMaster = document.getElementById('isMaster').value;
        const button = document.createElement('button');
        button.className = 'btn btn-sm btn-danger';
        button.title = 'Delete Item';
        button.id =`deleteItemBtn-${row}`;
        button.setAttribute('data-href','');
        button.setAttribute('data-object-name','');
        button.setAttribute('data-object-id','');
        button.setAttribute('data-object-type','item:');
        if(isMaster === 'false'){
            button.setAttribute('data-list-name',document.getElementById('listName').value);
        }else{
            button.setAttribute('data-list-name','master');
        }


        const icon = document.createElement('i');
        icon.className = 'fas fa-trash';

        button.appendChild(icon);
        button.onclick = function() {
            removeRow(row);
        };

        return button;
    }

    function getDeleteBtnData(id,row){
        let deleteBtn = document.getElementById(`deleteItemBtn-${row}`);
        let url = `/list-item/${id}`;

        axios
        .get(url)
        .then((res) => {
            if (res.data.status != "1") {
                alert(res.data.msg);
                return;
            }

            let item = res.data.item;
            deleteBtn.setAttribute('data-href',`/remove-list-item/${item.id}`);
            deleteBtn.setAttribute('data-object-name',item.item_name);
            deleteBtn.setAttribute('data-object-id',item.id);
            deleteBtn.setAttribute('data-bs-toggle',"modal")
            deleteBtn.setAttribute('data-bs-target',"#deleteAlertModal");
            deleteBtn.onclick = function(){
                confirmDelete(deleteBtn);
            }

        })
        .catch((err) => {
            alert(err);
        });


    }

    document.querySelectorAll(".sortable").forEach(function (table) {
        const categoryId = table.getAttribute("data-category-id");

        new Sortable(table.querySelector("tbody"), {
            animation: 150,
            onEnd: function (evt) {
                // Get the new order of items
                const orderedIds = [];
                table.querySelectorAll("tr").forEach(function (row) {
                    orderedIds.push(row.getAttribute("data-id"));
                });

                // Send the new order to the server via AJAX
                updateItemOrder(categoryId, orderedIds);
            },
        });
    });
    function updateItemOrder(categoryId, orderedIds) {

        let listId = document.getElementById("listId").value;

        let data = {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"),
            category_id: categoryId,
            ordered_ids: orderedIds,
            list_id: listId,
        };

        let url = "/update-list-order";
        axios
            .post(url, data)
            .then((res) => {
                if (res.data.status != "1") {
                    alert(res.data.msg);
                }
            })
            .catch((err) => {
                alert(err);
            });

        let sortingSelect = document.getElementById("sortBy");
        let opts = sortingSelect.options.length;
        for (let i = 0; i < opts; i++) {
            if (sortingSelect.options[i].value == "drag_drop") {
                sortingSelect.options[i].selected = true;
                break;
            }
        }
    }

    let parentContainer = document.querySelector('.parent-container');

    if(parentContainer !== null && parentContainer !== undefined){
        Sortable.create(document.querySelector('.parent-container'), {
            animation: 150,
            handle: '.item-collapsible-header',
            ghostClass: 'sortable-ghost',
            onEnd: function (evt) {
                // After sorting is completed, update the positions in the database
                updateCategoryOrder();
            }
        });
    }



    function updateCategoryOrder() {

        const newOrder = [];
        document.querySelectorAll('.draggable-container').forEach((item, index) => {

            newOrder.push({
                item_category: item.getAttribute('data-category-value'),
                category_order: index
            });


        });

        let url = "/update-caterogry-order";
        let listId = document.getElementById("listId").value;

        let data = {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"),
            category_order: newOrder,
            list_id: listId,
        };
        //break out posts and get calls to own functions
        axios
            .post(url, data)
            .then((res) => {

                if (res.data.status != "1") {
                    alert(res.data.msg);
                }
            })
            .catch((err) => {
                alert(err);
            });

    }

    let assignToListModal =  document.getElementById('AssignItemToListModal');

    if(assignToListModal !== undefined && assignToListModal !== null){

        assignToListModal.addEventListener('hide.bs.modal', function () {
            let tableBody = document.getElementById('modal-assign-item-table-body');
            while(tableBody.firstChild){
                tableBody.removeChild(tableBody.firstChild);
            }

        });
    }


});
