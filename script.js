//!Palindrome
/*function palindrome(arr){
var result =[];
for(var i=0;i<arr.length;i++){
    var data = arr[i].split("").reverse().join(""); //data =>d,a,t,a=>a,t,a,d=>atad
    if(data===arr[i]){
        result.push(arr[i]);
    }
}
     return result;
}
console.log(palindrome(['mom','dad','data']));
*/

//!convert all the string title to caps
/*function titleCase(arr){
  var res =arr.toString();
  var data = res.toLowerCase().split(" ");
  for(var i=0; i<data.length; i++){
     data[i]= data[i].charAt(0).toUpperCase() + data[i].slice(1);
  }
  return data.join(' ');
}
console.log(titleCase(["tHis IS jAvAsCrIpT"]));
*/


