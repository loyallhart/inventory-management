DROP DATABASE IF EXISTS inventoryManagement_db;
CREATE DATABASE inventoryManagement_db;

CREATE TABLE Products (
    id INT PRIMAY AUTO_INCREMENT,
    categoryID INT NOT NULL,
    name VARCHAR(255) NOT NULL, 
    model VARCHAR(255) NOT NULL,
    manufacturer VARCHAR(255) NOT NULL,
    purchaseDate DATE NOT NULL,
    quantity INT NOT NULL,
    status ENUM('deployed', 'damaged', 'in stock') NOT NULL,
    owner VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (categoryId) REFERENCES Categories(id)
)