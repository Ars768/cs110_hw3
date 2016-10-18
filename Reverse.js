  	let s = "";
  let n = 1;
  const reverse = function(arr){
    if ( n === arr.length + 1){return "";}
	else if (n === arr.length){return s += arr[arr.length-n]}
    s += arr[arr.length - n] + ", ";
    n = n + 1;
    reverse(arr);
  }
  const reversedArray = function(arr){
    reverse(arr);
    console.log(s);
  }
  console.log(reversedArray([1,2,3]));