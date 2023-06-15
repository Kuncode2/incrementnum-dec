function firstnumber(){
  const number = 0;
  const displaynumber = document.getElementsByClassName('number')[0];

function update(){
  displaynumber.innerText = number;
}

function incrementnum(){
  number++;
  update();
}
function decrementnum(){
  number--;
  update();
}
document.getElementsByClassName('increment').onclick = incrementnum[0];
document.getElementsByClassName('decrement').onclick = decrementnum[0];
update();
};

