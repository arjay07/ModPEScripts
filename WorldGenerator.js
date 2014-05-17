/*World Generator*/

var HILL = [1, 2, 3];

function getSurface(x, y){

	var y = 0;

	for(var i = 0; i <= 128; i++){
	
		if(Level.getTile(x, i, z) == 0){
		
			y = i;
			break;
		
		}
	
	}
	
	return y;

}

function layer(x1, z1, h, d, id, data){

	for(var x = x1; x <= x1 + d; x++)
		for(var z = z1; z <= z1 + w; z++){
		
			var y = getSurface(x, z);
			
			Level.setTile(x, y, z, id, data);
		
		}

}

function fillBelow(x, y, z, h, id, data){

	for(var i = 0; i <= h; i++){
	
		if(Level.getTile(x, y - h, z) == 0){
		
			Level.setTile(x, y - h, z, id, data);
		
		}
	
	}

}

function createMaterialStructure(x, y, z, h, w, d, m, mdat){

	var cubeX = [x, x+1, x+2];
	var cubeY = [y, y+1, y+2];
	var cubeZ = [z, z+1, z+2];
	var amount = Math.floor((Math.random()*10));
	
	for(var i = 0; i < 3; i++){
	
		
	
	}

}

function spawnHill(x, y, z){



}