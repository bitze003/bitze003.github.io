# bamazon
<h1>homework10
Bamazon<h1>
Storefront app with functionality for customers to buy products, managers to view products and add inventory, and supervisors to view total profits.

<h3>Technologies<h3>
Node.js, MySQL, Javascript

<h3>Built with<h3>
Sublime Text - Text editor
Javascript
Node.js - Backend
GitHub - Cloud-based storage and version control
MySQL - Database
Terminal - Runs node app
How it Works

Clone repo to your local machine

Create a password.js file with the following code, and insert your password where it says "your password here."

exports.mySqlPw = { password: 'your password here' };

Create database and tables in MySQL using the code in schema file

Install depedencies from package.json file

<h3>Customer App
Customers view all products for sale, then choose one to purchase. Once they've entered in the product and quantity, the app will complete the purchase if there is enough inventory.

Enter "node bamazonCustomer.js" into the command line
Follow the prompts to buy products
Manager App
Managers have four options, to view products for sale, view products with low inventory, add stock to a product, and add new products to be sold