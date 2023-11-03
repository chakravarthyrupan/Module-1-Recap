
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

//!Median of two sorted arrays
//arr1 =[1,3,5,7] arr 2 = [2,4,6,8]
//*step1:- concat the array
//* step 2:- sort the new array
//*step 3:- return the median based on the array length.
/*const arr1 = [1,3,5,7];
const arr2 = [2,4,6];
function findMedianOfTwoSortedArrays(arr1, arr2){
  let arr = [...arr1,...arr2];
  arr.sort((a,b)=>a-b);
  let n = arr.length;
  if(n%2===0){
// (arrayname[length/2]+arrayname[length/2-1])/2
 return((arr[n/2]+arr[n/2-1])/2)
  }
  else{
//arrayname[length/2]
 return arr[Math.floor(n/2)]
  }
}
console.log(findMedianOfTwoSortedArrays(arr1,arr2));
*/
/*const arr1 = [1,3,5,7];
const arr2 = [2,4,6,8];
function findMedianOfTwoSortedArrays(arr1, arr2){
  let arr = [...arr1,...arr2];
  arr.sort((a,b)=>a-b);
  let n = Math.floor(arr.length/2);
  let n1 = arr.length // 
 // (arrayname[length/2]+arrayname[length/2-1])/2


//arrayname[length/2]
return n1%2===0 ? (arr[n]+arr[n-1])/2 : arr[n]
}
console.log(findMedianOfTwoSortedArrays(arr1,arr2));
*/

//!Rotate an array by k times:-

/*const arr = [1,2,3,4,5];
const k =3;
(function(arr,k){
   for(var i=0;i<k;i++){
    //push
    arr.push(arr[i])
   }
   for(var i=0;i<k;i++){
    //shift
    arr.shift()
   }
   console.log(arr)
})(arr,k);
*/



//! Uber Price:-
/*class UberPrice{
  constructor(kilometer,price=50){
    this.kilometer = kilometer;
    this.price = price;
  }
  get Price(){
    return this.kilometer*this.price;
  }
}
var uber1 = new UberPrice(5);
var uber2 = new UberPrice(5,125)
console.log(uber1.Price);
console.log(uber2.Price);
*/
//!US Dollar as currency:-
/*var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data = request.response;
   var result = JSON.parse(data);
  var currency = result.filter((value)=> value.currencies && value.currencies.USD)
 currency.forEach((value)=>console.log(value.name.common))
}
*/




