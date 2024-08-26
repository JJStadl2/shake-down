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

        let listUOM = document.getElementById('list-uom').value;
        let finalIElement = document.getElementById('final-i');
        let itemTable = document.getElementById('item-table-body');
        let finalI = finalIElement.value;
        console.log('inal i before update: '+finalI);
        finalIElement.value = +finalI + 1;

        let row = document.createElement("tr");

        // Create cells and input elements
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
        // cell1.appendChild(counter);
        // cell1.appendChild(itemName);

        let cell2 = document.createElement("td");
        let itemWeight = document.createElement("input");
        itemWeight.type = "number";
        itemWeight.name = "itemWeight[]";
        itemWeight.id = 'itemWeight-'+finalI;
        itemWeight.value = 0;
        itemWeight.setAttribute('data-column-name','item_weight');
        itemWeight.classList.add('for-weight');
        itemWeight.addEventListener('blur', function() {
            getLineTotalWeight(finalI, listUOM)
        });

        // cell2.appendChild(itemWeight);

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
            ouncesRadio.className = 'form-check-input';
            ouncesRadio.type = "radio";
            ouncesRadio.name = "uom-"+finalI+"[]";
            ouncesRadio.id = 'uom-oz-'+finalI;
            ouncesRadio.setAttribute('data-column-name','in_ounces');
            ouncesRadio.checked = true;
            ouncesRadio.classList.add('for-weight')


            ouncesRadioLabel = document.createElement("label");
            ouncesRadioLabel.className = 'form-check-label oz-radio';
            ouncesRadioLabel.htmlFor = 'uom-oz-'+finalI;
            ouncesRadioLabel.innerHTML = 'OZ';

            poundsRadio = document.createElement("input");
            poundsRadio.className = 'form-check-input';
            poundsRadio.type = "radio";
            poundsRadio.name = "uom-"+finalI+"[]";
            poundsRadio.id = 'uom-lbs-'+finalI;
            poundsRadio.setAttribute('data-column-name','in_pounds');
            poundsRadio.classList.add('for-weight')

            poundsRadioLabel = document.createElement("label");
            poundsRadioLabel.className = 'form-check-label oz-radio';
            poundsRadioLabel.htmlFor = 'uom-lbs-'+finalI;
            poundsRadioLabel.innerHTML = 'LBS';

            ouncesRadio.addEventListener('change', function() {
                getLineTotalWeight(finalI, listUOM)
            });
            poundsRadio.addEventListener('change', function() {
                getLineTotalWeight(finalI, listUOM)
            });

            // cell3.appendChild(ouncesRadio);
            // cell3.appendChild(ouncesRadioLabel);
            // cell3.appendChild(poundsRadio);
            // cell3.appendChild(poundsRadioLabel);

        }else{

            gramsRadio = document.createElement("input");
            gramsRadio.className = 'form-check-input';
            gramsRadio.type = "radio";
            gramsRadio.name = "uom-"+finalI+"[]";
            gramsRadio.id = 'uom-gram-'+finalI;
            gramsRadio.setAttribute('data-column-name','in_grams');
            gramsRadio.classList.add('for-weight')

            gramsRadioLabel = document.createElement("label");
            gramsRadioLabel.className = 'form-check-label';
            gramsRadioLabel.htmlFor = 'uom-gram-'+finalI;
            gramsRadioLabel.innerHTML = 'Grams';

            kilosRadio = document.createElement("input");
            kilosRadio.className = 'form-check-input';
            kilosRadio.type = "radio";
            kilosRadio.name = "uom-"+finalI+"[]";
            kilosRadio.id = 'uom-kilo-'+finalI;
            kilosRadio.setAttribute('data-column-name','in_kg');
            kilosRadio.classList.add('for-weight')

            kilosRadioLabel = document.createElement("label");
            kilosRadioLabel.className = 'form-check-label';
            kilosRadioLabel.htmlFor = 'uom-kg-'+finalI;
            kilosRadioLabel.innerHTML = 'KG';

            // cell3.appendChild(gramsRadio);
            // cell3.appendChild(gramsRadioLabel);
            // cell3.appendChild(kilosRadio);
            // cell3.appendChild(kilosRadioLabel);

        }


        //on change update and run total line calc.
        let cell4 = document.createElement("td");
        let packedAmount = document.createElement("input");
        packedAmount.type = "number";
        packedAmount.name = "packedAmount[]";
        packedAmount.id = 'packedAmount-'+finalI;
        packedAmount.value = 1;
        packedAmount.setAttribute('data-column-name','amount');
        packedAmount.classList.add('for-weight')
        // cell4.appendChild(packedAmount);

        let cell5 = document.createElement("td");
        let totalLineWeight = document.createElement("input");
        totalLineWeight.type = "number";
        totalLineWeight.name = "totalLineWeight[]";
        totalLineWeight.id = 'totalLineWeight-'+finalI;
        totalLineWeight.value = 0;//getLineTotalWeight();
        totalLineWeight.setAttribute('data-column-name','total_line_weight');
        totalLineWeight.setAttribute('readonly',true);
        // cell5.appendChild(totalLineWeight);

        let neededForWeights = document.querySelectorAll('.for-weight');
        neededForWeights.forEach(function (neededForWeight){
            neededForWeight.addEventListener('change', function() {
                console.log('element id: '+neededForWeight.id);
                console.log('in needed for weight');
                getLineTotalWeight(finalI, listUOM);
            });
        });

        //append inputs to cells
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
        // Append cells to the row
        row.appendChild(cell0);
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        row.appendChild(cell5);

        // Append the row to the table
        itemTable.appendChild(row);


    }
    function getLineTotalWeight(row,uom){
        console.log('row: '+row);
        let weight = document.getElementById('itemWeight-'+row).value;
        console.log('weight: '+weight);
        let packedAmount = document.getElementById('packedAmount-'+row).value;
        console.log('amount: '+packedAmount);
        let is_us = false;
        let is_metric = false;
        let is_pounds = false;
        let is_ounce = false;
        let is_grams = false;
        let is_kilos = false;
        let lineTotal = 0;

        if(uom === 'us'){
            is_us = true;
            is_pounds = document.getElementById('uom-lbs-'+row).checked;
            is_ounce = document.getElementById('uom-oz-'+row).checked;
            console.log('is_pounds: '+is_pounds);
            console.log('is_ounces: '+is_ounce);
        }else{
            is_metric = true;
            is_kilos = document.getElementById('uom-kilos-'+row).checked;
            is_grams = document.getElementById('uom-grams-'+row).checked;
        }

        lineTotal = +weight * +packedAmount;
        console.log('line total: '+lineTotal);
        document.getElementById('totalLineWeight-'+row).value = lineTotal;


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


