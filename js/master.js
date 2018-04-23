function change(n){
var spanObj = document.getElementById('word1');
spanObj.style.color="red";
spanObj.style.fontWeight="bold";
if (n==1){
  spanObj.innerHTML="Nothing";
}
else if (n==2) {
  spanObj.innerHTML="tichu";
}
else if (n==3) {
  spanObj.innerHTML="Big tichu";
}
}
function bchange(n){
var spanObj = document.getElementById('word2');
spanObj.style.color="blue";
spanObj.style.fontWeight="bold";
if (n==1){
  spanObj.innerHTML="Nothing";
}
else if (n==2) {
  spanObj.innerHTML="tichu";
}
else if (n==3) {
  spanObj.innerHTML="Big tichu";
}
}
/*++++++++++++++++++++++++++++++++++++++++++++++++++*/
var n=0;
var m=0;
function count(a){
var z = document.getElementById('num1');
if (a==1){
z.innerHTML=n=n+5;
}
else if (a==2) {
z.innerHTML=n=n+10;
}
else if (a==3) {
z.innerHTML=n=n+50;
}
else if (a==4) {
z.innerHTML=n=n-5;
}
else if (a==5) {
z.innerHTML=n=n-10;
}
else if (a==6) {
z.innerHTML=n=n-50;
}
else if (a==7) {
z.innerHTML=n=n+300;
}
else if (a==8) {
z.innerHTML=n=n+100;
}
else if (a==9) {
z.innerHTML=n=n+200;
}
else if (a==10) {
z.innerHTML=n=n-100;
}
else if (a==11) {
z.innerHTML=n=n-200;
}
}
/*BBBBBBBBBBBBBBBB*/
function bcount(b){
var x = document.getElementById('num2');
if (b==1){
x.innerHTML=m=m+5;
}
else if (b==2) {
x.innerHTML=m=m+10;
}
else if (b==3) {
x.innerHTML=m=m+50;
}
else if (b==4) {
x.innerHTML=m=m-5;
}
else if (b==5) {
x.innerHTML=m=m-10;
}
else if (b==6) {
x.innerHTML=m=m-50;
}
else if (b==7) {
x.innerHTML=m=m+300;
}
else if (b==8) {
x.innerHTML=m=m+100;
}
else if (b==9) {
x.innerHTML=m=m+200;
}
else if (b==10) {
x.innerHTML=m=m-100;
}
else if (b==11) {
x.innerHTML=m=m-200;
}
}
function RE(){
var z = document.getElementById('num1');
var x = document.getElementById('num2');
x.innerHTML=n=0;
z.innerHTML=m=0;
}
