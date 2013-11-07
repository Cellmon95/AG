//controller


// The Player decide funktion is the backbone of the game. It is with this 
// Funktion the players can decide what to do
function playerDecide()
{
	//function variables
	var userInput = prompt("What should i do?");

	//split the sentece to an array
	userInput = userInput.split(" ");

	//check for keywords
	switch(userInput[0].toUpperCase())
	{
		case "GO":
		{
			//check where the play whants to go
			switch(userInput[1].toUpperCase())
			{
				case "NORTH":
				{
					Player.y += -1;
					describeTile();	
				}
				break;

				case "SOUTH":
				{
					Player.y += 1;
					describeTile();	
				}
				break;

				case "WEST":
				{
					Player.x += -1;
					describeTile();
				}
				break;

				case "EAST":
				{
					Player.x += 1;
					describeTile();
				}
				break;
			}
			break;
		}
		break;

		case "PICK":
		{
			if(userInput[1].toUpperCase() === "UP")
			{
				//check wich tile the player is at
				var playerTile = map[Player.x][Player.y];
				
				//make an variable to see if the player found the item
				var foundItem = false;

				//loop the tile to see if the item the player whants exists
				for (var i = 0; i < Tiles[playerTile].items.length; i++) 
				{
					if (Tiles[playerTile].items[i] != null)
					{
						if (userInput[2].toUpperCase() === Tiles[playerTile].items[i].name.toUpperCase())
						{
							//put in the item in to the players inventory
							Player.Inventory[Player.Inventory.length] = Tiles[playerTile].items[i];
							
							//output an message
							confirm("I pick the " + Tiles[playerTile].items[i].name + " up.");

							//remove the item from tile
							removeFromArray(Tiles[playerTile].items, i);

							foundItem = true;
						}
					}
				};	

				//see if the item didn't exist. If so print a message
				if (!foundItem)
				{
					confirm("There is no " + userInput[2] + " here.")
				};
				console.log(Tiles[playerTile].items);
			}
		}
		break;

		case "USE":
		{
			//check if the player wrote something else
			if (userInput[1])
			{
				//Loop the player inventory to se if he/she have the item
				for (var i = 0; i < Player.Inventory.length; i++) 
				{
					if (Player.Inventory[i].name.toUpperCase() === userInput[1].toUpperCase()) 
					{
						//check if the player wrote on
						if (userInput[2] && userInput[2].toUpperCase() === "ON") 
						{
							//check wich tile the player is at
							var playerTile = map[Player.x][Player.y];

							//check if the object is on the tile
							for (var z = 0; z < Tiles[playerTile].objects.length; z++) 
							{
								if (userInput[3].toUpperCase() === Tiles[playerTile].objects[z].name.toUpperCase()) 
								{
									//Check if the item matches the object itemMatch and if so play the object event
									if (Player.Inventory[i].name.toUpperCase() === Tiles[playerTile].objects[z].itemMatch.toUpperCase()) 
									{
										Tiles[playerTile].objects[z].objectEvent();
										break;
									}

									else
									{
										confirm("I can't use " + Player.Inventory[i].name + " on " + Tiles[playerTile].objects[i].name);
									}
								}

								else
								{
									confirm("There is no " + userInput[3]);
								}
							};
						}

						else
						{
							confirm("use " + Player.Inventory[i].name + " on what?");
						}
					}
				}
			}

			else
			{
				confirm("Use what?");
			}
		}
		break;

		case "GIVE":
		{

		}
		break;

		case "HELP":
		{
			confirm("instructions to come");
		}
		break;

		case "LOOK":
		{
			//check wich tile the player is at
			var playerTile = map[Player.x][Player.y];

			//check if player choes at or wrote something at all
			if(userInput[1] && userInput[1].toUpperCase() === "AT")
			{
				//make an variable to see if the player found the item
				var foundObject = false;

				//check if the object is in the tile
				for (var i = 0; i < Tiles[playerTile].objects.length; i++) 
				{
						if (userInput[2].toUpperCase() === Tiles[playerTile].objects[i].name.toUpperCase())
						{
							//output an message
							confirm(Tiles[playerTile].objects[i].description);
							foundObject = true;
						}
				};	

				if (!foundObject)
				{
					confirm("There is no " + userInput[2] + " here.")
				};
			}

			else if (userInput[1] && userInput[1].toUpperCase() === "AROUND") 
			{
				console.log(Tiles[playerTile]);
				confirm(Tiles[playerTile].closerDescription);
			}

			else
			{
				confirm("You must point me into a direction");
			}
		}
		break;

		case "INVENTORY":
		{
			//the message var
			var strInventory = " ";
			//strInventory += Player.Inventory[0].name;
			//confirm(strInventory);
			
			//input the inventory names inside strInventory
			for (var i = 0; i < Player.Inventory.length; i++)
			{
				strInventory += Player.Inventory[i].name + " ";
			};
			//print out the inventory
			confirm(strInventory);
		}
		break;

		case "QUIT":
		{
			gameMode = QUIT;
		}
		break;


		default:
		{
			confirm("I don't know that?");
		}
	}
}