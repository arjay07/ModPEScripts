// BotBlocks
// By Arjay07

// Program Blocks as if they were robots

function BotBlock(x, y, z){

	this.x = x;
	this.y = y;
	this.z = z;
	this.script = "";
	this.run = function(){
	
		eval(this.script);
	
	};

}
