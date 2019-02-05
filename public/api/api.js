
function create() {
    // -------------------------------------
    //  YOUR CODE
    //  Create user account on server
    // ------------------------------------- 
    var createaccount  = document.getElementById('CreateAccount');
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var header = document.getElementById('bbheader');
    var msg1 = document.getElementById('messages');
    var url = 'http://kalamkamaraj.com:3000//accounts/create/' + username + '/' + email + '/' + password;

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
                console.log(createaccount.innerHTML);
                console.log(url);
               // createaccount.innerHTML = JSON.stringify(res.body);
               msg1.innerHTML = JSON.stringify(res.body);

            }
            else{
                console.log(url);
                console.log("Here look");
                console.log(res);
               // createaccount.innerHTML = JSON.stringify(res.body);
               
               msg1.setAttribute("class","card-subtitle  text-white bg-info text-center");
               
               acct = JSON.parse(JSON.stringify(res.body));
               console.log(acct.username);
               header.innerHTML = "Congratulations " + acct.username + "! Your account has been successfully created.";
               msg1.innerHTML = "Please login with your credentials";
               loggedin = false;
               resetnavigation('Logintab');
               loadLogin();

            
            }

        });
   
}

function login() {
    // -------------------------------------
    //  YOUR CODE
    //  Confirm credentials on server
    // -------------------------------------
    var loginAccount  = document.getElementById('LoginAccount');
    var custommsg = document.getElementById('messages');
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var header = document.getElementById('bbheader');
    var url = 'http://kalamkamaraj.com:3000/accounts/login/' + email + '/' + password;
    var msg1 = document.getElementById('messages');


    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
                console.log(loginAccount.innerHTML);
                console.log(url);
               // createaccount.innerHTML = JSON.stringify(res.body);
               custommsg.innerHTML = "Login unsuccessful";

            }
            else{
                console.log(url);
                console.log(res);
               custommsg.innerHTML = "You have logged in successfully" ;
               
                url = 'accounts/get/' + email;
                superagent
                    .get(url)
                    .end(function(err,res){
                    if(err){
                        loginAccount.innerHTML = JSON.stringify(res.body);
                    }
                    
                    else {
                             acct = JSON.parse(JSON.stringify(res.body));
                            var balance = acct.balance;
                            balanceacct = balance;
                            header.innerHTML = acct.username + "!  Welcome to Bad Bank!";
                            custommsg.setAttribute("class","card-subtitle  text-white bg-info text-center");
                            loggedin = true;

                        enablenavigation('Logintab');
                        
                        
                }}
                )
               

              
            }

        });
}

function deposit() {
    // -------------------------------------
    //  YOUR CODE
    //  Deposit funds user funds on server
    // -------------------------------------
    var depositAccount  = document.getElementById('Balance');
    var email = acct.email;
    var amt = document.getElementById('amount').value;
    var msg1 = document.getElementById('messages');
    var url = 'http://kalamkamaraj.com:3000/accounts/deposit/' + email + '/' + amt;
    console.log(amt);
    superagent
        .get(url)
        .end(function(err,res){
        if(err){
            depositAccount.innerHTML = JSON.stringify(res.body);
        }
        else {
            acct = JSON.parse(JSON.stringify(res.body));
            balanceacct = acct.balance;
            msg1.setAttribute("class","card-subtitle  text-white bg-info text-center");
            msg1.innerHTML = "Successful transaction. Your new balance is $ " + acct.balance;
        }
        })

}

function withdraw() {
    // -------------------------------------
    //  YOUR CODE
    //  Withdraw funds user funds on server
    // -------------------------------------
    var withdrawAccount  = document.getElementById('WBalance');
    var email = acct.email;
    var amt = document.getElementById('withamount').value;
    var msg1 = document.getElementById('messages');
    var url = 'http://kalamkamaraj.com:3000/accounts/withdraw/' + email + '/' + amt;
    console.log(amt);
    superagent
        .get(url)
        .end(function(err,res){
        if(err){
            msg1.setAttribute("class","card-subtitle  text-danger bg-warning text-center");
            msg1.innerHTML = JSON.stringify(res.body);
        }
        else {
            if(res.text == 'Low balance') {
                msg1.setAttribute("class","card-subtitle  text-danger bg-warning text-center");
                msg1.innerHTML = res.text + " Your current balance is $" + acct.balance;
                }
            else{
            acct = JSON.parse(JSON.stringify(res.body));
            balanceacct = acct.balance;
            transactionhistory= acct.transactions;
            msg1.setAttribute("class","card-subtitle  text-white bg-info text-center");
            msg1.innerHTML = "Successful transaction. Your new balance is $ " + acct.balance;}

        }
        })

}

