// BotBlocks
// By Arjay07

// Program Blocks as if they were robots

function initMod(){
	
	Block.defineBlock(BotBlock.ID, BotBlock.NAME, BotBlock.TEXTURES, 1, false, 0);
	Block.setDestroyTime(BotBlock.ID, BotBlock.DESTROYTIME);

}

function BotBlock(x, y, z){

	this.x = x;
	this.y = y;
	this.z = z;
	this.script = "";
	this.run = function(){
	
		eval(this.script);
	
	};

}

BotBlock.ID = 137;
BotBlock.NAME = "BotBlock";
BotBlock.TEXTURES = ["command_block", 0];
BotBlock.DESTROYTIME = 0.8;
