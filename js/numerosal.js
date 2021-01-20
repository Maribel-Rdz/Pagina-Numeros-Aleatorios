//imagen 1
var numero= Math.floor(Math.random()*(9999-1000))+1000; 
var yu=document.getElementById('numero')
yu.textContent=numero;

//imagen 2
var num =(Math.random()*(9999-1000))+1000;
   af=num.toFixed(3)
var afs=document.getElementById('af')
afs.textContent=af;


//imagen 3
var tr=Math.floor(Math.random()*(65535-0))+0;
	qw=tr.toString(16);
	if(tr<16){
	qw="0" + "0" + "0" + qw
	}
	else if(tr<256){
	qw="0" + "0" + qw
	}
	else if(tr<4096){
	qw="0" + qw
	}
	else{
		qw=qw
	}
var ptr=document.getElementById('qw')
ptr.textContent=qw;


//imagen 4
var ad=Math.floor(Math.random()*(255-0))+0;
var ac=ad.toString(2);
if(ac<2){
ac="0" + "0" + "0" + "0" + "0" + "0" + "0" + ac
}
else if(ad<4){
ac="0" + "0" + "0" + "0" + "0" + "0" + ac
}
else if(ad<8){
ac="0" + "0" + "0" + "0" + "0" + ac
}
else if(ad<16){
ac="0" + "0" + "0" + "0" + ac
}
else if(ad<32){
ac="0" + "0" + "0" + ac
}
else if(ad<64){
ac="0" + "0" + ac
}
else if(ad<128){
ac="0" + ac
}
else{
	ac=ac
}
var pad=document.getElementById('ac')
pad.textContent=ac;
