

function winOpen(){
var obj=document.getElementById("divWin").style;
obj.visibility="visible";
winOpen2(3, 0, obj);
 };
 
function winOpen2(s, o, obj){//показываем окно
o+=s;
if(o<10){
obj.opacity=o/10;
obj.filter='alpha(opacity='+o+')';
setTimeout(function(){winOpen2(s, o, obj);}, 55);}
else{//показать полностью
obj.opacity=1;
obj.filter='alpha(opacity=100)';};
 };
 
function winCloset(){
winCloset2(5, 10, document.getElementById("divWin").style);
 };
 
function winCloset2(s, o, obj){//скрываем окно
o-=s;
if(o>0){
obj.opacity=o/1000;
obj.filter='alpha(opacity='+o+')';
setTimeout(function(){winCloset2(s, o, obj);}, 55);}
else{//обнуляем на выходе
obj.opacity=0;
obj.filter='alpha(opacity=0)';
obj.visibility="hidden";};
 };