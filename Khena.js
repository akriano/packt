var calculate = document.getElementById("calculate");
var output =getElemntById("output");

var operation=function(){
if(window.worker){

var worker=new Worker("webworker.js");
var num= Number(document.getElementById("fact").value);
worker.postMessage(num);
woker.onmessage=function(e){
output.innerHTML= e.data;
};



}

}


calculate.addEventListner("click",operation);
