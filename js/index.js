const display = document.querySelector(".display");

document.querySelectorAll(".num").forEach(val => val.addEventListener("click", function(e){
  if(display.innerText.length == 15){
    display.innerText = "Max limit reached";
  }
  else if(display.innerText === "Max limit reached"){
    display.innerText = val.innerText;
  }
  else{
    if(!((display.innerText === "" || display.innerText.slice(-1) === '+' || display.innerText.slice(-1) === '*' || display.innerText.slice(-1) === '-' || display.innerText.slice(-1) === '/')&& (val.innerText === '+' || val.innerText === '*' || val.innerText === '/')))
      display.innerText += val.innerText;
  }
}));

document.querySelector("#equal").addEventListener("click", function(){
  if(display.innerText !== "Max limit reached"){
    display.innerText = eval(display.innerText).toFixed(6);
  }
});

document.querySelector("#clear").addEventListener("click", function(){
  display.innerText = 0;
});

document.querySelector("#delete").addEventListener("click", function(){
  if(display.innerText !== "Max limit reached"){
    display.innerText = display.innerText.slice(0,-1);
  }
  else{
    display.innerText = 0;
  }
});