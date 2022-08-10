var GenshinKit = require('@genshin-kit/core').GenshinKit;
const fs =require("fs");
var App = new GenshinKit();

let path = "../config/AccountData.json"
let playData = require('fs');
let plays = JSON.parse(playData.readFileSync(path));


var cookie = plays.cookie
var uid = plays.uid
App.loginWithCookie(cookie);
App.setServerType(plays.setServerType);


App.getDailyNote(uid).then(value=>{
    fs.writeFile("../temp/GenshinDailyNoteData.js","data=",err1=>{})
    fs.appendFile("../temp/GenshinDailyNoteData.js",JSON.stringify(value),err2=>{})
    fs.appendFile("../temp/GenshinDailyNoteData.js","",err3=>{})
    console.log("完成")
},console.error)
