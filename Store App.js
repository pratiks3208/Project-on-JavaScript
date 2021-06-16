console.log("Hello, Welcome to the application");
console.log("Let's create an Account");
var username=prompt("Create your username");
var password=prompt("Create a password");
console.log("Thank you! Your Account has been created");
console.log();

console.log("Please enter you login details...");
var u=prompt("Enter your username");
var p=prompt("Enter your password");

while(u!=username && p!=password){
    console.log("Wrong Username or Password, Please Try Again!!!");
    u=prompt("Enter your username again");
    p=prompt("Enter your password again");
}

console.log("You have successfully been logged in");

var balance= 10;
console.log("Your balance is "+balance+"$");
var q1=prompt("Do you want to add more money? (Yes/No)");
var sum=0;

if(q1=="Yes"){
    sum=prompt("How much you want to add?");
    sum=parseInt(sum);
}
balance+=sum;
console.log("Your new balance is "+balance+" $");


var ans=prompt("Do you want to purchase burger? (Yes/No)");

if(ans=="Yes"){
    var bt=["Cheese","Chicken","Hamburger"];
    var price=[2,3,5];
    console.log("Choice 1: "+bt[0]+" and it costs "+price[0]);
    console.log("Choice 2: "+bt[1]+" and it costs "+price[1]);
    console.log("Choice 3: "+bt[2]+" and it costs "+price[2]);
    var choice=prompt("Enter your choice number");
    if(choice==1){
        console.log("You have ordered a Cheese Burger and it costs "+price[0]+"$")
        balance-=price[0];
    }
    else  if(choice==2){
        console.log("You have ordered a Chicken Burger and it costs "+price[1]+"$")
        balance-=price[1]
    }
    else  if(choice==3){
        console.log("You have ordered a Hamburger Burger and it costs "+price[2]+"$")
        balance-=price[2]
    }
    else{
        console.log("Invalid Choice")
    }
}
console.log("Your remaining balance is "+balance);