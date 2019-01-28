// setup server

// YOUR CODE


var express = require('express');
var app = express();

// setup directory used to serve static files

// YOUR CODE



// setup data store

// YOUR CODE
var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');

// required data store structure

// YOUR CODE
var adapter = new fs('db.json');
var db      = low(adapter);
// configure express to serve static files from public directory
// ------------------------------------------------------------------
app.use(express.static('public'));

// allow Cross-Origin Resource Sharing (CORS)
var cors = require('cors');
app.use(cors());

// init the data store
db.defaults({ accounts: [    {
      "username": "ST3",
      "email": "st3@test.edu",
      "balance": "0",
      "password": "sttee",
      "transactions": []
    }]}).write();

// ----------------------------------------------------
// add post - test using:
 //     curl http://localhost:3000/accounts/ping/1/false
// ----------------------------------------------------

app.get('/accounts', function(req, res){     

    res.send(db.get('accounts').value());

});



app.get('/accounts/create/:username/:email/:password', function (req, res) {

    
// YOUR CODE
    
// Create account route
    
// return success or failure string
    var account = {
        "username" : req.params.username,
        "email"    : req.params.email,
         "balance"   : "0",
        "password" : req.params.password,
        "transactions": []
    };
    console.log(req.params.username);
    db.get('accounts').push(account).write();
    console.log(db.get('accounts').value());   
    res.send(db.get('accounts').find({email: req.params.email}));

});


app.get('/accounts/login/:email/:password', function (req, res) {

    
// YOUR CODE
    
// Login user - confirm credentials
     var credentials = {
            "email"     : req.params.email,
            "password"  : req.params.password
     };
         var account = {
        "username" : "",
        "email"    : "",
         "balance"   : "0",
        "password" : "",
        "transactions": []
    };
    account = (db.get('accounts').find({email: req.params.email}).value());
    console.log(account.username);
    console.log(account.email);
    var usernm = account.username;
    res.send(account);
    
// If success, return account object    
    
// If fail, return null
});
app.get('/',function(req,res){
      res.send('success');
});

app.get('/accounts/get/:email', function (req, res) {

    
// YOUR CODE
    
// Return account based on email
   var email = req.params.email;
    var account = {
        "username" : "",
        "email"    : "",
         "balance"   : 0.00,
        "password" : "",
        "transactions": []
    };
    account = (db.get('accounts').find({email: req.params.email}).value());

    res.send(account);

});


app.get('/accounts/deposit/:email/:amount', function (req, res) {

    
// YOUR CODE
   
 // Deposit amount for email
    
// return success or failure string

 var email = req.params.email;
 var amt = req.params.amount;
 var today = new Date();
     var mm = today.getMonth() + 1;
    var dd = today.getDate();
    var yyyy = today.getFullYear();
    var hour = today.getHours();
    var min  = today.getMinutes();
    var datetoday = mm + '/' + dd + '/' + yyyy + '  ' + hour + ':' + min;
     var account = {
        "username" : "",
        "email"    : "",
         "balance"   : 0.00,
        "password" : "",
        "transactions": []
    };
    var trans =  {"Date" : datetoday , 
                    "amount" :Number(amt) ,
                    "Transtype" :"Deposit",
                    "Balance" : 0.0};
    account = db.get('accounts').find({email: req.params.email}).value();
    var tt =  account.transactions;
    
   ;
    account.balance = Number(account.balance) +  Number(amt);
    trans.Balance = account.balance;
    console.log(trans);
     tt.push(trans);
    db.get('accounts').find({email: req.params.email}).write({balance:account.balance});
    account = db.get('accounts').find({email: req.params.email}).value();
  
    db.get('accounts').find({email: req.params.email}).write({transactions:tt});
    res.send(db.get('accounts').find({email: req.params.email}));
    
});


app.get('/accounts/withdraw/:email/:amount', function (req, res) {

    
// YOUR CODE
   
 // Withdraw amount for email
    
// return success or failure string
 var email = req.params.email;
 var amt = req.params.amount;
 var today = new Date();
 var mm = today.getMonth() + 1;
    var dd = today.getDate();
    var yyyy = today.getFullYear();
    var hour = today.getHours();
    var min  = today.getMinutes();
    var datetoday = mm + '/' + dd + '/' + yyyy + '  ' + hour + ':' + min;
     var account = {
        "username" : "",
        "email"    : "",
         "balance"   : 0.00,
        "password" : "",
        "transactions": []
    };
     var trans =  {"Date" : datetoday , 
                    "amount" :Number(amt) ,
                    "Transtype" :"Withdraw",
                    "Balance" : 0.0
                };
    account = db.get('accounts').find({email: req.params.email}).value();
    var tt =  account.transactions;
    if (Number(account.balance) < Number(amt)) {res.send("Low balance");}
    else {account.balance = Number(account.balance) -  Number(amt);
        trans.Balance = Number(account.balance);
        console.log(trans);
        tt.push(trans);
    db.get('accounts').find({email: req.params.email}).write({balance:account.balance});
    db.get('accounts').find({email: req.params.email}).write({transactions:tt});
    res.send(db.get('accounts').find({email: req.params.email}));
    }
});


app.get('/accounts/transactions/:email', function (req, res) {

    
// YOUR CODE
    
// Return all transactions for account
         var account = {
        "username" : "",
        "email"    : "",
         "balance"   : 0.00,
        "password" : "",
        "transactions": []
    };
    account = db.get('accounts').find({email: req.params.email}).value();
    res.send(account);
});


app.get('/accounts/all', function (req, res) {

   
 // YOUR CODE
    
// Return data for all accounts

    res.send(db.get('accounts'));
});
app.listen(3000, function(){
   console.log('Running on port: 3000');
});

