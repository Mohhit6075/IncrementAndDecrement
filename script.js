const add = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const counter = document.querySelector(".counter");
const range = document.querySelectorAll("input");
const clear = document.querySelector(".clear");

add.addEventListener("click", () => {
    counter.innerText = parseInt(counter.innerText) + 1;
})

minus.addEventListener("click", () => {
    counter.innerText = parseInt(counter.innerText) - 1;
});

  
 function rangeAdd () {
    if(range[0].value === "")
     return alert('Please provide any value')
  counter.innerText = parseInt(range[0].value) + parseInt(counter.innerText);
  range[0].value = "";
};

function rangeSub () {
  if(range[1].value === "")
   return alert('Please provide any value')
counter.innerText = parseInt(counter.innerText) - parseInt(range[1].value);
range[1].value = "";
};

function rangeMulti () {
  if(range[2].value === "")
   return alert('Please provide any value')
counter.innerText = parseInt(range[2].value) * parseInt(counter.innerText);
range[2].value = "";
};

function rangeDiv () {
  if(range[3].value === "")
   return alert('Please provide any value')
counter.innerText = parseInt(counter.innerText) / parseInt(range[3].value);
range[3].value = "";
};
  clear.onclick = () => counter.innerText = 0;