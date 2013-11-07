//view

function describeTile()
{
	//function variables
	tileType = map[Player.x][Player.y];

	//print out description of tile
	confirm(Tiles[tileType].description);
}

function printIntro()
{
	//It's the intro
	
	confirm("I wake up.");
	confirm("When i’m looking around i seem find myself in an cemetery.");
	confirm("I try to move but i am meet with an awful headache.");
	confirm("I take my hand to toward my head and i'm noticing a scar.");
	confirm("It is fresh. i still feel the wires surrounding it.");
	confirm("When i stand up i noticed that i am wearing an old trench coat.");
	confirm("It is brown and made out of leather. I search the pockets.");
	confirm("I find an old watch a picture and a note.");
	confirm("I read the note “When the time is right all will be revealed”.");
	confirm("And when i look at the picture i see a woman.");
	confirm("Where am i?");
	confirm("Who am i?");
}