var ui = {};


ui.navigation =`
<nav class="navbar w-75 navbar-expand-lg navbar-light bg-dark">
  <a class="navbar-brand text-white" href="#" onclick=defaultModule()>Bad Bank </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">

<ul class="nav nav-pills" id="BadBank" role="tablist">
  <li class="nav-item">
    <a class="nav-link" id="Hometab" data-toggle="tab" href="#DefaultAccount" role="tab"  onclick=defaultModule()>Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="Createtab" data-toggle="tab" href="#CreateAccount" role="tab"  onclick=loadCreateAccount()>Create Account</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="Logintab" data-toggle="tab" href="#LoginAccount" role="tab"  onclick=loadLogin()>Login</a>
  </li>
    </li>
     <li class="nav-item">
    <a class="nav-link disabled" id="AllData" data-toggle="tab" href="#alldatAccount" role="tab"  onclick=loadAllData()>All Data</a>
  </li>
   <li class="nav-item">
      <a class="nav-link disabled" id="Deposittab" data-toggle="pill" href="#DepositAccount" role="tab" aria-controls="DepositAccount" aria-selected="false" onclick=loadDeposit()>Deposit</a>
      </li>
      <li class="nav-item">
      <a class="nav-link disabled" id="Withdrawtab" data-toggle="pill" href="#WithdrawAccount" role="tab" aria-controls="WithdrawAccount" aria-selected="false" onclick =loadWithdraw()>Withdraw</a>
       </li>
      <li class="nav-item">
      <a class="nav-link disabled" id="Transactiontab" data-toggle="pill" href="#transactionAccount" role="tab" aria-controls="transactionAccount" aria-selected="false" onclick=loadTransactions()>Transactions</a>
       </li>
      <li class="nav-item">
      <a class="nav-link disabled" id="Balancetab" data-toggle="pill" href="#BAccount" role="tab" aria-controls="BAccount" aria-selected="false" onclick=loadBalance()>Balance</a>
        </li>

</ul></div>


`
ui.headermessage = `
        
        <div id = "headerbar" class="card w-75 text-white text-bold bg-primary mb-3" >
        <div id="bbheader" class="card-title   text-white  bg-primary text-center" >Welcome to Bad Bank! </div>

        <h6 id="messages" class="card-subtitle  text-white bg-info text-center"></h6>
        </div>
`
ui.createAccount = `
        <div id="CreateAccount"  class="card w-50 text-white  bg-primary mb-3" >
        <div class="row">
                         <div class="col-4"><label for="username">User Name </label> </div>
                         <div class="col-8"><input type="input" class ="form-control" id="username" placeholder="Name" ></div>
                         <div class="w-100"></div>
        </div>
        <div class="row">
                        <div class="col-4"><label for="email">Email address </label>  </div>
                        <div class="col-8"><input type="input" class ="form-control" id="email" placeholder="Email"></div>
                        <div class="w-100"></div>
        </div>
        <div class="row">
                        <div class="col-4"><label for="password">Password </label> </div>
                        <div class="col-8"><input type="input" class ="form-control" id="password" placeholder="Password"> </div>
                        <div class="w-50"></div>
        </div>
        <button type="button" class="btn btn-info btn-primary btn-lg" onclick="create()">Create Account</button>
        
        </div>
    
`;

ui.login = `
  
    <div id="LoginAccount" class="card w-50 text-white  bg-primary mb-3">

    <div class="row">
        <div class="col-4"><label for="email">Email address </label></div>
         <div class="col-8 "> <input type="input" class ="form-control" id="email" placeholder="Email"></div>
    </div>
    <div class="row">
         <div class="col-4"> <label for="password">Password </label> </div>
         <div class="col-8 w-25"><input type="input" class ="form-control" id="password" placeholder="Password"> </div>
     </div>
        <button type="button" class="btn btn-info btn-primary btn-lg" onclick="login()">Login</button>

        
        </div>
`;

ui.deposit = `

    <div id="DepositAccount" class="card w-25 text-white  bg-primary mb-3" style="max-width:50rem;">


        <div class="row">
        <div class="col-3"><label for="Enter Amount">Amount </label> </div>
        <div class="col"><input type="input" class ="form-control" id="amount" placeholder="0.0"> </div>
        </div>
        <button type="button" class="btn btn-info btn-primary btn-lg" onclick="deposit()">Deposit</button>

        </div> 
        
`;

ui.withdraw = `
    <div id="WithdrawAccount" class="card w-25 text-white  bg-primary mb-3" style="max-width:50rem;">

    <div class="row">

        <div class="col-4"><label for="Enter Amount">Amount </label> </div>
        <div class="col-8"><input type="input" class ="form-control" id="withamount" placeholder="0.0"> </div>
        </div>
        <button type="button" class="btn btn-info btn-primary btn-lg" onclick="withdraw()">Withdraw</button>

        
        </div>
`;

