var userName = prompt("Enter Your Name");
var Gender = prompt("Enter Your Gender(M , F)");
if (Gender  =="M" )
{
userName = "Mr." + userName
}
else if (Gender =="F")
userName = "Ms." + userName
else{
prompt("Please Choose Your Gender Again")
var Gender = prompt("Enter Your Gender(M , F)");
if (Gender  =="M" )
{
userName = "Mr" + userName
}
else if (Gender =="F")
userName = "Ms" + userName
else
prompt("Please Choose Your Gender Again")

}
var Age = prompt("Enter Your Age");
if (Age <= 0 )
{
    alert("Age should be higehr than 0")
prompt(Age);
}
var skip = prompt(confirm("Do you want to skip"))
prompt("welcome " + userName);
prompt("Y or N Questions")
function questions(question1 , question2, question3) {
var question1 = prompt("Are you organised person")
if (question1  =="Y" )
question1 = "yes"
else if (question1 =="N")
question1 = "No"
else
 question1= "invalid";

var question2 = prompt("do you like programming")
if (question2  =="Y" )
{
question2 = "Yes"
}
else if (question2 =="N")
 question2 = "No"
else
  question2= "invalid"

var question3 = prompt("are you familiar with Djnago")
if (question3  =="Y" )
{
question3 = "Yes"
}
else if (question3 =="N")
question3 = "No"
else
 question3= "invalid"
}
questions();
for (var i=0 ; i<questions.length ; i++)
console.log(questions[i])




