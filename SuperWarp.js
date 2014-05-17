/*SuperWarp*/
/*Copyright Arjay07 2014*/

var IO = java.io;
var File = IO.File;
var FileOutputStream = IO.FileOutputStream;
var FileReader = IO.FileReader;
var BufferedReader = IO.BufferedReader;

var Runnable = java.lang.Runnable;

var SDCARD = android.os.Environment.getExternalStorageDirectory();
var WORLDS = new File(SDCARD, "games/com.mojang/minecraftWorlds");

function Warp(x, y, z){

this.getX = function(){
	
return x;
	
}
	
this.getY = function(){
	
return y;
	
}
	
this.getZ = function(){
	
return z;
	
}

}

function readFile(file){

var str;
var data = new java.lang.StringBuilder();
var br = new BufferedReader(new FileReader(file));
	
while((str = br.readLine()) != null){
	
data.append(str);
	
}
	
return data.toString();

}

function createWarp(x, y, z){

var warp = new Warp(x, y, z);
	
}

function deleteWarp(){


}