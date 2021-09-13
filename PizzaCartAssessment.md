# Buying Pizzas online

Zandile recently started new Pizza shop and pizzas are selling well.

She now wants an onlinle shopping cart so that people can order Pizzas online for collection.

The cart should look something like the screen below.

<image width="400" src="https://user-images.githubusercontent.com/34037/132886095-0fed10b9-2d71-4e68-b0c1-296332a31068.png" >

## The cart

Customers should be able to select which pizza to buy by pressing a **Order** button.
 
Once the order button is pressed the cart should update accordingly.

The cart should show totals for small, medium & large pizzas and a total cost.

User should be able to click on a checkout button to create an Order.

## Orders

Once users clicked on the Order button a new order should be added to the Orders screen.

An order should have an Order Id, Status and an amount. The amount should come from the Pizza Cart.

An order looks like this:
 
```
 const order = {
   orderId : 32,
   status : "Payment due",
   amount : 213.97
 }
```
 
The `orders` list is a list of orders in the above format. This list is the datasource for your orders screen.
 
The Pizza Cart should be cleared out after an Order as been created.
 
Valid statuses for an Order are: 
 * `Payment due`, 
 * `Paid`, 
 * `Collected`.

The buttons work as follows: 
 
* For an order with a status of `Payment due` display a Pay button 
* and for `Paid` display a `Collect` button. 
* When the `Paid` button is clicked update order status to `Paid`.
* If the `Collect` button is clicked change the status to `Collected`. 
* Show no button for delivered. 
 
 > **Note:** The `find` & `filter` methods on JavaScript lists might be handy.

 The order screen should look like this:
<image width="300" src = "https://user-images.githubusercontent.com/34037/132942583-394c03e1-5b91-438f-ab34-c97684699b76.png" />

## Start here
 
Clone [this pre configured ExpressJS project](https://github.com/codex-academy/express-starter-app) from GitHub and add it to your own GitHub profile.

Do some planning - please share your KanbanFlow board with the mentors via email. 
 
Choose or create a color scheme for your project on [coolors](https://coolors.co/).

Make sure your pizza cart is responsive.
 
Create a Factory Function and test your code accordingly using Mocha.
 
Deploy your project to Heroku.
 
Email your GitHub & deployed URL to `mentors@projectcodex.co`

## Do this next

Once you can add pizzas to your Cart using the three buttons for small, medium & large look at this.
 
Allow users to add or remove pizza's from an existing order using a "+" or "-" button for each pizza size. The totals on the order screen should update accordingly. 
 
<image width="300" src = "https://user-images.githubusercontent.com/34037/132997564-df78aed3-246e-49e8-853d-61cfc7659b22.png" />
 
 
## Show users their own Cart

At this stage all users of you Pizza Widget will be seeing the same Pizza order as they are all sharing the same instance variable in your Pizza Cart. You can use Http Sessions to give each one of them their own cart.
    
 To use Http Sessions you will need to install [http-session](https://www.npmjs.com/package/express-session) npm module.
  
 Watch this little video to learn more about http-session usage with [ExpressJS](https://youtu.be/xaUe66XuJpU).

### Pizza Cart and the HTTP session.  

To make your Pizza Cart working with HTTP session store a username in your session and store cart information for each username in your Factory Function. Use the stored username to find the Cart for your user.
 
Watch this [video]() on how to do this.
 
``` 
 function getCart(req) {
      
     const username = req.params.username
     if (username) {
         // note a user might nor have a cart yet - handle that inside the Factory Function.
         return factoryFunctio.getCart(username);
     } else {
         // not logged in we can't do much
         // res.redirect('/login');
     }
 }
   
 ```
 
## Extra things to do
 
### Order overview screen
 
Add a Order overview screen with a check-out button. This button should show all the items in the order - totals and quantities for small, medium and large pizzas. As well as a grand total.
 
### Collection overview
 
Add a collection overview screen that only show all the orders that should be collected. Orders should have a collect button or be linked to an overview screen as above with a collect button.

## Store orders in a database
 
Add a database to store your orders. Start small. Discuss your approach with the mentors.