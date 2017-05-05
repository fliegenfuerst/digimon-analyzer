//Special requirements:
/*
-guardromon passing for factorial town
-otamamon /shogungeko /cherrymon for misty trees
-talk to yuramon
-multiple instances (nani/ogre)
-drimogemon talk to get to meramon
-drimogemon talk to open tunnel
-list of digimon who can trigger frigimon

//special item vendors:
-Numemon/Mojyamon/Devimon/Mamemon

//important triggers

-obtain fishing rod	->seadramon, kuwagamon, kabuterimon
-talk to yuramon after seeing invisible bridge
-talk to yuramon after palmon recruit
-talk to tanemon after rainplant pick up
-talk to tanemon after getting rainplant (triggers on day 15)
-first coelamon encounter
-see digibridge being rebuilt from tropical side	-> coelamon & ninjamon

-talk to digging drimogemon to start 5 day timer
-reduce 5day timer by helping drimogemon
-talk to drimogemon in southern cave again after meramon fight



//-----------------visual
-tool tip for list of digimon that can trigger frigimon

-RED MEANS FIGHT GREEN MEANS TALK/TASK

-OPEN PATH TO MT PANORAMA_: BEAT MERAMON
-OPEN PATH TO FOOT OF MT PANORAMA_: TALK TO DRIMOGEMON AFTER BEATING MERAMON

meramon+centarumon/meramon+drimogemon/walking through great canyon, freezeland, misty trees, gear savanna

TALK TRIGGER LIST "YES YES NO"

-

see strange markings on vademon screen	USE MAP VERSIONS OF



beat meramon and talk to drimogemon ->wait 3 days

digimon to fight (in groups -> use separate borders and map image to signify the different fights


LEOMONSTONE

-obtain fishing rod	->seadramon, kuwagamon, kabuterimon



*/
//---------------------------------------------------------------------------------------------------------------------------------------



//					var str='<div><table><tr><td>HP</td><td>'+digimon.HP+'</td></tr><tr><td>MP</td><td>'+digimon.MP+'</td></tr><tr><td>OFF</td><td>'+digimon.Offense+'</td></tr><tr><td>DEF</td><td>'+digimon.Defense+'</td></tr><tr><td>SPD</td><td>'+digimon.Speed+'</td></tr><tr><td>BRN</td><td>'+digimon.Brains+'</td></tr></table></div>';


var done=[];
var todo=digimon;

var recruiteables=[];
var prosperityPoints=0;
function getRecTrigger(trigger){
	return digimon.filter(function(obj) {
		return obj.name === trigger;
	})[0];
}
function checkRequirement(digi){
    var obj=null;
    var recTrigger=null;
    if(digi.prosperityTrigger==undefined||digi.prosperityTrigger<=prosperityPoints){
	    if(digi.recruitTrigger==undefined){
	        return true;
	    }else{
	        recTrigger=digi.recruitTrigger;
	        if (recTrigger.indexOf(',') > -1) { 
	            recTrigger=recTrigger.split(',');
	            for(var r=0;r<recTrigger.length;r++){
	            	if(digi.Name=="Nanimon"){
	            		console.log("nanirec:"+recTrigger[r]);
	            	}
	                obj=getRecTrigger(recTrigger[r]);
	                if(!obj.recruited){
	                    return false;
	                }
	            }
	            return true;
	        }else if(recTrigger.indexOf('/') > -1) {
	            recTrigger=recTrigger.split('/');
	            for(var r=0;r<recTrigger.length;r++){
	                obj=getRecTrigger(recTrigger[r]);
	                if(obj.recruited){
	                    return true;
	                }
	            }
	            return false;
	        }else{
	        	obj=getRecTrigger(recTrigger);
	            if(obj.recruited){
	                return true;
	            }
	            else{
	            	return false;
	            }
	        }
	    }
	}
}
function searchByName(array,name){
	//console.log(name);
	var obj = array.filter(function(obj) {
        return obj.Digimon === name;
    })[0];
    //console.log("searched"+obj[0]);
	return obj;
}
function searchByNameStats(array,name){
	console.log(name+"\n"+array);
	//console.log(name);
	var obj = array.filter(function(obj) {
        return obj.Name === name;
    })[0];
    //console.log("searched"+obj[0]);
	return obj;
}
function getDigiData(digi){
	var data;
	if(digi.itsComplicated){
		for(var d=0;d<digi.fights.length;d++){
			for(var e=0;digi.fights[d].enemies.length;e++){

			}
		}
	}else{
		//var data='<table><tr><td>'+digi.HP+'</td></tr></table>';
	data='<table class="stats"><tr><td>';
	data+='<table><tr><td class="firstCellStats">HP</td><td>'+digi.HP+'</td></tr><tr><td class="firstCellStats">MP</td><td>'+digi.MP+'</td></tr>';
	data+='<tr><td class="firstCellStats">OFF</td><td>'+digi.Offense+'</td></tr><tr><td class="firstCellStats">DEF</td><td>'+digi.Defense+'</td>';
	data+='</tr><tr><td class="firstCellStats">SPD</td><td>'+digi.Speed+'</td></tr><tr><td class="firstCellStats">BRN</td><td>'+digi.Brains+'</td></tr></table></td>';
	data+='<td><table class="moves"><tr><td class="firstCellMoves">Move</td><td><Probability</td></tr>';
	data+='<tr><td class="firstCellMoves">'+digi.Move1+'</td><td>'+digi.MoveChance1+'</td></tr><tr><td class="firstCellMoves">'+digi.Move2+'</td><td>'+digi.MoveChance2+'</td></tr>';
	data+='<tr><td class="firstCellMoves">'+digi.Move3+'</td><td>'+digi.MoveChance3+'</td></tr><tr><td class="firstCellMoves">'+digi.Move4+'</td><td>'+digi.MoveChance4+'</td></tr></table></td></tr></table>';
	
	}
	return data;
}
function countMoves(digi){

}

