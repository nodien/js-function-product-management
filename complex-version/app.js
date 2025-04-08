// Product list
let products = ["iPhone", "Macbook", "AirPods", "iPad"];

// Render all products in the table
function displayProducts() {
    const table = document.getElementById("productTable");
    table.innerHTML = "<tr><th>#</th><th>Product Name</th><th>Actions</th></tr>";

    products.forEach((product, index) => {
        const row = createRow(index, product);
        table.appendChild(row);
    });
}

// Create a table row with cells for product details and actions
function createRow(index, product) {
    const row = document.createElement("tr");

    row.appendChild(createIndexCell(index));
    row.appendChild(createInputCell(index, product));  // Passing product name here
    row.appendChild(createActionsCell(index));

    return row;
}

// Create a cell that displays the index of the product
function createIndexCell(index) {
    const cell = document.createElement("td");
    cell.innerText = index + 1;  // Display the index as the row number
    return cell;
}

// Create a cell with an input element to display/edit the product name
function createInputCell(index, product) {
    const cell = document.createElement("td");
    const input = createInputField(index, product);  // Initialize input with product name
    cell.appendChild(input);
    return cell;
}

// Create an input field to display or edit the product name
function createInputField(index, product) {
    const input = document.createElement("input");
    input.type = "text";
    input.value = product;
    input.disabled = true;
    input.id = `input-${index}`;
    return input;
}

// Create the cell that contains action buttons (Edit and Delete)
function createActionsCell(index) {
    const cell = document.createElement("td");

    const editBtn = createEditButton(index);
    const deleteBtn = createDeleteButton(index);

    cell.appendChild(editBtn);
    cell.appendChild(deleteBtn);

    return cell;
}

// Create an Edit button for a product
function createEditButton(index) {
    const button = document.createElement("button");
    button.innerText = "Edit";
    button.onclick = function () {
        toggleEditMode(index, button);
    };
    return button;
}

// Toggle between edit and save modes for a product
function toggleEditMode(index, button) {
    const input = document.getElementById(`input-${index}`);
    if (button.innerText === "Edit") {
        input.disabled = false;
        input.focus();
        button.innerText = "Save";
    } else {
        const newValue = input.value.trim();
        if (newValue) {
            products[index] = newValue;
            button.innerText = "Edit";
            input.disabled = true;
            displayMessage("Product updated!");
        } else {
            displayMessage("Name cannot be empty.");
        }
    }
}

// Create a Delete button for a product
function createDeleteButton(index) {
    const button = document.createElement("button");
    button.innerText = "Delete";
    button.onclick = function () {
        deleteProduct(index);
    };
    return button;
}

// Delete a product from the list
function deleteProduct(index) {
    if (confirm("Are you sure you want to delete this product?")) {
        products.splice(index, 1); // Remove the product from the array
        displayProducts(); // Re-render the product list
    }
}

// Add a new product to the list
function addProduct() {
    const input = document.getElementById("newProduct");
    const value = input.value.trim();
    if (value) {
        products.push(value);
        input.value = "";
        displayMessage("Product added!");
        displayProducts();
    } else {
        displayMessage("Please enter a product name.");
    }
}

// Display a message on the screen
function displayMessage(msg) {
    document.getElementById("message").innerText = msg;
}

// Initial display of products
displayProducts();
