alert("Ahoj, vítejte na našem webu!");
let name = prompt("Jak se jmenujete?");
alert("Ahoj " + name + "!");
let story = prompt("Který příběh si přejete vybrat? (1, 2 nebo 3)");
while (story != "1" && story != "2" && story != "3") {
  alert("Můžete napsat pouze 1, 2 nebo 3.");
  story = prompt("Který příběh si přejete vybrat? (1, 2 nebo 3)");
}
let isRight;
if (story == "1") {
  isRight = confirm("Vybrali jste si příběh číslo 1, je to správně?");
  if (!isRight) {
    story = prompt("Který příběh si přejete vybrat? (1, 2 nebo 3)");
    while (story != "1" && story != "2" && story != "3") {
      alert("Můžete napsat pouze 1, 2 nebo 3.");
      story = prompt("Který příběh si přejete vybrat? (1, 2 nebo 3)");
    }
    isRight = confirm("Vybrali jste si příběh číslo 1, je to správně?");
  }
} else if (story == "2") {
  isRight = confirm("Vybrali jste si příběh číslo 2, je to správně?");
  if (!isRight) {
    story = prompt("Který příběh si přejete vybrat? (1, 2 nebo 3)");
    while (story != "1" && story != "2" && story != "3") {
      alert("Můžete napsat pouze 1, 2 nebo 3.");
      story = prompt("Který příběh si přejete vybrat? (1, 2 nebo 3)");
    }
    isRight = confirm("Vybrali jste si příběh číslo 2, je to správně?");
  }
} else {
  isRight = confirm("Vybrali jste si příběh číslo 3, je to správně?");
  if (!isRight) {
    story = prompt("Který příběh si přejete vybrat? (1, 2 nebo 3)");
    while (story != "1" && story != "2" && story != "3") {
      alert("Můžete napsat pouze 1, 2 nebo 3.");
      story = prompt("Který příběh si přejete vybrat? (1, 2 nebo 3)");
    }
    isRight = confirm("Vybrali jste si příběh číslo 3, je to správně?");
  }
}
let catNames = ["Mourek", "Micka", "Mourek", "Micka", "Tiger", "Simba", "Luna", "Oreo", "Shadow", "Charlie", "Batman", "Kočkoholka"];
let catName = catNames[Math.floor(Math.random() * catNames.length)];
alert("Vaše jméno postavy je " + catName);
let date = new Date().toLocaleDateString();
alert("Děkujeme, že jste vyplnili nastavení, je " + date + ", vítejte v naší hře!");
