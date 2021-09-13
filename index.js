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


app.get('/', (req, res)=>{
	res.render('index')
})

app.post('/buy-large', (req, res)=>{
	// let price = 87.99
	
	// pizza: pizzaInst.buy({
	// 	pizzaPrice: price
	// })
	
})
 
const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
	console.log('started at port: ', PORT);
});