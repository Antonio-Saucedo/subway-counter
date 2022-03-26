//Set initial counter value in page and initialize count variable
document.getElementById("count-el").value = 0;
let count = document.getElementById("count-el").value;

//Function will increment count and set counter value in page equal to count
function add() {
  count += 1;
  document.getElementById("count-el").innerText = count;
}

//Function will save and reset the counter value
let finalCount = document.getElementById("previous").innerText;
let saved = false;

function save() {
  if (!saved) {
    finalCount += " " + count;
    saved = true;
  } else {
    finalCount += " - " + count;
  }
  count = 0;
  document.getElementById("count-el").innerText = count;
  document.getElementById("previous").innerText = finalCount;
}

//Function will reload page
function reset() {
  location.reload();
}
