// Array to store product names
let products = ["iPhone", "Macbook", "AirPods", "iPad"];
let selectedIndex = null; // To keep track of selected product index for editing

// Display the product list in a table
function displayProducts() {
    let table = document.getElementById("productTable");
    table.innerHTML = "<tr><th>#</th><th>Product Name</th><th>Action</th></tr>";

    for (let i = 0; i < products.length; i++) {
        let row = `<tr>
                <td>${i + 1}</td>
                <td onclick="selectProduct(${i})">${products[i]}</td>
                <td><button onclick="deleteProduct(${i})">Delete</button></td>
              </tr>`;
        table.innerHTML += row;
    }
}

// Add a new product to the list
function addProduct() {
    let newProduct = document.getElementById("newProduct").value.trim();
    if (newProduct) {
        products.push(newProduct);
        document.getElementById("message").innerText = "Product added!";
        document.getElementById("newProduct").value = "";
        displayProducts();
    } else {
        document.getElementById("message").innerText = "Please enter a product name.";
    }
}

// Select a product to edit (by clicking on its name)
function selectProduct(index) {
    selectedIndex = index;
    document.getElementById("editProduct").value = products[index];
    document.getElementById("editProduct").disabled = false;  // Enable the edit field
}

// Edit the selected product
function editProduct() {
    let newName = document.getElementById("editProduct").value.trim();
    if (selectedIndex !== null && newName) {
        products[selectedIndex] = newName;
        selectedIndex = null;
        document.getElementById("editProduct").value = "";
        document.getElementById("editProduct").disabled = true; // Disable after edit
        displayProducts();
    }
}

// Delete a product from the list
function deleteProduct(index) {
    if (confirm("Are you sure you want to delete this product?")) {
        products.splice(index, 1);
        displayProducts();
    }
}

// Initial call to render product list
displayProducts();
