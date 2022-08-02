'use strict';


let age,userName,gender, userAnswers= new Array(3);

getUserName();
getUserGender();
getUserAge();
confirmWelcome();
questions();
pringToConsole();




//Functions
function getUserName() {
    userName = prompt(` Enter Your Name : `);
}

function getUserGender() {
    gender = prompt(` Enter Your Gender M/F : `);
}

function getUserAge() {    
    age = prompt(` Enter Your Age : `);
    if (age<=0)
        warninng(age);
 
}

function warninng(age) {
    alert(`Sorry Your Age  : ${age} Is Too Small`);
}

function confirmWelcome(age) {
    let confirmUser = confirm(`Would you like to skip ?  `);
    if (!confirmUser) 
         welcomeMessage();
    

}
function welcomeMessage() {

    switch (gender) {
        case "M":
            alert(`Welcome Mr. ${userName}`);
            break;
        case "F":
                alert(`Welcome Ms. ${userName}`);
                break;
        default:
            alert(`Welcome. ${userName}`);
            break;
    }

}

function questions() {

    let question=[
        `Do You Like Reading (Yes/No) : ` ,
        `Do You Like Music (Yes/No) :` ,
        `Do You Like Gaming (Yes/No) : `] ;

    let value ;
    for (let index = 0; index < question.length; index++) {
        value=prompt(question[index]);
        let flag =false;

        while (!flag) {
        value.length==0 ? value=prompt(`this is invalid Answer,try again `+question[index]): flag = true;
        }
        userAnswers[index] = value;
    
    
    }
}

function pringToConsole() {
    for (let index = 0; index < userAnswers.length; index++) {
        console.log(userAnswers[index]);
        
    }
        
        
}