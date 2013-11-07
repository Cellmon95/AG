//constructors / Classes

function Tile(name, description, closerDescription, items, objects) 
{
	//seting standard value on parameter
	items = items || 0,
	objects = objects || 0, 

	this.closerDescription = closerDescription,
	this.items = items,
	this.description = description,
	this.objects = objects
};

function Item(name, description)
{
	this.name = name,
	this.description = description
};

function tileObject(name, description, itemMatch, objectEvent)
{
	this.name = name,
	this.description = description,
	this.itemMatch = itemMatch,
	this.objectEvent = objectEvent
};