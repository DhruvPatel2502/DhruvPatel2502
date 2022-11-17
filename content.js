
// const labels = document.getElementsByTagName("label");

// for(label of labels) {
//     label.style.border = "4px solid red";
//  }
    labels = document.getElementsByTagName('label');
    for( var i = 0; i < labels.length; i++ ) {
       if (labels[i].getAttribute("for")){
       labels[i].style.border = "4px solid red";}
       
    }
let button = document.querySelector('#btn2');
let msg = document.querySelector('#message');

button.addEventListener('click', ()=>{
  msg.classList.toggle('reveal');
})

