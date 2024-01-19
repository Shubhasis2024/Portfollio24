

let click=document.querySelector(".click");

let mode = document.querySelector("#mode");
let currmode = "light";
mode.addEventListener ("click", () => {
  if (currmode === "light") {
    currmode = "dark";
    document.querySelector("body").style.backgroundColor = "Black";
  } else {
    currmode = "light";
    document.querySelector("body").style.backgroundColor = "White";
  }
  console.log(currmode);
});
