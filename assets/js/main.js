"use strict";

const htmlAusgabe = document.querySelector("h1");
const inputKorrektur = document.querySelector(".input-korrektur");

const date1 = new Date("9/19/2022");
// let date2 = new Date("01/01/2023");
const date2 = new Date();
console.log("date2=", date2, typeof date2);
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
let diffWeeks = Number(
	Math.ceil(diffTime / (1000 * 60 * 60 * 24) / 7).toFixed(0)
);
const currentDayOfWeek = ((diffTime / (1000 * 60 * 60 * 24)) % 7).toFixed(0);
console.log(diffTime + " milliseconds");
console.log(diffDays + " days", typeof diffDays);
console.log(diffWeeks + " weeks", typeof diffWeeks);
console.log(currentDayOfWeek + " current day of week " + diffWeeks);

let kursTag;
let feiertage = 2;

const dateWeihnachten = new Date("12/25/2022");
const dateNeuJahr = new Date("01/01/2023");
if (date2 >= dateWeihnachten) {
	feiertage++;
	console.log("weihnachten", feiertage);
}
if (date2 >= dateNeuJahr) {
	feiertage++;
	console.log("NeuJahr", feiertage);
}
console.log("feiertage gesammt", feiertage);
if (currentDayOfWeek >= 1 && currentDayOfWeek <= 5) {
	kursTag = diffDays - (diffWeeks - 1) * 2 - feiertage;
	htmlAusgabe.innerHTML = `Hallo, SuperCoder!<br> Heute ist der <span>${kursTag}.</span> Bootcamp-Tag. </br> Viel Spass beim Coden! :)`;
} else {
	kursTag = diffDays - diffWeeks * 2 - feiertage;
	htmlAusgabe.innerHTML = `Hallo, SuperCoder!<br> Heute wäre der <span> ${kursTag}.</span> Bootcamp-Tag. Aber zum Glück ist zZt. Wochenende.</br> Trotzdem viel Spass beim Coden an die gaaanz fleißigen, <br>(aka Streber :p) unter uns! :)`;
}

console.log(kursTag, "Kurstag");
