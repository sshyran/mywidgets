include('lib.js');

include('Magnet.js');
include('WordMagnet.js');


// clean up any existing entries in the tmp directory
function cacheClean() {
	var i, d = filesystem.getDirectoryContents(system.widgetDataFolder + '/tmp');
	for (i = 0; i < d.length; i++) {
		filesystem.remove(system.widgetDataFolder + '/tmp/' + d[i]);
	}
}


function resizeToScreen(wn) {
	/*
	wn.hOffset = screen.availLeft;
	wn.vOffset = screen.availTop;
	wn.width = screen.availWidth;
	wn.height = screen.availHeight;
	*/
	
	wn.hOffset = 0;
	wn.vOffset = 0;
	wn.width = screen.width;
	wn.height = screen.height;
	
	wn.locked = true;
}


cacheClean();
var wn;

var deg = Math.PI / 180;


wn = widget.getElementById('mainWindow');
resizeToScreen(wn);

filesystem.createDirectory(system.widgetDataFolder + '/tmp');


Magnet.fromXML(filesystem.readFile('DefaultMagnets.xml'));