ui.transactions = `


    <div id = "Transhistory" class="card w-50 bg-light mb-3", style="max-width:50rem;">
    </div>
`;

ui.balance = `
        <div id="BalanceAccount" class="card w-75 text-dark text-center  bg-light mb-3" style="max-width:50rem;">
            
            <h6 id="WBalance" class="text-center"></h6>

        
        </div>
`;

ui.default = `
  <div class="card w-25 text-white  bg-light mb-3">
  <img src="/bank.png" class="card-img-top w-25" alt="...">
  <div class="card-body">
    
    <h5 class="card-title">Bad Bank</h5>
  </div>
`;

ui.allData = `
    
        <div id="alldatacard" class="card w-75 text-blue bg-light mb-3" >

   
        </div>
`;

var target     = document.getElementById('target');
var hdrbar = document.getElementById('headermessage');
var headermsg = document.getElementById('bbheader');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;
var leftnav = document.getElementById('leftnav');
//leftnav.innerHTML = ui.leftnav;
hdrbar.innerHTML = ui.headermessage;
console.log(hdrbar);
//console.log(headermsg.innerHTML);

var subhdr = document.getElementById('messages');
console.log(subhdr);
var acct;
var balanceacct;
var transactionhistory;
var loggedin = false;

var loadCreateAccount = function(){
    resetnavigation('Createtab');
    console.log(headermsg);
    subhdr.innerHTML = 'Please create an account';
    target.innerHTML = ui.createAccount;
};

var resetnavigation = function(menuname){
    var navmenus = document.getElementsByClassName('nav-link');
    var logintab = document.getElementById('Logintab');
    var createtab = document.getElementById('Createtab');
    var hometab = document.getElementById('Hometab');
    var i;
    for (i=0; i< navmenus.length;i++){

       if(loggedin == false)
        {
            navmenus[i].setAttribute('class','nav-link disabled');
            console.log(navmenus[i].innerHTML);
        }
        else 
            {

                navmenus[i].setAttribute('class','nav-link');
            }
    }
    
    logintab.setAttribute('class', 'nav-link');
    createtab.setAttribute('class', 'nav-link');
    hometab.setAttribute('class', 'nav-link');
    var elm = document.getElementById(menuname);
    elm.setAttribute('class','nav-link active');
}

var enablenavigation =function(curselect){
    var navmenus = document.getElementsByClassName('nav-link');
    var i;
    for (i=0; i< navmenus.length;i++){
        
        navmenus[i].setAttribute('class','nav-link');
    }
    var elm = document.getElementById(curselect);
    elm.setAttribute('class','nav-link active');

}

var loadLogin = function(){
    loggedin = false;
    resetnavigation('Logintab');
    var headermsg = document.getElementById('bbheader');
    headermsg.innerHTML = "Welcome to Bad Bank!";
    subhdr.innerHTML = "Please enter your credentials";
    target.innerHTML = ui.login;

};

var loadDeposit = function(){
    var elm = document.getElementById('Deposittab');
    if(loggedin == false){}
        else {resetnavigation('Deposittab');
    subhdr.setAttribute("class","card-subtitle  text-white bg-info text-center");
    subhdr.innerHTML = "Please enter the amount to deposit";
    target.innerHTML = ui.deposit;
    

}
};

var loadWithdraw = function(){
    var elm = document.getElementById('Withdrawtab');
    if(loggedin == false){}
    else {    resetnavigation('Withdrawtab');
subhdr.innerHTML = "Please enter the amount to withdraw";
    target.innerHTML = ui.withdraw;

}
};

var loadTransactions = function(){
    var elm = document.getElementById('Transactiontab');
    if(loggedin == false){}
    else {
        resetnavigation('Transactiontab');
        target.innerHTML = ui.transactions;
        subhdr.setAttribute("class","card-subtitle  text-white bg-info text-center");
        subhdr.innerHTML = "Your transaction history";
    transactions();}
};

var loadBalance = function(){
    var elm = document.getElementById('Balancetab');
    if(loggedin == false){}
   else{
    resetnavigation('Balancetab');
    target.innerHTML = ui.balance;
    var bal = document.getElementById('WBalance');
    subhdr.setAttribute("class","card-subtitle  text-white bg-info text-center")
    subhdr.innerHTML = "Your Current Balance is"
    bal.innerHTML= "$ " + Number(balanceacct).toLocaleString("USD");}
};

var defaultModule = function(){
    var headermsg = document.getElementById('bbheader');
    resetnavigation('Hometab');
    loggedin = false;
    target.innerHTML = ui.default;
    subhdr.setAttribute("class","card-subtitle  text-white bg-info text-center");
    subhdr.innerHTML = "";
    //subhdr.innerHTML ="";
    headermsg.innerHTML = "Welcometo Bad Bank";
};

var loadAllData = function(){
    if (loggedin == false){}
        else {
    
    {
        resetnavigation('AllData');
    target.innerHTML = ui.allData;
    allData();}}
};

defaultModule();
