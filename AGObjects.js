//objects

//The player object. It contains he/she atribute
var Player = {
	x: STARTING_X,
	y: STARTING_Y,
	hp: STARTING_HP,
	Inventory: []
};

var GameEvents = {
	//The events that can happend if an player manage to match an item

	//Cemetery
	eDigUpGrave: function()
	{
		confirm("I dig up the grave and see an old rotten corpse.");
		//remove grave from objects
		GameTiles.tCemetery.objects[GameTiles.tCemetery.objects.length()] = oCorpse; 
	},

	//Old house
	eOpenDoor: function()
	{
		confirm("The door easily opens.");
	}


};

var GameItems = {
	//Game item syntax
	//Item(name, description)

	//The items in the game is declared here
	
	//starting items
	iWatch: new tileObject("Watch", "It seems to have stopped."),
	iPicture: new tileObject("Picture", "It’s an elderly woman. Probably in her 30ths. She is also wearing an trench coat like mine. She seems to be in an city. Somehow she seems familiar? She looks a little bit sad. I see rain falling down in the background."),
	iNote:new tileObject("Note", "I read “When the time is right all will be revealed”."),

	//cemetery
	iShovel: new Item("Shovel", "It’s an old rusty shovel. Seems to hold just fine.")


};

var GameObjects = {
	//Tile object syntax
	//tileObject(name, description, itemMatch, objectEvent)

	//The game objects. Can be a house or an grave.

	//cemetary
	oGraves: new tileObject("Graves", "There is a lot of graves around here, i see an old shovel", GameItems.iShovel, null),
	oCorpse: new tileObject("Corpse", "It’s rotten and smells awful. ", null, null),

	//old house
	oDoor: new tileObject("Door", "The look on the door seems to be broken", null, GameEvents.eOpenDoor)

};

var GameTiles = {
	//tiles object syntax
	//tileObject(name, description, closerDescription, itemMatch, objectEvent)

	//The tiles that the player can be on

	tCemetery: new Tile("Cemetery", "I am in an old cemetery. It is really spoky here!", "There is alot of graves around here, i see an old shovel",
	[GameItems.iShovel], [GameObjects.oGraves]),

	tOldHouse: new Tile("Old House", "I see an old house. The windows are broken and the walls are cracked.",
	"The lock on the door seems to be broken",
	[null], [GameObjects.oDoor])

	



};