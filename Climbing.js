/*Climbing Mod*/

var ls;

function modTick(){

	var blocks=1;
	var x=Player.getX();
	var z=Player.getZ();
	var yaw=Entity.getYaw(Player.getEntity());
	var deltaX=Math.sin(yaw)*blocks;
	var deltaZ=Math.cos(yaw)*blocks;
	var block=getTile(Math.round(x+deltaX),Math.round(Player.getY()),Math.round(z+deltaZ));
	
	if(ls == 1){
	
		ls=0;
		ModPE.saveData("LS", ls);
		
		if(block == 65){
		
			Level.setTile(Math.round(x+deltaX),Math.round(Player.getY()),Math.round(z+deltaZ), 0);
		
		}
		
	}

	
	if(block == 0){
	
		Level.setTile(Math.round(x+deltaX),Math.round(Player.getY()),Math.round(z+deltaZ), 65);
		ls = 1;
		ModPE.saveData("LS", ls);
	
	}
	
}

function newLevel(){

	ls = ModPE.readData("LS");

}