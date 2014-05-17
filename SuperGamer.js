/*SuperGamer 6.0*/
/*Copyright Arjay07 2014*/

var mainGUI;

function mainMenu(){

	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

	ctx.runOnUiThread(new java.lang.Runnable(){

		run: function(){

			try{

				var editMode = false;

				var sgBtn = new android.widget.Button(ctx);
				sgButton.setText("SG");
				sgBtn.setTextColor(android.graphics.Color.GREEN);
				
				sgBtn.setOnLongClickListener(new android.view.View.onLongClickListener(){

					onLongClick: function(v){

						if(!editMode){

							editMode = true;

						}

						return true;

					}

				});

				sgBtn.setOnTouchListener(new android.view.View.onTouchListener(){

					onTouch: function(v, me){

						if(editMode){

							sgBtn.setX(me.getX());
							sgBtn.setY(me.getY());

						}

						if(me.getAction() == me.ACTION_UP){

							editMode = false;

						}

					}

				});

			}catch(e){



			}

		}

	});

}