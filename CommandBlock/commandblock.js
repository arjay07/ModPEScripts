/* Command Block Mod */
/**
* Copyright Arjay07
* Version 1.0
* 
* This mod adds command blocks into the game while
* it uses in-game redstone logic.
*
*/

var commandblock = 137;

function init(){

	clientMessage("Command Block Mod");

	//Command Block
    Block.defineBlock(commandblock, "Command Block", ["command_block", 0], 1, false, 0);
    Block.setRedstoneConsumer(commandblock, true);
    Block.setDestroyTime(commandblock, 0.3);
    Block.setExplosionResistance(commandblock, 18000000);

    Player.addItemInventory(commandblock, 64, 0);

}

function newLevel(){

	init();

}

function redstoneUpdateHook(x, y, z, newCurrent, idk, blockId, blockData){

	if(blockId == 137) print("lel");

}
