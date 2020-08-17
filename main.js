const { app, BrowserWindow } = require('electron')
const lideresHogarController = require('./src/Controller/lideresHogarController.js')

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('src/index.html')
}

app.whenReady().then(createWindow)

//Codigo que hace las llamadas desde el hilo principal
//se comunica con el SO
/*
function createrHogar(Hogar){
  const controller = require('./src/Controller/hogaresController.js')
  controller.create(Hogar)
}
module.exports = {createHogar}*/