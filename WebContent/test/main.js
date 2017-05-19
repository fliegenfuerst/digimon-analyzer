/**
 * 
 */

function main(){
	var container=document.getElementById("container");
	doStuff();
}

function doStuff(){
container.appendChild(createDiv({name:"hans",job:"get the flammenwerfer",reasons:["cringe","nope"],func:function(){return "it's right nex to where the pen is";}}));
}

function createDiv(obj){
	var ret=document.createElement("DIV");
	var temp="";
	var properties=Object.getOwnPropertyNames(obj);
	for(var i=0;i<properties.length;i++){
		console.log(typeof obj[properties[i]]);
		console.log(obj[properties[i]] instanceof Array);
		if(typeof obj[properties[i]]==='function'){
			console.log(obj[properties[i]]());
		}
		temp+="<div class='"+properties[i]+"'>"+obj[properties[i]]+"</div>";
	}
	ret.innerHTML=temp;
	return ret;
}



