//==================================clock===============================================
function displayTime() {
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();
  var sec = dateTime.getSeconds();
  var session = document.getElementById("session");

  if (hrs >= 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }

  if (hrs > 12) {
    hrs = hrs - 12;
  }

  document.getElementById("hours").innerHTML = hrs;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("seconds").innerHTML = sec;
}
setInterval(displayTime, 10);

//CALCLATOR
//==========================================Calculator part start=========================
//Cancel part
function Clear() {
  document.getElementById("outputScreen").value = "";
}
//Delete part
function del() {
  var x = document.getElementById("outputScreen").value;
  var y = x.slice(0, -1);
  document.getElementById("outputScreen").value = y;
}

//calculator part
function display(newValue) {
  document.getElementById("outputScreen").value += newValue;
  console.log("newValue");
}

//Anser part
function Calculator() {
  var a = document.getElementById("outputScreen").value;
  var b = eval(a);
  document.getElementById("outputScreen").value = b;
}
//==========================================Calculator part end===========================

//====================================================to do list==================================

const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addToDo(this.value);
    this.value = "";
  }
});

const addToDo = (item) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `${item} 
    <i class="fa-solid fa-xmark"></i>`;

  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });
  listItem.querySelector("i").addEventListener("click", function () {
    listItem.remove();
  });

  toDoBox.appendChild(listItem);
};
