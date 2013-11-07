//model

function removeFromArray(array, index)
{
	for(var idx=index; idx<array.length;idx++)
	{
		array[idx] = array[idx+1];
	}
	return array;
}

//game loop

while(true)
{
	//declare a variable that enables the player to quit
	var quit = false;

	switch(gameMode)
	{

		case INTRO:
		{
			printIntro();
			describeTile();
			gameMode = PLAYING;
		}
		break;

		case PLAYING:
		{
			playerDecide();
		}
		break;

		case QUIT:
		{
			confirm("Okej goodbye.")
			quit = true;
		}
		break;
	}
	if (quit) {break;};
}

function movePartOfArrayToBack(n, a)
{
	//declare variables
	var space;

	//
	for (var i = a.length - 1; i >= n; i--) {
		
		space = a[a.length - 1];
		a.pop();
		a.unshift(space);
	};
	console.log(a);
	return a;
}