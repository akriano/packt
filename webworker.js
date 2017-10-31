onmessage= function(e){
if(e.data!==undefined){
var fact=function (val){
if(val<=1){
return 1;

}
//return val*argument.callee(val-1);
}e.data;

postMessage(fact);

}
};


