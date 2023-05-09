// // Retrieve inventory data from backend API
// fetch('/products')
//   .then(response => {
//     // Parse inventory data and count products under different categories
//     let totalProducts = 0;
//     let lowStockProducts = 0;
//     let outOfStockProducts = 0;
//     let damagedInventory = 0;
//     let internalProducts = 0;

//     response.data.forEach(product => {
//       totalProducts++;
//       if (product.quantity < 10) {
//         lowStockProducts++;
//       }
//       if (product.quantity === 0) {
//         outOfStockProducts++;
//       }
//       if (product.status === 'damaged') {
//         damagedInventory++;
//       }
    
//     });

//     // Display inventory status on dashboard
//     document.getElementById('total-products').textContent = totalProducts;
//     document.getElementById('low-stock-products').textContent = lowStockProducts;
//     document.getElementById('out-of-stock-products').textContent = outOfStockProducts;
//     document.getElementById('damaged-inventory').textContent = damagedInventory;
//     // 
  
//   })
//   .catch(error => console.log(error));
// // when user clicks on an icon, a table with information will show 
//   const div = document.getElementById("dropdown");
//   div.style.display = "block";
  
function fetchProducts(){
   fetch("/products")
   .then((response) => response.json())
   .then((data) =>{
   const products = data.products
      let placeholder = document.querySelector("#data-output");
      let out = "";
      for(let product of products){
         out += 
         ` <tr>
               <td>${product.name}</td>
               <td>${product.model}</td>
               <td>${product.manufacturer}</td>
               <td>${product.formatted_date}</td>
               <td>${product.quantity}</td>
               <td>${product.status}</td>
               <td>${(product.owner) ? product.owner : "Not Assigned"}</td>
            </tr>
         `;
      }
      placeholder.innerHTML = out;
   });
}

function fetchInStock(){
   fetch("/reports/instock")
   .then((response) => response.json())
   .then((data) =>{
   const products = data.inStock
      let placeholder = document.querySelector("#data-output");
      let out = "";
      for(let product of products){
         out += 
         ` <tr>
               <td>${product.name}</td>
               <td>${product.model}</td>
               <td>${product.manufacturer}</td>
               <td>${product.formatted_date}</td>
               <td>${product.quantity}</td>
               <td>${product.status}</td>
               <td>${(product.owner) ? product.owner : "Not Assigned"}</td>
            </tr>
         `;
      }
      placeholder.innerHTML = out;
   });
}

function fetchLowStock(){
   fetch("/reports/lowStock")
   .then((response) => response.json())
   .then((data) =>{
   const products = data.lowStock
      let placeholder = document.querySelector("#data-output");
      let out = "";
      for(let product of products){
         out += 
         ` <tr>
               <td>${product.name}</td>
               <td>${product.model}</td>
               <td>${product.manufacturer}</td>
               <td>${product.formatted_date}</td>
               <td>${product.quantity}</td>
               <td>${product.status}</td>
               <td>${(product.owner) ? product.owner : "Not Assigned"}</td>
            </tr>
         `;
      }
      placeholder.innerHTML = out;
   });
}

function fetchStockOut(){
   fetch("/reports/stockOut")
   .then((response) => response.json())
   .then((data) =>{
   const products = data.stockOut
      let placeholder = document.querySelector("#data-output");
      let out = "";
      for(let product of products){
         out += 
         ` <tr>
               <td>${product.name}</td>
               <td>${product.model}</td>
               <td>${product.manufacturer}</td>
               <td>${product.formatted_date}</td>
               <td>${product.quantity}</td>
               <td>${product.status}</td>
               <td>${(product.owner) ? product.owner : "Not Assigned"}</td>
            </tr>
         `;
      }
      placeholder.innerHTML = out;
   });
}

function fetchDamaged(){
   fetch("/reports/damaged")
   .then((response) => response.json())
   .then((data) =>{
   const products = data.damaged
      let placeholder = document.querySelector("#data-output");
      let out = "";
      for(let product of products){
         out += 
         ` <tr>
               <td>${product.name}</td>
               <td>${product.model}</td>
               <td>${product.manufacturer}</td>
               <td>${product.formatted_date}</td>
               <td>${product.quantity}</td>
               <td>${product.status}</td>
               <td>${(product.owner) ? product.owner : "Not Assigned"}</td>
            </tr>
         `;
      }
      placeholder.innerHTML = out;
   });
}
