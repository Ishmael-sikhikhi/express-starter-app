let express = require('express');
let PizzaCart = require('./pizza-cart')
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const pizzaCart = require('./pizza-cart');
const handlebarSetup = exphbs({
	partialsDir: "./views/partials",
	viewPath: './views',
	layoutsDir: './views/layouts'
});

let app = express();

let pizzaInst = pizzaCart();

app.engine('handlebars', handlebarSetup);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// add your routes here...
let smallprice = 0.00.toFixed(2)
let mediumprice = 0.00.toFixed(2)
let largeprice = 0.00.toFixed(2)
let total = 0.00.toFixed(2)
let update = ''

app.get('/', (req, res) => {
	total = 'R ' + pizzaInst.orderTotal()
		res.render('index', {
			smallprice,
			mediumprice,
			largeprice,
			total
		})
})


app.post('/buy-small', (req, res) => {
	let smallQty = pizzaInst.smallPizza();
	smallprice = 'R ' + pizzaInst.getSmallprice().toFixed(2)
	smallpizza: smallQty
	res.redirect('/')
})/

app.post('/buy-large', (req, res) => {
	let largeQty = pizzaInst.largePizza();
	largeprice = 'R ' + pizzaInst.getLargePrice().toFixed(2)
	largepizza: largeQty
	res.redirect('/')
})

app.post('/buy-medium', (req, res) => {
	let mediumQty = pizzaInst.mediumPizza();
	mediumprice = 'R ' + pizzaInst.getMediunPrice().toFixed(2)
	mediumpizza: mediumQty,
	res.redirect('/')
})


app.post('/small-', (req, res)=> {
	let smallQty = pizzaInst.subtractSmall()
	smallprice = 'R ' + pizzaInst.getSmallprice().toFixed(2)
	smallpizza: smallQty

	res.redirect('/')
})

app.post('/smallplus', (req, res) => {
	let smallQty = pizzaInst.addSmall();
	smallprice = 'R ' + pizzaInst.getSmallprice().toFixed(2)
	smallpizza: smallQty
	res.redirect('/')
}) 
// end minus & plus small pizza

var ID = ''
app.post('/medium-', (req, res)=> {
	let mediumQty = pizzaInst.subtractMedium()
	mediumprice = 'R ' + pizzaInst.getMediunPrice().toFixed(2)
	mediumpizza: mediumQty

	res.redirect('/')
})
app.post('/mediumplus', (req, res)=> {
	let mediumQty = pizzaInst.addMedium()
	mediumprice = 'R ' + pizzaInst.getMediunPrice().toFixed(2)
	mediumpizza: mediumQty 

	res.redirect('/')
}) 
// end minus & plus medium pizza

app.post('/large-', (req, res)=> {
	let largeQty = pizzaInst.subtractLarge()
	largeprice = 'R ' + pizzaInst.getLargePrice().toFixed(2)
	largepizza: largeQty

	res.redirect('/')
})
app.post('/largeplus', (req, res) => {
	let largeQty = pizzaInst.addLarge();
	largeprice = 'R ' + pizzaInst.getLargePrice().toFixed(2)
	largepizza: largeQty
	res.redirect('/')
})
//end minus & plus large pizza

app.post('/orders', (req, res)=>{
	var thestatus = ' payment due '
	
	console.log(pizzaInst.orders().status)
	ID = '#' + pizzaInst.orders().orderId
	res.render('orders',{
		status: thestatus,
		ID,
		amount: pizzaInst.orderTotal()
	})
})

app.post('/pay', (req, res)=>{
	var thestatus = 'paid'
	var theid = req.params.name;	
	res.render('orders',{
		ID,
		payment: thestatus,
		price: pizzaInst.orderTotal()
	})
})

app.post('/collect', (req, res)=>{
	var thestatus = ' collected'
	
	res.render('orders',{
		ID,
		collection: thestatus
	})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
	console.log('started at port: ', PORT);
});
