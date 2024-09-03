import './bootstrap';

const gramConverter = 1000;
const ounceConverter = 16;
window.addEventListener("DOMContentLoaded", function(e) {

    this.window.showPassword = function showPassword(id){
            let password = document.getElementById(id);
        if (password.type === "password") {
                password.type = "text";
        } else {
            password.type = "password";
        }
    }
    this.window.addListItem = function addListItem(){

        let numberOfItemsToAdd = document.getElementById('linesToAdd');
        let linesToAdd = 1;
        if(+numberOfItemsToAdd.value < 1){
            numberOfItemsToAdd.value = linesToAdd;
        }else{
            linesToAdd = +numberOfItemsToAdd.value;
        }

        for(let i = 0; i < linesToAdd; i++){


            let listUOM = document.getElementById('uom').value;
            let finalIElement = document.getElementById('final-i');
            let itemTable = document.getElementById('item-table-body');
            let userId = document.getElementById('userId').value;
            let listId = document.getElementById('listId').value;
            let finalI = finalIElement.value;
            finalIElement.value = +finalI + 1;

            let row = document.createElement("tr");

            // Create cells and input elements.
            let cell0 = document.createElement("th");
            cell0.scope = 'row';
            cell0.innerHTML = finalI;

            let cell1 = document.createElement("td");

            let counter = document.createElement("input");
            counter.type = "hidden";
            counter.name = "id[]";
            counter.id = 'id-'+finalI;
            counter.value = 'new-'+finalI;
            counter.setAttribute('data-column-name','id');

            let itemName =  createListItemInput('text','itemName',finalI,'item_name');
            itemName.placeholder = 'Item Name';
            itemName.classList.add('form-control');

            let cell6 = document.createElement('td');
            cell6.id = 'btn-td-'+finalI;
            let deleteBtn = document.createElement('a');
            deleteBtn.id = 'deleteBtn-'+finalI;
            deleteBtn.className = 'btn btn-primary btn-sm  py-2';
            deleteBtn.innerHTML = 'x';

            let data = {};
            let url = '/list-item';
            data['list_id'] = listId;
            data['user_id'] = userId;
            data['item_name'] = '';
            let updateItem;
            updateItem = async function (){
                try {
                    const response = await axios.post(url, data);
                    return response.data;
                } catch (error) {
                    // handle error
                    console.log(error);
                }
            };

            // To use the function and handle the response data
            updateItem().then((data) => {
                // Do something with the response data
                counter.value = data.newId;
                deleteBtn.setAttribute('href', '/destroy-list-item/'+data.newId);
            });

            let cell2 = document.createElement("td");
            let itemWeight = createListItemInput('number','itemWeight',finalI,'item_weight');
            itemWeight.value = 0;
            itemWeight.classList.add('for-weight');
            itemWeight.classList.add('number-input');
            itemWeight.classList.add('form-control');
            cell2.classList.add('number-col');

            let cell3 = document.createElement("td");
            let radio1;
            let radio2;
            let radioLabel1;
            let radioLabel2;

            if(listUOM === 'us'){

                radio1 = createRadio('in_ounces', '', 'oz', finalI);
                radioLabel1 = createLabel('OZ',  'uom-oz-'+finalI, 'oz', finalI);
                radio2 = createRadio('in_lbs', '', 'lbs', finalI);
                radioLabel2 = createLabel('LBS',  'uom-lbs-'+finalI, 'lbs', finalI);

            }else{

                radio1 = createRadio('in_grams', '', 'gram', finalI);
                radioLabel1 =  createLabel('Grams',  'uom-gram-'+finalI, 'gram', finalI);
                radio2 =  createRadio('in_kilos', '', 'kg', finalI);
                radioLabel2 = createLabel('KG',  'uom-kg-'+finalI, 'kg', finalI);
            }

            let cell4 = document.createElement("td");
            cell4.classList.add('number-col');
            let packedAmount = createListItemInput('number','packedAmount',finalI,'amount');
            packedAmount.value = 1;

            packedAmount.classList.add('for-weight');
            packedAmount.classList.add('number-input');
            packedAmount.classList.add('form-control');

            let cell5 = document.createElement("td");
            cell5.classList.add('number-col');
            let totalLineWeight = createListItemInput('number','totalLineWeight',finalI,'total_line_weight');
            totalLineWeight.value = 0;
            totalLineWeight.setAttribute('data-column-name','total_line_weight');
            totalLineWeight.setAttribute('readonly',true);
            totalLineWeight.classList.add('number-input');
            totalLineWeight.classList.add('form-control');
            totalLineWeight.classList.add('for-total-list-weight');

            //append inputs to cells.
            cell1.appendChild(counter);
            cell1.appendChild(itemName);
            cell2.appendChild(itemWeight);

            let selectCell = document.createElement("td");
            let categorySelect = getCategroySelect(finalI);
            selectCell.append(categorySelect);

            cell3.appendChild(radio1);
            cell3.appendChild(radioLabel1);
            cell3.appendChild(radio2);
            cell3.appendChild(radioLabel2);

            cell4.appendChild(packedAmount);
            cell5.appendChild(totalLineWeight);
            cell6.appendChild(deleteBtn);


            // Append cells to the row.
            row.appendChild(cell0);
            row.appendChild(cell1);
            row.appendChild(selectCell);
            row.appendChild(cell3);
            row.appendChild(cell2);
            row.appendChild(cell4);
            row.appendChild(cell5);
            row.appendChild(cell6);


            // Append the row to the table.
            itemTable.appendChild(row);

            //add functions to calculate and convert total weight.
            addEventListenerWeightCalc(finalI);
        }
        numberOfItemsToAdd.value=1;

    }

    this.window.updateUOM = function updateUOM(value) {
        if(value !== 'us'){
           usRadioToMetric();
        }else{
            metricRadioToUs();
        }
    }
    function addEventListenerWeightCalc(row){
        let neededForWeights = document.querySelectorAll('.for-weight');
        neededForWeights.forEach(function (neededForWeight){
            neededForWeight.addEventListener('change', function() {
                getLineTotalWeight(row);
            });
        });
     }

     this.window.getLineTotalWeight = function getLineTotalWeight(row,convert = false){

        let weight = document.getElementById('itemWeight-'+row).value;
        let packedAmount = document.getElementById('packedAmount-'+row).value;
        let uom = document.getElementById('uom');
        let lineTotalWeightElement =  document.getElementById('totalLineWeight-'+row);

        let lineTotal = 0;
        lineTotal = +weight * +packedAmount;
        lineTotal = lineTotal.toFixed(2).replace(/[.,]00$/, "");
        lineTotalWeightElement.value = lineTotal;

        updateListItem(lineTotalWeightElement);


    }
    this.window.convertMeasurement = function convertMeasurement(row, convert = false){

        let uom = document.getElementById('uom').value;
        let weight = document.getElementById('itemWeight-'+row);
        let packedAmount = document.getElementById('packedAmount-'+row).value;
        let totalWeight =  document.getElementById('totalLineWeight-'+row)
        let totalLineWeightValue = 0;
        let weightValue = weight.value;
        let small;
        let large;
        let element;

        if(uom === 'us'){
            small = document.getElementById('uom-oz-'+row);
            large = document.getElementById('uom-lbs-'+row);
            if(small.checked === true){
                weightValue = +weightValue * 16;
                element = small;
            }else{
                weightValue = +weightValue / 16;
                element = large
            }

        }else{
            small = document.getElementById('uom-gram-'+row);
            large = document.getElementById('uom-kg-'+row);

            if(small.checked === true){
                weightValue = +weightValue * 1000;
                element = small;
            }else{
                weightValue = +weightValue /1000;
                element = large
            }

        }

        totalLineWeightValue = +weightValue * +packedAmount;
        weight.value = weightValue.toFixed(2).replace(/[.,]00$/, "");
        totalWeight.value = totalLineWeightValue.toFixed(2).replace(/[.,]00$/, "");
        updateListItem(element);
        updateListItem(weight);
        updateListItem(totalWeight);

    }
    function getBooleanData(columnName){

        let data = {};
        switch(columnName){
            case 'in_ounces':
                data['in_ounces'] = true;
                break;
            case 'in_lbs':
                data['in_lbs'] = true;
                break
            case 'in_grams':
                data['in_grams'] = true;
                break
            case 'in_kilos':
                data['in_kilos'] = true;
               break;
            default:
                break;
        }
        return data;
    }
    this.window.updateListItem = function updateListItem(element){

        let columnName = element.getAttribute('data-column-name');
        let value = element.value;
        let id = element.id;
        let idArr = id.split('-');
        let arrLength = idArr.length
        let row = idArr[arrLength-1];
        let itemId = document.getElementById('id-'+row);
        let itemIdValue = itemId.value;
        let listId = document.getElementById('listId').value;
        let deleteBtn = document.getElementById('deleteBtn-'+row);
        let url = '/list-item/'+itemIdValue;
        // let update = false;
        let data = {};
        // let tdCell = document.getElementById('btn-td-'+row);
        let userId = document.getElementById('userId').value;
        // let deleteLink = document.createElement('a');
        // deleteLink.id = 'deleteBtn-'+row;
        // deleteLink.className = 'btn btn-primary btn-sm  py-2';
        // deleteLink.innerHTML = 'x';

        data[columnName] = value;

        if(columnName.substring(0,3) === 'in_'){
            data = getBooleanData(columnName);
        }

        data['list_id'] = listId;
        data['user_id'] = userId;
        data['id'] = itemIdValue;

        axios.post(url, data, itemId)
            .then((res) => {

            }).catch((err) => {
            alert('Failed to update list item. Please try again later.');
            console.error(err);
        });

        updateTotalListWeights();

    }
    function updateTotalListWeights(){

        let weightsForPW = document.querySelectorAll('.for-total-list-weight');
        let baseWeight = 0;
        let totalPackWeight = 0;
        weightsForPW.forEach(function (weightForPW){

            let id = weightForPW.id;
            let idArr = id.split('-');
            console.log('id in  TPW: '+id);
            let arrLength = idArr.length
            let row = idArr[arrLength-1];
            let packedAmount = document.getElementById('packedAmount-'+row).value
            let converter = 1;
            let rowWeight = +weightForPW.value;
            console.log('row weight in  TPW: '+rowWeight);
            let uom = document.getElementById('uom').value;
            let itemCategoryElement = document.getElementById('itemCategory-'+row);
            let itemCategory = '';
            if(itemCategoryElement){
                itemCategory = itemCategoryElement.value;
            }

            console.log('row in TPW: '+row);
            if(itemCategory === undefined || itemCategory === null){
                itemCategory = '';
            }


            if(uom === 'us'){
                if(document.getElementById('uom-oz-'+row).checked === true){
                    converter = ounceConverter;
                }
            }else{
                if(document.getElementById('uom-oz-'+row).checked === true){
                    converter = gramConverter;
                }
            }

            totalPackWeight = totalPackWeight + (+packedAmount *  (+rowWeight/converter));
            if(itemCategory !== 'consumables'){
                baseWeight = baseWeight + (+packedAmount * (+rowWeight/converter));
            }

        });
        document.getElementById('baseWeight'). value = baseWeight.toFixed(2);
        document.getElementById('totalPackWeight').value = totalPackWeight.toFixed(2);
    }
    function  createListItemInput(type,nameBase,row,columnName){
        let element = document.createElement("input");
        element.type = type;
        element.name = nameBase+"[]";
        element.id = nameBase+'-'+row;
        element.value = '';
        element.setAttribute('data-column-name',columnName);
        element.addEventListener('change', function() {
            updateListItem(element);
        });

        return element;

    }
    function getCategroySelect(row){

        let select =  document.createElement("select");
        select.id = 'ItemCategory-'+row;
        select.name = 'itemCategory-'+row;
        select.setAttribute('data-column-name','item_category');
        select.className = 'form-control';

        let option = document.createElement("option");
        option.value = '';
        option.text ='Choose';
        select.appendChild(option);
        let optionList;

            optionList = async function (){
                try {
                    const response = await axios.get('/list-item-categories');
                    return response.data;
                } catch (error) {
                    // handle error
                    console.log(error);
                }
            };

            // To use the function and handle the response data
            optionList().then((data) => {
                // Do something with the response data
                 for(let i = 0; i < data.length ;i++){
                    let option = document.createElement("option");
                    option.value = data[i].value;
                    option.text =data[i].category;
                    select.appendChild(option);
                 }
            });

        select.addEventListener('change', function() {
            updateListItem(select);
        });

        return select;

    }
    function metricRadioToUs(){
        let inputElements = document.querySelectorAll('.metric-radio');
        inputElements.forEach(function (inputElement) {

            let idArr = inputElement.id.split('-');
            let uom = idArr[1];
            let row = idArr[idArr.length - 1];
            let elementType = inputElement.type;
            let elementTag = inputElement.tagName.toLowerCase();

            let newElement;

            if (elementType === 'radio' && uom === 'gram') {
                newElement = createRadio('in_ounces', 'OZ', 'oz', row, true);
            } else if (elementType === 'radio' && uom === 'kg') {
                newElement = createRadio('in_lbs', 'LBS', 'lbs', row);
            } else if (elementTag === 'label' && uom === 'gram') {
                newElement = createLabel('OZ', 'uom-oz-' + row, 'oz', row);
            } else if (elementTag === 'label' && uom === 'kg') {
                newElement = createLabel('LBS', 'uom-lbs-' + row, 'lbs', row);
            }

            if (newElement) {
                inputElement.parentElement.replaceChild(newElement, inputElement);
            }
        });

    }
    function usRadioToMetric(){
        let inputElements = document.querySelectorAll('.us-radio');
        inputElements.forEach(function (inputElement) {

            let idArr = inputElement.id.split('-');
            let uom = idArr[1];
            let row = idArr[idArr.length - 1];
            let elementType = inputElement.type;
            let elementTag = inputElement.tagName.toLowerCase();
            let newElement;

            if (elementType === 'radio' && uom === 'oz') {
                newElement = createRadio('in_grams', 'Grams', 'gram', row);
            } else if (elementType === 'radio' && uom === 'lbs') {
                newElement = createRadio('in_kilos', 'KG', 'kg', row);
            } else if (elementTag === 'label' && uom === 'oz') {
                newElement = createLabel('Grams', 'uom-gram-' + row, 'gram', row);
            } else if (elementTag === 'label' && uom === 'lbs') {
                newElement = createLabel('KG', 'uom-kg-' + row, 'kg', row);
            }

            if (newElement) {
                inputElement.parentElement.replaceChild(newElement, inputElement);
            }
        });
    }
    function createRadio(dataColumnName, label, uom, row) {

        let radio = document.createElement("input");
        radio.className = 'form-check-input' + (uom === 'gram' || uom === 'kg' ? ' metric-radio' : ' us-radio');
        radio.type = "radio";
        radio.name = "uom-" + row + "[]";
        radio.id = 'uom-' + uom + '-' + row;
        radio.setAttribute('data-column-name', dataColumnName);

        if(uom === 'gram' || uom === 'oz'){
            radio.checked = true;
        }
        radio.addEventListener('change', function() {
            convertMeasurement(row);
        });
        return radio;
    }
    function createLabel(innerHtml, htmlFor, uom, row) {

        let label = document.createElement("label");
        label.className = 'form-check-label' + (uom === 'gram' || uom === 'kg' ? ' metric-radio' : ' us-radio');
        label.htmlFor = htmlFor;
        label.innerHTML = innerHtml;
        label.id = 'uom-' + uom + '-label-' + row;
        return label;
    }

    this.window.updateList = function updateList(element, listId){

        let columnName = element.getAttribute('data-column-name');
        let value = element.value;
        let url = '/gear-list/'+listId;

        let data = {};
        data[columnName] = value;

        axios.post(url, data, listId)
            .then((res) => {

                // alert(res.data.msg);

            }).catch((err) => {

            alert('Failed to update list. Please try again later.');

        });
        if(columnName === 'sort' || columnName === 'list_class'){
            location.reload();
        }

    }


    const headers = document.querySelectorAll('.form-collapsible-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const arrow = header.querySelector('.form-arrow');
            if (content.classList.contains('open')) {
                content.classList.remove('open');
                content.style.maxHeight = null;
                content.style.padding = '0 10px';
                arrow.innerHTML = '&#9660';


            } else {
                content.classList.add('open');
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.padding = '10px';
                arrow.innerHTML = '&#9650';
            }
        });
    });

    let inputs = document.querySelectorAll('#master-item-table input');
    let selectInputs = document.querySelectorAll('select');

    inputs.forEach(function(input) {
        input.disabled = true;
    });
    // selectInputs.forEach(function(selectInput) {
    //     selectInput.disabled = true;
    // });




});


