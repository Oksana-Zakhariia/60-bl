console.log(1)
//Використовуючи функцію if...else,
//напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
//інакше відобразити:"Не знаєте? ECMAScript!"
const userInput = prompt("Яка офіційна назва JavaScript?")
console.log(userInput);
if (userInput === "ECMAScript") {
    alert("Вірно!")
    
} else {
    alert("Не знаєте? ECMAScript!")
    
}