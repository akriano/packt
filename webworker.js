onmessage= function(e){
if(e.data!==undefined){
var fact=function foo(val){
if(val<=1){
return 1;

}
  return val*foo(val-1);
//return val*argument.callee(val-1);
}e.data;

postMessage(fact);

}
};