function transactions() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all user transactions
    // -------------------------------------
    var email = acct.email;
    var url = 'http://kalamkamaraj.com:3000/accounts/transactions/' + email;
    var msg1 = document.getElementById('messages');
    var thistory = document.getElementById('Transhistory');

    superagent
        .get(url)
        .end(function(err,res){
            if(err){
                msg1.setAttribute("class","card-subtitle  text-danger bg-warning text-center");
                msg1.innerHTML = JSON.stringify(res.body);
            }
            else {
                acct = JSON.parse(JSON.stringify(res.body));
                console.log(acct);
                transactionhistory = acct.transactions;
                var i ;
                var temp ="";
                console.log(transactionhistory.length);
                console.log(temp);
                temp += '<div class="row"><div class="col-3 bg-primary text-white text-center">Transaction Type</div>';
                temp += '<div class="col-5 bg-primary text-white text-center">Date of Transaction</div><div class="col-2 bg-primary text-white text-center">Amount</div>';
                temp +=' <div class="col-2 bg-primary text-white text-center">Balance</div><div class="w-75"></div></div>';
                for(i=0; i< transactionhistory.length; i++ ){
                    var thist = JSON.parse(JSON.stringify(transactionhistory[i]));
                    console.log(thist);
                   
                    temp +=  '<div class="row">' ;
                    temp += '<div class="col-3 text-center">' + thist.Transtype + '</div>';
                    temp += '<div class="col-5 text-center">' + thist.Date + '</div>';
                    temp += '<div class="col-2 text-justify">$ ' + Number(thist.amount).toLocaleString("USD") + '</div>';
                    temp += '<div class="col-2" text-justify">$  ' + Number(thist.Balance).toLocaleString("USD") + '</div>';
                    temp += '<div class="w-75"></div>';
                    temp += '</div>';
                }
                


                    console.log(temp);
                thistory.innerHTML = temp;
                msg1.setAttribute("class","card-subtitle  text-white bg-info text-center");
            }
        });
}

function balance() {
    // -------------------------------------
    //  YOUR CODE
    //  Get user balance
    // -------------------------------------
}

function allData() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all data
    // -------------------------------------
      var url = 'http://kalamkamaraj.com:3000/accounts/all/';
    var msg1 = document.getElementById('messages');
    var alldatablock = document.getElementById('alldatacard');
    superagent
        .get(url)
        .end(function(err,res){
            if(err){
                msg1.setAttribute("class","card-subtitle  text-danger bg-warning text-center");
                msg1.innerHTML = JSON.stringify(res.body);
            }
            else {
                var acctall = JSON.parse(JSON.stringify(res.body));
                
                msg1.setAttribute("class","card-subtitle  text-white bg-info text-center");
                var temp ='<table class="table table-striped">';
                temp += '<tr><td class="bg-primary text-white text-center">User Name</td>';
                temp += '<td class="bg-primary text-white text-center">Email</td><td class="bg-primary text-white text-center">Password</td>';
                temp +=' <td class="bg-primary text-white text-center">Balance</td>';
                temp +=' <td class="bg-primary text-white text-center">Transactions</td></tr>';
                var i;
                console.log(acctall.length);
                for (i=0; i< acctall.length;i++){
                    temp +=  '<tr>' ;
                    temp += '<td class="text-center">' + acctall[i].username + '</td>';
                    temp += '<td class="text-center">' + acctall[i].email + '</td>';
                    temp += '<td class="text-justify">' + acctall[i].password + '</td>';
                    temp += '<td class="text-justify">$  ' + acctall[i].balance + '</td>';
                    temp += '<td><table>';
                    ;
                    var transactionhistory = acctall[i].transactions;
                    console.log(transactionhistory.length);
                    var k;
                    for(k=0;k < transactionhistory.length;k++){
                    var thist = JSON.parse(JSON.stringify(transactionhistory[i]));
                   
                        temp +=  '<tr>' ;
                        temp += '<td class="text-center">' + thist.Transtype + '</td>';
                        temp += '<td class="text-center">' + thist.Date + '</td>';
                        temp += '<td class="text-justify">$ ' + Number(thist.amount).toLocaleString("USD") + '</td>';
                        temp += '<td class="text-justify">$  ' + Number(thist.Balance).toLocaleString("USD") + '</td>';
                    
                        temp += '</tr>';
                    }
                temp += '</table>';temp += '</tr>';
                }
                temp += "</table>";
                alldatablock.innerHTML = temp;
            }
});}

