/*Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
A Bootstrap styled table representing your choice of data.
A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.*/


/*On the conditions that the page is loaded, the function is run. The function sets the name variable equal to the user input from the propmt asking their name. Then referencing the HTML document, it places the name (input from the user) concatenated with a string at the location of the id "promptname" using "getElementById" and assignns the text via "innerHTML".*/

window.onload = function(){

    let name = prompt("Welcome! What is your name?");
    document.getElementById("promptname").innerHTML = name + "'s Birthday Planning List";

}

/*Referencing id in the HTML called "add" (which is the id for the button), the function is performed when the element is clicked.

The function sets a date, table and row variable. The date with no arguement inside will use the current date, the table references the HTML list id (the HTML table), and the row references the table that was just initiated and uses the command "insertRow" at position "1" which will be just under the header position at position 0. To set the attibute on th row, it is given the "id" value that is incremented later in the code. Next the rows are assigned cells with values that match the ids from the HTML document; these take the user's inputs from the form and insert them into the cells.*/

let id = 0;

document.getElementById('add').addEventListener('click', () => {

    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-birth-date').value;
    row.insertCell(1).innerHTML = document.getElementById('new-individual').value;
    row.insertCell(2).innerHTML = document.getElementById('new-gift').value;
    row.insertCell(3).innerHTML = `${createdDate.getMonth() + 1}-${createdDate.getDate()}-${createdDate.getFullYear()}`;

/*Below, actions is established and inserted as a cell. In the cell, the child element is appended. The child element is dicussed below. The incremented "id" value is passed into the "createDeleteButton" to match the row id.*/

    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-birth-date').value = '';

})

/*Now the delete function for the tasks is created. It passes in the id from above. Bootstrap is used to style the button and the button id is set to the id that is passed in. The text "completed is given as the innerHTML show on the button. When the button is clicked, the function runs; the function sets the element to be deleted by the button to the id of the row to be deleted (which was assigned above). It finds of parent of the element to be deleted, and uses the removeChild method to find the arguement passed into it to remove it. When the button is clicked it will delete the row it is assigend to. This button was appended to the table above." */

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Completed';
    btn.onclick = () => {
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}