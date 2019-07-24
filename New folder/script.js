let name = document.querySelector('input');
let message = document.querySelector('p');

let itelligenceLevel = [
    `smart`,
    `very smart`,
    `dumb`,
    'very dumb'

];

document.querySelector('button').addEventListener('click', () => {
    if(name.value) {
  let randomNum = parseInt(Math.random() * itelligenceLevel.length);
        message.textContent = `Dear ${name.value} You are ${itelligenceLevel[randomNum]}`
        name.value = '';

    }else {
        alert('Enter Name')
    }
})


/*
data -Information

-number (age,studentcount.height,weight,matric marks/ percentage.dozen of fruits,postal code )

-- boolaen (haan ku khty hain true java main or na ku khty hain false) - (isClassTomorrow,is hungry,isexam,is goodstudent)

sentence ya word hu wo String (word ya sentence) (name,fav dish,collegeName,researchTopicPUBGIGame,gender,residence,workplace,
    )

eg hum kaha p hain ( hum uit main hain )

apki favorite dish kai hai (biryani)


string is liye khty hain k ye juraywe huty hain saray k saray

//glass khareed na --declare
//usay use karna  --assign

varaible

varaible -- aik container jisky ander hum change karsakty hain 

var = let

var globaly apply karta hai 

declare karna khareed 
assign use karna
varaible data dalny use uta hai..

*/
number data type
let glass="pepsi"; //initialization
glass="water";

glass= "coffee";

glass= "juice";

let  age = 18;  //means khareedna

age= 19;

age=20;

let numberOfStudents;

numberOfStudents =50;

let height = 5.1;

let weight =70;


let marks = 100;

let matricPercentage =67;

let dozenOfFruits =2;


/* variable naming rules

                  number is allwowed asakaty hain number
                  laikin number se start ni husakta
                  beach main asakta hai shuru main ni
                  spaces arenot allowed
                  special characters are not allowed !@#%^*&*()
                  2 special characters are allwowed (dollar and underscore)
                  camel case huna chaye 
                  how to write words together

// snake case = cost_of_apple
//kabab case = sarah-ahmed
//camel case = sarahAhmed
how to write words toghter
Lower camel case = sarahAhmed
upper camel case (title case): sarahAhmned
isClasstommorrow
varaibles should be written in camel case






human namiing rules 
                      sirf alpabats
                      spaces asakty hain 
                      dot asakty hain
*/



let isClassTomorrow = true;
let iShUNGRY =TRUE;
let isGoodStudent =


//@

let name = "Nazia khan";

varaible codes
DOUBLE Code 
single code

let = Description = 
let double code main enter ni karty  (sin gle code too )
console.log



