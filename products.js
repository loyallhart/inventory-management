// Retrieve inventory data from backend API
axios.get('/api/inventory')
  .then(response => {
    // Parse inventory data and count products under different categories
    let totalProducts = 0;
    let lowStockProducts = 0;
    let outOfStockProducts = 0;
    let damagedInventory = 0;
    let internalProducts = 0;

    response.data.forEach(product => {
      totalProducts++;
      if (product.stock < 10) {
        lowStockProducts++;
      }
      if (product.stock === 0) {
        outOfStockProducts++;
      }
      if (product.status === 'damaged') {
        damagedInventory++;
      }
      if (product.location === 'internal') {
        internalProducts++;
      }
    });

    // Display inventory status on dashboard
    document.getElementById('total-products').textContent = totalProducts;
    document.getElementById('low-stock-products').textContent = lowStockProducts;
    document.getElementById('out-of-stock-products').textContent = outOfStockProducts;
    document.getElementById('damaged-inventory').textContent = damagedInventory;
    document.getElementById('internal-products').textContent = internalProducts;
  })
  .catch(error => console.log(error));
