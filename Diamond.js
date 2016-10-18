const diamond = function(number){
if (number%2 === 0){number = number + 1;}
let count = (number+1)/2;
let spacestring = "";
let starstring = "";
let starcount = 1;
let space = (number - 1)/2;
let starcount2;
for(i = 1; i<=number; i= i+1){
if(i>(number+1)/2)
{
	space = space + 2;
	for(let n = 1; n <= space; n = n + 1)
	{
		spacestring += " ";
	}
	for (let star = starcount2; star >= 1; star = star - 1)
	{
		starstring += "*";
	}
	console.log(spacestring+starstring);
	spacestring = "";
	starstring = "";
	space = space - 1;
	starcount2 = starcount2 - 2;
}
else if (i<=(number+1)/2){
for(let n = space; n > 0; n = n - 1)
{
	spacestring += " ";
}
for (let star = 1; star <= starcount; star = star + 1)
{
	starstring += "*";
}
console.log(spacestring+starstring);
spacestring = "";
starstring = "";
space = space - 1;
starcount = starcount + 2;
starcount2 = starcount - 4;
}
}
}

console.log(diamond(5));