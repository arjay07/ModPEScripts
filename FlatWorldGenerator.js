var speed = 10; //10 BPT (Blocks Per Tick)
var material = 2; //The block the generator will use
var posx = 0; //The positions will change
var posy = 1;
var posz = 0;
var finished = false;
var messagesent = false;

function setSpeed(s){

	speed = s;

}

function setMaterial(m){

	material = m;

}

function modTick(){

	if(!finished){
	
			if(posy <= 4){
	
				Level.setTile(posx, posy, posz, 3);
	
			} else if(posy == 5){
	
				Level.setTile(posx, posy, posz, 2);
	
			} else {
	
				Level.setTile(posx, posy, posz, 0);
	
			}
	
			posx++;
			posy++;
			posz++;
			
			if(posx == 256 && posy == 128 && posz == 256){
			
				finished = true;
				posx = 0;
				posz = 0;
				posy = 1;
			
			}
	}
	
	if(finished && !messagesent){
	
		clientMessage("Finished");
		messagesent = true;
	
	}

}