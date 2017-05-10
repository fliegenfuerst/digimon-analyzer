var extra=true;
//start value is green gym:
var hpTrain=[80,0,2,0,0,0];
var mpTrain=[0,80,0,2,0,0];
var offTrain=[0,0,8,0,2,0];
var defTrain=[0,0,0,8,0,2];
var spdTrain=[10,0,0,0,8,0];
var brnTrain=[0,10,0,0,0,8];
var blank=[0,0,0,0,0,0];
var level=1;
var boostArr=[1,1,1,1,1,1];
var resultArr=[1,1,1,1,1,1];
var trainingPreference=[1,1,1,1,1,1];
var kuwaga=[1,1,1,1,1,1];
var kabuteri=[1,1,1,1,1,1];
var manual=1;
var carrot=[1,1,1,1,1,1];
var raddish=[1,1,1,1,1,1];
var pine=1;
var slots=1;
function setBoost(cb){
	var boost=1;
	if (cb.checked){
		boost=1.2;
	}
	switch(cb.id){
		case "hp":
			boostArr[0]=boost;
			break;
		case "mp":
			boostArr[1]=boost;
			boostArr[5]=boost;
			break;
		case "off":
			boostArr[2]=boost;
			break;
		case "def":
			boostArr[3]=boost;
			break;
		case "spd":
			boostArr[4]=boost;
			break;
		case "kuwaga":
			kuwaga=[1,boost,boost,1,1,boost];
			break;
		case "kabuteri":
			kabuteri=[boost,1,1,boost,boost,1];
			break;
		case "manual":
			if(boost==1.2){
				manual=1.1;
			}else{
				manual=1;
			}
			break;
	}
	getTrainingValues();
}
var rbList=classGet("trainingItem");
function setTrainingItem(rb){
	carrot=[1,1,1,1,1,1];
	raddish=[1,1,1,1,1,1];
	pine=1;
	if (rb.checked===true){
		for (var i=0;i<rbList.length;i++) {
			rbList[i].checked=false;
		}
		rb.checked=true;
		switch(rb.id){
			case "carrot":
				carrot=[1,1.2,1.2,1,1,1.2];
				break;
			case "raddish":
				raddish=[1.2,1,1,1.2,1.2,1];
				break;
			case "pine":
				pine=1.5;
				break;
		}
	}
	getTrainingValues();
}
var slotRBs=classGet("slots");
function setSlots(rb){
	slots=1;

	if (rb.checked===true){
	for(var s=0;s<slotRBs.length;s++){
		slotRBs[s].checked=false;
	}
	rb.checked=true;
	switch(rb.id){
		case "fail":
			slots=0.5;
			break;
		case "other":
			slots=2;
			break;
		case "same":
			slots=4;
			break;
		case "gold":
			slots=10;
			break;
	}
	}
	getTrainingValues();
}
function radioBtn(rb){
	var rbList=document.getElementsByClassName("radioBtnGym");
	if (rb.checked===true){
		for (var i=0;i<rbList.length;i++){
			rbList[i].checked=false;
		}
		rb.checked=true;
		extra=false;
		switch(rb.id){
			case "greenGym":
				hpTrain=[80,0,2,0,0,0];
				mpTrain=[0,80,0,2,0,0];
				offTrain=[0,0,8,0,2,0];
				defTrain=[0,0,0,8,0,2];
				spdTrain=[10,0,0,0,8,0];
				brnTrain=[0,10,0,0,0,8];
				extra=true;
				break;
			case "beetleGym":
				hpTrain=[120,0,0,0,0,0];
				mpTrain=blank;
				offTrain=[0,0,12,0,0,0];
				defTrain=[0,0,0,12,0,0];
				spdTrain=[0,0,0,0,12,0];
				brnTrain=blank;
				break;
			case "leomonGym":
				hpTrain=blank;
				mpTrain=blank;
				offTrain=[10,0,8,0,0,0];
				defTrain=blank;
				spdTrain=[10,0,0,0,8,0];
				brnTrain=blank;
				break;
			case "iceSanctGym":
				hpTrain=[120,0,0,2,0,0];
				mpTrain=blank;
				offTrain=blank;
				defTrain=[0,0,0,12,2,0];
				spdTrain=blank;
				brnTrain=blank;
				break;
			case "cherrymonGym":
				hpTrain=blank;
				mpTrain=blank;
				offTrain=blank;
				defTrain=blank;
				spdTrain=blank;
				brnTrain=[0,10,0,0,0,8];
				extra=true;
				break;
			case "trashMTGym":
				hpTrain=blank;
				mpTrain=[0,150,0,0,0,0];
				offTrain=blank;
				defTrain=blank;
				spdTrain=blank;
				brnTrain=blank;
				break;
		}
	}
	getTrainingValues();
}
function getTrainingValues(){
	var multiplier;
	for (var i=0;i<6;i++){
		multiplier=trainingPreference[i]*manual*level;
		if(extra){
			multiplier*=boostArr[i]*kabuteri[i]*kuwaga[i];
		}
		resultArr[i]=Math.floor(multiplier*10)/10;
	}
	document.getElementById("hpHP").innerHTML=Math.floor(hpTrain[0]*raddish[0]*carrot[0]*pine*slots*resultArr[0]);
	document.getElementById("hpMP").innerHTML=Math.floor(hpTrain[1]*raddish[1]*carrot[1]*pine*slots*resultArr[0]);
	document.getElementById("hpOFF").innerHTML=Math.floor(hpTrain[2]*raddish[2]*carrot[2]*pine*slots*resultArr[0]);
	document.getElementById("hpDEF").innerHTML=Math.floor(hpTrain[3]*raddish[3]*carrot[3]*pine*slots*resultArr[0]);
	document.getElementById("hpSPD").innerHTML=Math.floor(hpTrain[4]*raddish[4]*carrot[4]*pine*slots*resultArr[0]);
	document.getElementById("hpBRN").innerHTML=Math.floor(hpTrain[5]*raddish[5]*carrot[5]*pine*slots*resultArr[0]);
	document.getElementById("mpHP").innerHTML=Math.floor(mpTrain[0]*raddish[0]*carrot[0]*pine*slots*resultArr[1]);
	document.getElementById("mpMP").innerHTML=Math.floor(mpTrain[1]*raddish[1]*carrot[1]*pine*slots*resultArr[1]);
	document.getElementById("mpOFF").innerHTML=Math.floor(mpTrain[2]*raddish[2]*carrot[2]*pine*slots*resultArr[1]);
	document.getElementById("mpDEF").innerHTML=Math.floor(mpTrain[3]*raddish[3]*carrot[3]*pine*slots*resultArr[1]);
	document.getElementById("mpSPD").innerHTML=Math.floor(mpTrain[4]*raddish[4]*carrot[4]*pine*slots*resultArr[1]);
	document.getElementById("mpBRN").innerHTML=Math.floor(mpTrain[5]*raddish[5]*carrot[5]*pine*slots*resultArr[1]);
	document.getElementById("offHP").innerHTML=Math.floor(offTrain[0]*raddish[0]*carrot[0]*pine*slots*resultArr[2]);
	document.getElementById("offMP").innerHTML=Math.floor(offTrain[1]*raddish[1]*carrot[1]*pine*slots*resultArr[2]);
	document.getElementById("offOFF").innerHTML=Math.floor(offTrain[2]*raddish[2]*carrot[2]*pine*slots*resultArr[2]);
	document.getElementById("offDEF").innerHTML=Math.floor(offTrain[3]*raddish[3]*carrot[3]*pine*slots*resultArr[2]);
	document.getElementById("offSPD").innerHTML=Math.floor(offTrain[4]*raddish[4]*carrot[4]*pine*slots*resultArr[2]);
	document.getElementById("offBRN").innerHTML=Math.floor(offTrain[5]*raddish[5]*carrot[5]*pine*slots*resultArr[2]);
	document.getElementById("defHP").innerHTML=Math.floor(defTrain[0]*raddish[0]*carrot[0]*pine*slots*resultArr[3]);
	document.getElementById("defMP").innerHTML=Math.floor(defTrain[1]*raddish[1]*carrot[1]*pine*slots*resultArr[3]);
	document.getElementById("defOFF").innerHTML=Math.floor(defTrain[2]*raddish[2]*carrot[2]*pine*slots*resultArr[3]);
	document.getElementById("defDEF").innerHTML=Math.floor(defTrain[3]*raddish[3]*carrot[3]*pine*slots*resultArr[3]);
	document.getElementById("defSPD").innerHTML=Math.floor(defTrain[4]*raddish[4]*carrot[4]*pine*slots*resultArr[3]);
	document.getElementById("defBRN").innerHTML=Math.floor(defTrain[5]*raddish[5]*carrot[5]*pine*slots*resultArr[3]);
	document.getElementById("spdHP").innerHTML=Math.floor(spdTrain[0]*raddish[0]*carrot[0]*pine*slots*resultArr[4]);
	document.getElementById("spdMP").innerHTML=Math.floor(spdTrain[1]*raddish[1]*carrot[1]*pine*slots*resultArr[4]);
	document.getElementById("spdOFF").innerHTML=Math.floor(spdTrain[2]*raddish[2]*carrot[2]*pine*slots*resultArr[4]);
	document.getElementById("spdDEF").innerHTML=Math.floor(spdTrain[3]*raddish[3]*carrot[3]*pine*slots*resultArr[4]);
	document.getElementById("spdSPD").innerHTML=Math.floor(spdTrain[4]*raddish[4]*carrot[4]*pine*slots*resultArr[4]);
	document.getElementById("spdBRN").innerHTML=Math.floor(spdTrain[5]*raddish[5]*carrot[5]*pine*slots*resultArr[4]);
	document.getElementById("brnHP").innerHTML=Math.floor(brnTrain[0]*raddish[0]*carrot[0]*pine*slots*resultArr[5]);
	document.getElementById("brnMP").innerHTML=Math.floor(brnTrain[1]*raddish[1]*carrot[1]*pine*slots*resultArr[5]);
	document.getElementById("brnOFF").innerHTML=Math.floor(brnTrain[2]*raddish[2]*carrot[2]*pine*slots*resultArr[5]);
	document.getElementById("brnDEF").innerHTML=Math.floor(brnTrain[3]*raddish[3]*carrot[3]*pine*slots*resultArr[5]);
	document.getElementById("brnSPD").innerHTML=Math.floor(brnTrain[4]*raddish[4]*carrot[4]*pine*slots*resultArr[5]);
	document.getElementById("brnBRN").innerHTML=Math.floor(brnTrain[5]*raddish[5]*carrot[5]*pine*slots*resultArr[5]);
}
function getDigiDropDown(){
	var div='';
	var pathU='';
	div=div+"<div><label for='digimonSelect'>choose Digimon</label></div><div>";
	div=div+"<select onchange='listClicked(this.id)' name='Digimon' id='digimonSelect' class='digimon digimonList' >";
	for (var i=0;i<digiRaise.length;i++) {
		div=div+"<option class='digimon' style='background-image: url(";
		div=div+'"./img/'+digiRaise[i].Name+'.gif")';
		div=div+"'>"+digiRaise[i].Name+"</option>";
	}
	div=div+"</select></div>";
	document.getElementById('digiList').innerHTML='';
	document.getElementById('digiList').innerHTML=div;
}
function listClicked(id){
	var elt=document.getElementById(id);
	if (elt.selectedIndex!==-1){
		var obj=digiRaise.filter(function (obj){
		return obj.Name===elt.options[elt.selectedIndex].innerHTML;
		})[0];
		applyDigimon(obj);
	}
}
function applyDigimon(digi){
	getTrainingPref(digi.TrainingType);
	level=getLevel(digi.Level);
	getTrainingValues();
}
function getLevel(level){
	switch(level){
		case "FRESH":
			return 0.9;
		case "IN-TRAINING":
			return 0.9;
		case "ROOKIE":
			return 1;
		case "CHAMPION":
			return 1.1;
		case "ULTIMATE":
			return 1.2;
	}
}
function getTrainingPref(pref){
	switch(pref){
		case "NEUTRAL":
			trainingPreference=[1,1,1,1,1,1];
			break;
		case "HP_DEFENSE":
			trainingPreference=[1.1,1,0.9,1.1,0.9,1];
			break;
		case "MP_BRAINS":
			trainingPreference=[0.9,1.1,1,0.9,1,1.1];
			break;
		case "OFFENSE_SPEED":
			trainingPreference=[1,0.9,1.1,1,1.1,0.9];
			break;
		case "FILTH":
			trainingPreference=[0.8,0.8,0.8,0.8,0.8,0.8];
			break;
	}
}
function start(){
	var checkBoxes=document.getElementsByName('checkbox');
	for(var i=0;i<checkBoxes.length;i++){
		checkBoxes[i].checked=false;
	}
	getDigiDropDown();
	var obj=digiRaise.filter(function (obj){
		return obj.Name==="Agumon";
		})[0];
		applyDigimon(obj);
		document.getElementById('greenGym').checked=true;
		extra=true;
}
function classGet(name){
	return document.getElementsByClassName(name);
}
function idGet(id){
    return document.getElementById(id);
}
