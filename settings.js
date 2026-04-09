//----------------------[ BOT SETTINGS ]----------------------// 

// @project_name : 00u43-XMD 
// @author : Deniz 
// @telegram : http://t.me/00u43
// @github : chrisbydeniz
// @whatsapp : +33753191305

//----------------------[ 00u43-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || '' 
//Enter your 00u43-XMD session id here; must start with 00U43~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || '00u43-Bot' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '33753191305' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['33753191305'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Deniz' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "00u43" 

//--------------[ COUNTRY TIMEZONE ]------------//

global.timezones = 'Europe/Paris';  // Set this to you timezone

//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Deniz" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";

//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@00u43"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©00u43 byDeniz"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©00u43 byDeniz', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ 00u43-XMD ]----------------------//