function getStatsByMap(digi){
	return digiEnemies.filter(function(obj) {
		return (obj.Map === digi.Map && obj.Digimon===digi.Name);
	})[0];
}

function start(){



	/*
console.log(tDigimonG.length);
  for(var i=0;i<tOs2.length;i++){
console.log(tOs2[i].nameE+","+tOs2[i].typeE);
}
*/
	/*
var digiCount=0;
for(var c=0;c<mapData.length;c++){
	console.log(mapData[c]);
	digiCount+=mapData[c].hasRecruit;
}
alert(digimon.length+","+digiCount);




var digiEnemiesTrim=[];
var tempDigi=null;
for(var t=0;t<digiEnemies.length;t++){
	tempDigi={
        Na:digiEnemies[t].Digimon,
        Ma:digiEnemies[t].Map.split(".")[0],
        H:digiEnemies[t].HP,
        M:digiEnemies[t].MP,
        O:digiEnemies[t].Offense,
        D:digiEnemies[t].Defense,
        S:digiEnemies[t].Speed,
        B:digiEnemies[t].Brains,
        Bt:digiEnemies[t].Bits
        Bt:digiEnemies[t].Bits
    };
        tempDigi.Ms=

        [
            {
                Mo:digiEnemies[t].Move1,
                C:digiEnemies[t].MoveChance1,
            },
            {
                Mo:digiEnemies[t].Move2,
                C:digiEnemies[t].MoveChance2,
            },
            {
                Mo:digiEnemies[t].Move3,
                C:digiEnemies[t].MoveChance3,
            },
            {
                Mo:digiEnemies[t].Move4,
                C:digiEnemies[t].MoveChance4,
            }
        ]

    digiEnemiesTrim.push(tempDigi);
}

function Test(name,length){
	this.name=name;
	this.length=length;
}
var digitest=[];
digitest.push(new Test("hui",3));
digitest.push(new Test("hui",3));
digitest.push(new Test("hui",3));
digitest.push(new Test("hui",3));
digitest.push(new Test("hui",3));
var save=JSON.stringify(digitest);
console.log(save);
console.log(JSON.parse(save));
//console.log(JSON.stringify(digiEnemiesTrim));





  var multiples=[];
  for(var i=0;i<digiStats.length;i++){
  	if(digiStats[i].Move5!=="None"){
  		console.log(digiStats[i]);
  	//console.log(digiStats[i].Fights);
	    if(multiples[digiStats[i].Name]!==undefined){
	        multiples[digiStats[i].Name]++;
	    }else{
	        multiples[digiStats[i].Name]=1;
	    }
  	}
  }
  console.log(multiples);

  var multiples=[];
  for(var i=0;i<digiEnemies.length;i++){
  	if(digiEnemies[i].Fights===0){
  	console.log(digiEnemies[i].Fights);
	    if(multiples[digiEnemies[i].Digimon]!==undefined){
	        multiples[digiEnemies[i].Digimon]++;
	    }else{
	        multiples[digiEnemies[i].Digimon]=1;
	    }
  	}
  }
  console.log(multiples);






  var multiples=[];
  var checkTown;
  for(var i=0;i<digiEnemies.length;i++){
//  	checkTown=searchByName(digiEnemies,digiEnemies[i].Digimon);
  	//console.log(checkTown);
  	if(digiEnemies[i].Map.indexOf("ROOM")>-1||digiEnemies[i].Map.indexOf("TWNB")>-1){
console.log(digiEnemies[i]+"towneeeeeeeeeeeeeeeeeeeee");
  	}else{
console.log(digiEnemies[i]);
}
  	//document.getElementById("allDigi").innerHTML+='<h1>'+digiEnemies[i].Digimon+'</h1><img src="https://www.phoenix-staffel.de/digimon/DigimonWorld/Backgrounds/'+digiEnemies[i].Map.split(".")[0]+'.TFS/' + digiEnemies[i].Map.split(".")[0] + '.TFS.0.PNG"/>';
  	//if(digiEnemies[i].Fights===1){
  	//console.log(digiEnemies[i].Fights);
  	//if(searchByName(digiStats,digiEnemies[i].Digimon).Fights!==0){
	    if(multiples[digiEnemies[i].Digimon]!==undefined){
	        multiples[digiEnemies[i].Digimon]++;
	    }else{
	        multiples[digiEnemies[i].Digimon]=1;
	    } 		
  	//}

  	//}
  }
  console.log(multiples);
*/



	var inventory={};
	var bits=0;


    document.getElementById("prosperityPoints").innerHTML=parseInt(prosperityPoints);
    document.getElementById("recruitmentList").innerHTML="";
    document.getElementById("doneList").innerHTML="";
    var list="";
    var div=null;
    var changed=false;
    if(prosperityPoints>0){
		for(var i=0;i<digimon.length;i++){
	        if(digimon[i].recruited){
		        if(!checkRequirement(digimon[i])){
		        	console.log(digimon[i]);
		        	prosperityPoints-=parseInt(digimon[i].prosperityPoints);
		        	digimon[i].recruited=false;
		        	changed=true;
		        }else{
		        	var t=searchByNameStats(digiStatsStory,digimon[i].name);
		        	if(t!==undefined&&t.DropItem!=="-"){

					bits+=getStatsByMap(t).Bits;
		        	if(inventory[t.DropItem]==undefined){
						inventory[t.DropItem]=1;
		        	}else{
						inventory[t.DropItem]++;
		        	}
		        	}
					list+='<div class="recruitment done"><input class="recruited" type="checkbox" name="checkbox" id="'+digimon[i].name+'" onclick="checkBoxClick(this);" checked>';
					list+='<div class="name">'+digimon[i].name+'</div></div>';
		        }
	        }else if(digimon[i].trigger=="None"||checkRequirement(digimon[i])){
				list+='<div class="recruitment"><div><input class="recruited" type="checkbox" name="checkbox" id="'+digimon[i].name+'" onclick="checkBoxClick(this);">';
				list+='<div class="name">'+digimon[i].name+'</div>';
				
				console.log(searchByName(digiEnemies,digimon[i].name));
				if(digimon[i].fight!=="0"){
					list+=' ';
					for(var f=0;f<digimon[i].fight;f++){
						list+='<img src="./img/battle.png" width="22">';
					}
					//list+='<div><table><tr><td>HP</td><td>'+digimon[i].HP+'</td></tr><tr><td>MP</td><td>'+digimon[i].MP+'</td></tr><tr><td>OFF</td><td>'+digimon[i].Offense+'</td></tr><tr><td>DEF</td><td>'+digimon[i].Defense+'</td></tr><tr><td>SPD</td><td>'+digimon[i].Speed+'</td></tr><tr><td>BRN</td><td>'+digimon[i].Brains+'</td></tr></table></div>';
					var digi,digiSta;
					console.log(digimon[i].name);
					console.log(searchByName(digiEnemies,digimon[i].name));
					//var digi=searchByName(digiEnemies,digimon[i].name);
					console.log("TESTO"+digi);
					digiSta=searchByNameStats(digiStatsStory,digimon[i].name);
					digi=getStatsByMap(digiSta);
					if(digimon[i].name=="Monzaemon"){
						digi=searchByName(digiEnemies,"WaruMonzaemon");
						digiSta=searchByNameStats(digiStatsStory,"WaruMonzaemon");
					}else{
					digiSta=searchByNameStats(digiStatsStory,digimon[i].name);
					digi=getStatsByMap(digiSta);
					}
					console.log(digi);
					list+='<br /><br />'+digiSta.Level+'/'+digiSta.Speciality1+'</div><br />';
					list+='<table class="dataTable"><tr><td class="firstCell"><b>trigger:</b></td><td>'+digimon[i].trigger+'</td></tr>';
					list+='<tr><td class="firstCell"><b>region:</b></td><td>'+digimon[i].region+' - '+digimon[i].location+','+digimon[i].data.Map+'</td></tr>';
					list+='<tr><td class="firstCell"><b>requirement:</b></td><td>'+digimon[i].requirement+'</td></tr>';
					list+='<tr><td class="firstCell"><b>unlocks:</b></td><td>'+digimon[i].unlocks+'</td></tr>';
					list+='<tr><td class="firstCell"><b>drops item:</b></td><td>'+digiSta.DropItem+'</td></tr>';
					list+='<tr><td class="firstCell"><b>bits:</b></td><td>'+digi.Bits+'</td></tr>';
					list+='<tr class="stats"><td class="firstCell"></td><td>'+getDigiData(digi)+'</td></tr>';
				}else{
					list+='</div><br /><br /><table class="dataTable"><tr class="trigger"><td><b>trigger:</b></td><td>'+digimon[i].trigger+'</td></tr>';
					list+='<tr><td><b>region:</b></td><td>'+digimon[i].region+'</td></tr>';
					if(digimon[i].location===undefined){
						list+='<tr class="location"><td><b>location:</b></td><td>'+findMap(digimon[i].data.Map.split(".")[0]).Name+','+digimon[i].data.Map+'</td></tr>';

					}else{
						list+='<tr class="location"><td><b>location:</b></td><td>'+digimon[i].location+','+digimon[i].data.Map+'</td></tr>';

					}
					list+='<tr class="requirement"><td><b>requirement:</b></td><td>'+digimon[i].requirement+'</td></tr>';
					list+='<tr><td><b>unlocks:</b></td><td>'+digimon[i].unlocks+'</td></tr>';
				}
					list+='</table><div class="mapContainer"><img class="map" src="https://www.phoenix-staffel.de/digimon/DigimonWorld/Backgrounds/' + digimon[i].data.Map.split(".")[0] + '.TFS/' + digimon[i].data.Map.split(".")[0] + '.TFS.0.PNG"/></div></div>';

			}
			if(digimon[i].prosperityPoints===undefined){
			    console.log("Problem"+digimon[i]);
			}
			div=null;
	    	checked="";
		}
		if(changed){
	        	start();
	    }
    }else{
    	var digi=searchByName(digiEnemies,"Agumon");
		var digiSta=searchByNameStats(digiStatsStory,"Agumon");

		//console.log(digi);
		//list+=digiSta.Level+'/'+digiSta.Speciality1+'</div><div class="requirement">'+digimon[i].requirement+'</div><div class="location">'+digimon[i].location+','+digi.Map+'</div><div class="stats">'+getDigiData(digi)+'</div></div>';
				
	    list='<div class="recruitment"><div><div class="name">'+digimon[0].name+'</div><input class="recruited" type="checkbox" name="checkbox" id="'+digimon[0].name+'" onclick="checkBoxClick(this);"><img src="./img/battle.png" width="22">'+digiSta.Level+'/'+digiSta.Speciality1+'</div><div class="requirement">'+digimon[0].requirement+'</div><div class="location">'+digimon[0].location+','+digi.Map+'</div><div class="stats">'+getDigiData(digi)+'</div></div>';
    }
    document.getElementById("recruitmentList").innerHTML=list;
		        	document.getElementById("inventory").innerHTML=JSON.stringify(inventory);
		        	document.getElementById("bits").innerHTML="bits: "+bits;
}
function checkBoxClick(cb) {
	console.log(cb.id);
	var boost = 0;
	var obj = digimon.filter(function(obj) {
        return obj.name === cb.id;
    })[0];
	if (cb.checked) {
		obj.recruited=true;
		prosperityPoints+=parseInt(obj.prosperityPoints);
		ret=true;
	start();
	}else{
		prosperityPoints-=parseInt(obj.prosperityPoints);
		obj.recruited=false;
		ret=false;
		if(cb.id=="Agumon"){
			prosperityPoints=0;
			for(var d=0;d<digimon.length;d++){
				digimon[d].recruited=false;
			}
		}
	start();
	}
	//console.log(document.getElementById("recruitmentList").innerHTML);
	return ret;
}