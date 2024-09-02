// script.js

/**
 * Retrieves the target category from the input field, performs the calculations,
 * and displays the total price and quantity.
 */
function calculatePrice() {
    // Get the target category from the input field
    const categoryInput = document.getElementById('categoryInput');
    let targetCategory = categoryInput.value.trim();

    // Reset totals
    let totalPrice = 0;
    let totalQuantity = 0;


    /*Now we are going to select the table by Id and get the data from all the rows*/
    const table = document.getElementById('productsTable'); 
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr'); 

    // Loop through the rows to calculate total price and quantity for the target category
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        if (cells.length > 0) {                                                                /*This conditions means that if the no. of cells is greater than 0, what's inside the if statement will execute */
            const category = cells[1].getElementsByTagName('input')[0].value.trim();           /*This iterates through the second row (category) and gets all the elements from the input cell and trims the value in case the user left extra spaces*/ 
            const price = parseFloat(cells[2].getElementsByTagName('input')[0].value) || 0;    /*This accesses and retrieves all the values from the input on the third cell (price) */
            const quantity = parseInt(cells[3].getElementsByTagName('input')[0].value) || 0;   /*This accesses and retrieves all the values from the price column */
            /*All commands until now have been used to retrieve data from our html cells*/ 

            if (category === targetCategory) {                                                 /*This function calculates the total price by multiplying all the elements accessed provided that they belong to the  */
                totalPrice += price * quantity;
                totalQuantity += quantity;
            }
        }
    }

    // Display the total price and quantity for the selected category
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <p>So here is the recap:</p>
        <p>The total price for all ${targetCategory} products is ${totalPrice.toFixed(2)} $.</p>
    `; 

    
}

// Add event listener to the button
document.getElementById('calculateButton').addEventListener('click', calculatePrice);


