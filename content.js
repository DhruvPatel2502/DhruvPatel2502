


// const labels = document.getElementsByTagName("label");

// for(label of labels) {
//     label.style.border = "4px solid red";
//  }
    labels = document.getElementsByTagName('label');
    for( var i = 0; i < labels.length; i++ ) {
       if (labels[i].getAttribute("for")){
       labels[i].style.border = "4px solid red";}
    }
