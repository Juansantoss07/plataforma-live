let modalone = document.getElementById("mymodal-one");
let btnone = document.getElementById("mybtn-one");
let span = document.getElementsByClassName("close")[0];
btnone.onclick = function(){
    modalone.style.display="block";
}

span.onclick = function(){
    modalone.style.display = "none";
}
window.onclick = function(event){
    if (event.target == modalone){
        modalone.style.display = "none";
    }
};

let modaltwo = document.getElementById("mymodal-two");
let btntwo = document.getElementById("mybtn-two");
let spanone = document.getElementsByClassName("close-one")[0];
btntwo.onclick = function(){
    modaltwo.style.display="block";
}

spanone.onclick = function(){
    modaltwo.style.display = "none";
}
window.onclick = function(event){
    if (event.target == modaltwo){
        modal.style.display = "none";
    }
};