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
        counter.value = finalI;
        counter.setAttribute('data-column-name','id');

        let itemName = document.createElement("input");
        itemName.type = "text";
        itemName.name = "itemName[]";
        itemName.id = 'itemName-'+finalI;
        itemName.value = '';
        itemName.setAttribute('data-column-name','item_name');
        itemName.placeholder = 'Enter the name of the item';
        // itemName.onclick = '';

        let cell2 = document.createElement("td");
        let itemWeight = document.createElement("input");
        itemWeight.type = "number";
        itemWeight.name = "itemWeight[]";
        itemWeight.id = 'itemWeight-'+finalI;
        itemWeight.value = 0;
        itemWeight.setAttribute('data-column-name','item_weight');
        itemWeight.classList.add('for-weight');

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

            ouncesRadio = document.createElement("input");
            ouncesRadio.className = 'form-check-input us-radio';
            ouncesRadio.type = "radio";
            ouncesRadio.name = "uom-"+finalI+"[]";
            ouncesRadio.id = 'uom-oz-'+finalI;
            ouncesRadio.setAttribute('data-column-name','in_ounces');
            ouncesRadio.checked = true;
            ouncesRadio.classList.add('for-weight');

            ouncesRadioLabel = document.createElement("label");
            ouncesRadioLabel.className = 'form-check-label us-radio';
            ouncesRadioLabel.htmlFor = 'uom-oz-'+finalI;
            ouncesRadioLabel.id = 'uom-oz-label-'+finalI;
            ouncesRadioLabel.innerHTML = 'OZ';

            poundsRadio = document.createElement("input");
            poundsRadio.className = 'form-check-input us-radio';
            poundsRadio.type = "radio";
            poundsRadio.name = "uom-"+finalI+"[]";
            poundsRadio.id = 'uom-lbs-'+finalI;
            poundsRadio.setAttribute('data-column-name','in_pounds');
            poundsRadio.classList.add('for-weight');

            poundsRadioLabel = document.createElement("label");
            poundsRadioLabel.className = 'form-check-label us-radio';
            poundsRadioLabel.htmlFor = 'uom-lbs-'+finalI;
            poundsRadioLabel.id = 'uom-lbs-label-'+finalI;
            poundsRadioLabel.innerHTML = 'LBS';

        }else{

            gramsRadio = document.createElement("input");
            gramsRadio.className = 'form-check-input metric-radio';
            gramsRadio.type = "radio";
            gramsRadio.name = "uom-"+finalI+"[]";
            gramsRadio.id = 'uom-gram-'+finalI;
            gramsRadio.checked = true;
            gramsRadio.setAttribute('data-column-name','in_grams');
            gramsRadio.classList.add('for-weight');

            gramsRadioLabel = document.createElement("label");
            gramsRadioLabel.className = 'form-check-label metric-radio';
            gramsRadioLabel.htmlFor = 'uom-gram-'+finalI;
            gramsRadioLabel.innerHTML = 'Grams';
            gramsRadioLabel.id = 'uom-gram-label-'+finalI;

            kilosRadio = document.createElement("input");
            kilosRadio.className = 'form-check-input metric-radio';
            kilosRadio.type = "radio";
            kilosRadio.name = "uom-"+finalI+"[]";
            kilosRadio.id = 'uom-kg-'+finalI;
            kilosRadio.setAttribute('data-column-name','in_kg');
            kilosRadio.classList.add('for-weight');

            kilosRadioLabel = document.createElement("label");
            kilosRadioLabel.className = 'form-check-label metric-radio';
            kilosRadioLabel.htmlFor = 'uom-kg-'+finalI;
            kilosRadioLabel.id = 'uom-kg-label-'+finalI;
            kilosRadioLabel.innerHTML = 'KG';
        }

        let cell4 = document.createElement("td");
        let packedAmount = document.createElement("input");
        packedAmount.type = "number";
        packedAmount.name = "packedAmount[]";
        packedAmount.id = 'packedAmount-'+finalI;
        packedAmount.value = 1;
        packedAmount.setAttribute('data-column-name','amount');
        packedAmount.classList.add('for-weight')

        let cell5 = document.createElement("td");
        let totalLineWeight = document.createElement("input");
        totalLineWeight.type = "number";
        totalLineWeight.name = "totalLineWeight[]";
        totalLineWeight.id = 'totalLineWeight-'+finalI;
        totalLineWeight.value = 0;//getLineTotalWeight();
        totalLineWeight.setAttribute('data-column-name','total_line_weight');
        totalLineWeight.setAttribute('readonly',true);

        //append inputs to cells.
        cell1.appendChild(counter);
        cell1.appendChild(itemName);
        cell2.appendChild(itemWeight);

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

        // Append cells to the row.
        row.appendChild(cell0);
        row.appendChild(cell1);
        row.appendChild(cell2);
        // row.appendChild(cell3);
        row.appendChild(cell4);
        row.appendChild(cell5);
        row.appendChild(cell3);

        // Append the row to the table.
        itemTable.appendChild(row);

        //add function to calculate total weight.
        let neededForWeights = document.querySelectorAll('.for-weight');
        neededForWeights.forEach(function (neededForWeight){
            neededForWeight.addEventListener('change', function() {
                getLineTotalWeight(finalI);
            });
        });
    }

    this.window.updateUOM = function updateUOM(value) {
        if(value !== 'us'){
           usRadioToMetric();
        }else{
            metricRadioToUs();
        }
    }

    function getLineTotalWeight(row){

        let weight = document.getElementById('itemWeight-'+row).value;
        let packedAmount = document.getElementById('packedAmount-'+row).value;
        let lineTotal = 0;

        lineTotal = +weight * +packedAmount;
        lineTotal = Math.round((lineTotal + Number.EPSILON) * 100) / 100;
        document.getElementById('totalLineWeight-'+row).value = lineTotal;

    }
    // function getCategroySelect(){

    // }
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
                newElement = createRadio('in_kg', 'KG', 'kg', row);
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

        radio.classList.add('for-weight');
        return radio;
    }
    function createLabel(innerHtml, htmlFor, uom, row) {
        console.log('uom in create label: '+uom);
        console.log('row in create label: '+row);

        let label = document.createElement("label");
        label.className = 'form-check-label' + (uom === 'gram' || uom === 'kg' ? ' metric-radio' : ' us-radio');
        label.htmlFor = htmlFor;
        label.innerHTML = innerHtml;
        label.id = 'uom-' + uom + '-label-' + row;
        return label;
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


