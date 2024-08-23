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

        let finalIElement = document.getElementById('final-i');
        let itemTable = document.getElementById('item-table-body');
        let finalI = finalIElement.value;
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
        cell1.appendChild(counter);
        cell1.appendChild(itemName);

        let cell2 = document.createElement("td");
        let itemWeight = document.createElement("input");
        itemWeight.type = "number";
        itemWeight.name = "itemWeight[]";
        itemWeight.id = 'itemWeight-'+finalI;
        itemWeight.value = 0;
        itemWeight.setAttribute('data-column-name','item_weight');
        cell2.appendChild(itemWeight);

        let cell3 = document.createElement("td");
        let ouncesRadio = document.createElement("input");
        ouncesRadio.className = 'form-check-input';
        ouncesRadio.type = "radio";
        ouncesRadio.name = "uom[]";
        ouncesRadio.id = 'uom-oz-'+finalI;
        ouncesRadio.setAttribute('data-column-name','in_ounces');
        ouncesRadio.checked = true;

        let ouncesRadioLabel = document.createElement("label");
        ouncesRadioLabel.className = 'form-check-label oz-radio';
        ouncesRadioLabel.htmlFor = 'uom-oz-'+finalI;
        ouncesRadioLabel.innerHTML = 'Ounces';

        let gramsRadio = document.createElement("input");
        gramsRadio.className = 'form-check-input';
        gramsRadio.type = "radio";
        gramsRadio.name = "uom[]";
        gramsRadio.id = 'uom-gram-'+finalI;
        gramsRadio.setAttribute('data-column-name','in_grams');

        let gramsRadioLabel = document.createElement("label");
        gramsRadioLabel.className = 'form-check-label';
        gramsRadioLabel.htmlFor = 'uom-gram-'+finalI;
        gramsRadioLabel.innerHTML = 'Grams';

        cell3.appendChild(ouncesRadio);
        cell3.appendChild(ouncesRadioLabel);
        cell3.appendChild(gramsRadio);
        cell3.appendChild(gramsRadioLabel);

        // let cell4 = document.createElement("td");




        // var cell3 = document.createElement("td");
        // var input3 = document.createElement("input");
        // input3.type = "number";
        // input3.name = "price[]";
        // cell3.appendChild(input3);

        // Append cells to the row
        // row.appendChild(newItemHtml);
        row.appendChild(cell0);
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        // row.appendChild(cell4);

        // Append the row to the table
        itemTable.appendChild(row);



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


