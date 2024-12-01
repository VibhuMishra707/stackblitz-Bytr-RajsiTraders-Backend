const port = 3000;

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// ---------------------------------------------------------- //
//    Project on BD 1: Stock Portfolio for Rajsi Traders      //
// ---------------------------------------------------------- //

app.get('/', (req, res) => {
  res.send('Welcome to Stock portfolio analysis API!');
});

// Endpoint - 1 (Calculate the Returns of the Stocks added)

function calculateReturnsStockAdded(boughtAt, marketPrice, quantity) {
  let totalStockReturn = (marketPrice - boughtAt) * quantity;
  return totalStockReturn.toString();
}

app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseFloat(req.query.quantity);

  let result = calculateReturnsStockAdded(boughtAt, marketPrice, quantity);
  res.send(result);
});

// Path = /calculate-returns?boughtAt=300&marketPrice=400&quantity=2

// Endpoint - 2 (Calculate the Total Returns)

function calculateTotalReturns(stock1, stock2, stock3, stock4) {
  let totalReturns = stock1 + stock2 + stock3 + stock4;
  return totalReturns.toString();
}

app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let result = calculateTotalReturns(stock1, stock2, stock3, stock4);
  res.send(result);
});

// Path = /total-returns?stock1=100&stock2=200&stock3=200&stock4=400

// Endpoint - 3 (Calculate the Return Percentage)

function calculateReturnPercentage(boughtAt, returns) {
  let returnPercentage = (returns / boughtAt) * 100;
  return returnPercentage.toString();
}

app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);

  let result = calculateReturnPercentage(boughtAt, returns);
  res.send(result);
});

// Path = /calculate-return-percentage?boughtAt=400&returns=200

// Endpoint - 4 (Calculate the Total Return Percentage)

function calculateTotalReturnPercentage(stock1, stock2, stock3, stock4) {
  let totalReturnPercentage = stock1 + stock2 + stock3 + stock4;
  return totalReturnPercentage.toString();
}

app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let result = calculateTotalReturnPercentage(stock1, stock2, stock3, stock4);
  res.send(result);
});

// Path = /total-return-percentage?stock1=10&stock2=20&stock3=20&stock4=40

// Endpoint - 5 (Identify the Status of Stocks based on their Return Value)

function statusOfStock(returnPercentage) {
  if (returnPercentage > 0) {
    return 'Profit';
  } else {
    return 'Loss';
  }
}

app.get('/status', (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);
  let result = statusOfStock(returnPercentage);
  res.send(result);
});

// Path = /status?returnPercentage=90

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
