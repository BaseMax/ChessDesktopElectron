/**
*
* @Name : ChessDesktop/main.js
* @Version : 1.0
* @Programmer : Max
- @Date : 2019-05-23
* @Released under : https://github.com/BaseMax/ChessDesktop/blob/master/LICENSE
* @Repository : https://github.com/BaseMax/ChessDesktop
*
**/
const { app, BrowserWindow } = require('electron')

function initWindow () {
	let window = new BrowserWindow({
		width: 428,
		height: 428,
		// frame: false,
		// minimizable: true,
		// maximizable: false,
		// titleBarStyle: 'hiddenInset',
		webPreferences: {
			nodeIntegration: true
		}
	})
	window.setMenuBarVisibility(false)
	window.loadFile('index.html')
}

app.on('ready', initWindow)
