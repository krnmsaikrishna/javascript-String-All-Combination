function combinations(string){
var strings=[];
var sgnirts=[];
var o=0;
var nuller='';
var flag="false";
if (typeof string!='string')
{
return "Given Input Is Wrong";}
function combinations(befo,str){
if (str.length == 1){
if (strings.indexOf(befo+str) < 0)
{
strings.push(befo+str);}}else{
str.split(nuller).forEach(function(char,pos){
var substr = str.slice(0,pos) + str.slice(pos + 1);combinations(befo+ char, substr);});}}
combinations(nuller,string);
for(var q=0;q<strings.length;q++){
for(var p=1;p<strings[0].length;p++){
if(sgnirts.indexOf(strings[q].slice(0,p))==-1){
sgnirts[o]=strings[q].slice(0,p);o++;}}}
sgnirts=sgnirts.concat(strings);
var totlen=sgnirts.length;
return totlen+"@"+sgnirts.join("\n");};
function generator(){
var input=document.getElementById("input").value;
if (input.length>10){
return alert ("Maximum characters only 10");}
else{
var output=combinations(""+input);
output=output.split("@");
document.getElementById("combination").value=output[0];
document.getElementById("output").value=output[1];}};
