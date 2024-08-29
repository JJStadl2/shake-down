import './bootstrap';

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

        let listUOM = document.getElementById('uom').value;
        let finalIElement = document.getElementById('final-i');
        let itemTable = document.getElementById('item-table-body');
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
        // itemName.onclick = '';

        let cell2 = document.createElement("td");
        let itemWeight = createListItemInput('number','itemWeight',finalI,'item_weight');
        itemWeight.value = 0;
        itemWeight.classList.add('for-weight');
        itemWeight.classList.add('number-input');
        itemWeight.classList.add('form-control');
        cell2.classList.add('number-col');

        //for radios on click-> getConversionRate();.
        //add pounds and kilos?
        //set total label on click
        let cell3 = document.createElement("td");
        let ouncesRadio;
        let poundsRadio;
        let gramsRadio;
        let kilosRadio;
        let ouncesRadioLabel;
        let poundsRadioLabel;
        let gramsRadioLabel;
        let kilosRadioLabel;

        if(listUOM === 'us'){

            ouncesRadio = createRadio('in_ounces', '', 'oz', finalI);
            ouncesRadioLabel = createLabel('OZ',  'uom-oz-'+finalI, 'oz', finalI);
            poundsRadio = createRadio('in_pounds', '', 'lbs', finalI);
            poundsRadioLabel = createLabel('LBS',  'uom-lbs-'+finalI, 'lbs', finalI);

        }else{

            gramsRadio = createRadio('in_grams', '', 'gram', finalI);
            gramsRadioLabel =  createLabel('Grams',  'uom-gram-'+finalI, 'gram', finalI);
            kilosRadio =  createRadio('in_kilos', '', 'kg', finalI);
            kilosRadioLabel = createLabel('KG',  'uom-kg-'+finalI, 'kg', finalI);
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
        totalLineWeight.value = 0;//getLineTotalWeight();
        totalLineWeight.setAttribute('data-column-name','total_line_weight');
        totalLineWeight.setAttribute('readonly',true);
        totalLineWeight.classList.add('number-input');
        totalLineWeight.classList.add('form-control');

        //append inputs to cells.
        cell1.appendChild(counter);
        cell1.appendChild(itemName);
        cell2.appendChild(itemWeight);

        let selectCell = document.createElement("td");
        let categorySelect = getCategroySelect(finalI);
        selectCell.append(categorySelect);


        if(listUOM === 'us'){
            cell3.appendChild(ouncesRadio);
            cell3.appendChild(ouncesRadioLabel);
            cell3.appendChild(poundsRadio);
            cell3.appendChild(poundsRadioLabel);
        }else{
            cell3.appendChild(gramsRadio);
            cell3.appendChild(gramsRadioLabel);
            cell3.appendChild(kilosRadio);
            cell3.appendChild(kilosRadioLabel);
        }

        cell4.appendChild(packedAmount);
        cell5.appendChild(totalLineWeight);

        let cell6 = document.createElement('td');
        let deleteBtn = document.createElement('a');
        deleteBtn.id = 'deleteBtn-'+finalI;
        deleteBtn.href = '/destroy-list-item/new-'+finalI;
        deleteBtn.className = 'btn btn-primary btn-sm  py-2';
        deleteBtn.innerHTML = 'x';
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
        lineTotal = Math.round((lineTotal + Number.EPSILON) * 100) / 100;
        // document.getElementById('totalLineWeight-'+row).value = lineTotal;
        lineTotalWeightElement.value = lineTotal;


        updateListItem(lineTotalWeightElement);

    }
    this.window.convertMeasurement = function convertMeasurement(row, convert = false){

        let uom = document.getElementById('uom').value;
        let weight = document.getElementById('itemWeight-'+row);
        let weightValue = weight.value;
        let small;
        let large;

        if(uom === 'us'){
            small = document.getElementById('uom-oz-'+row);
            large = document.getElementById('uom-lbs-'+row);
            if(small.checked === true){
                weightValue = +weightValue * 16;
                updateListItem(small);
            }else{
                weightValue = +weightValue / 16;
                updateListItem(large);
            }

        }else{
            small = document.getElementById('uom-gram-'+row);
            large = document.getElementById('uom-kg-'+row);

            if(small.checked === true){
                weightValue = +weightValue * 1000;
                updateListItem(small);
            }else{
                weightValue = +weightValue /1000;
                updateListItem(large);
            }
        }

        document.getElementById('itemWeight-'+row).value = weightValue;
        getLineTotalWeight(row);


    }
    function getBooleanData(columnName){

        let data = {};
        data['in_ounces'] = false;
        data['in_lbs'] = false;
        data['in_grams'] = false;
        data['in_kilos'] = false;

        switch(columnName){
            case 'in_ounces':
                data['in_ounces'] = true;
                break;
            case 'in_pounds':
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
        let url = '/list-item'
        let update = false;
        let data = {};
        data[columnName] = value;

        if(columnName.substring(0,3) === 'in_'){
            data = getBooleanData(columnName);
        }

        if(itemIdValue.substring(0,3) !== 'new'){
            update = true;
            url = url+'/'+itemIdValue;
        }

        data['list_id'] = listId;

        axios.post(url, data, itemId)
            .then((res) => {
               if(!update){
                itemId.value = res.data.newId;
                deleteBtn.href = '/destroy-list-item/'+res.data.newId;
               }

            }).catch((err) => {
            alert('Failed to update list item. Please try again later.');
            console.error(err);
        });


    }
    function  createListItemInput(type,nameBase,row,columnName){
        let element = document.createElement("input");
        element.type = type;
        element.name = nameBase+"[]";
        element.id = nameBase+'-'+row;
        element.value = '';
        element.setAttribute('data-column-name',columnName);
        element.addEventListener('blur', function() {
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
                newElement = createRadio('in_pounds', 'LBS', 'lbs', row);
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

        // radio.classList.add('for-weight');
        radio.classList.add('for-conversion');
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

                alert(res.data.msg);

            }).catch((err) => {

            alert('Failed to update list. Please try again later.');

        });

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

});


