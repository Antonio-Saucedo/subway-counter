//Set initial counter value in page
document.getElementById("count-el").value = 0;

//Set count value equal to counter value in page
let count = document.getElementById("count-el").value;

//Function will increment count and set counter value in page equal to count
function add() {
  count += 1;
  document.getElementById("count-el").innerText = count;
}

//Function will save and reset the counter value
let finalCount = "Previous entries: ";

function save() {
  finalCount += String(count) + " - ";
  document.getElementById("previous").innerText = finalCount;
  count = 0;
  document.getElementById("count-el").innerText = count;
}
