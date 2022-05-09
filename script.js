let keyboard = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
  "Tab",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "[",
  "]",
  "\\",
  "Delete",
  "CapsLock",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  ";",
  "/",
  "Enter",
  "Shift",
  "\\",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  ",",
  ".",
  "/",
  "ArrowUp",
  "Shift",
  "Control",
  "Meta",
  "Alt",
  " ",
  "Alt",
  "Control",
  "ArrowLeft",
  "ArrowDown",
  "ArrowRight",
];
let noletterkey = [
  "Backspace",
  "Tab",
  "Delete",
  "CapsLock",
  "Enter",
  "ArrowUp",
  "Shift",
  "Control",
  "Meta",
  "Alt",
  "ArrowLeft",
  "ArrowDown",
  "ArrowRight",
];

function init() {
  document.body.innerHTML =
    '<div class="wrapper"><textarea autofocus id="textarea" class="textarea" rows="5"></textarea><div id="keyboard"></div></div>';
  let out = "";
  for (i = 0; i < keyboard.length; i++) {
    if (
      keyboard[i] === "ArrowLeft" ||
      keyboard[i] === "ArrowRight" ||
      keyboard[i] === "ArrowUp" ||
      keyboard[i] === "ArrowDown"
    ) {
      out += `<div class="key key-${keyboard[i]}" data-key="${keyboard[i]}"><img src="images/arrow.png" class="arrow" alt="${keyboard[i]}"></div>`;
    } else if (keyboard[i] === " ") {
      out += `<div class="key key-Space" data-key=" "></div>`;
    } else if (keyboard[i] === "Meta") {
      out += `<div class="key key-Meta" data-key="Meta">Win</div>`;
    } else if (keyboard[i] === "Control") {
      out += `<div class="key key-Control" data-key="Control">Ctrl</div>`;
    } else if (keyboard[i] === "Delete") {
      out += `<div class="key key-Delete" data-key="Delete">Del</div>`;
    } else {
      out += `<div class="key key-${keyboard[i]}" data-key="${keyboard[i]}">${keyboard[i]}</div>`;
    }
  }
  document.querySelector("#keyboard").innerHTML = out;
}
init();

document.onkeydown = function (event) {
  if (event.key === " ") {
    document.querySelector(".key-Space").classList.add("active");
  } else {
    let keycode = event.key.length > 1 ? event.key : event.key.toLowerCase();
    document.querySelector(`.key-${keycode}`).classList.add("active");
  }
};
document.querySelector("#keyboard").onclick = function (event) {
  let tarea=document.getElementById("textarea")
  let currentkey = event.target;
  if (!currentkey.classList.contains("key")) {
    return;
  }
  let dataKeyValue = currentkey.getAttribute("data-key");
  if (noletterkey.includes(dataKeyValue)) {
    return;
  }
tarea.value+=dataKeyValue;
};
document.onkeyup = function (event) {
  document.querySelectorAll("#keyboard .key").forEach(function (element) {
    element.classList.remove("active");
  });
};
