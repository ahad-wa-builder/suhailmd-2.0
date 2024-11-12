const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "true" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "true" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_02_11_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTAsXG4gICAgICAgIDUxLFxuICAgICAgICA4MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTI1LFxuICAgICAgICA1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzQsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjU0LFxuICAgICAgICAyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTksXG4gICAgICAgIDU4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjksXG4gICAgICAgIDUyLFxuICAgICAgICAzNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4LFxuICAgICAgICA3OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDM5LFxuICAgICAgICA3NixcbiAgICAgICAgOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTczLFxuICAgICAgICAxODgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDU0LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg5LFxuICAgICAgICA0NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDM4LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDksXG4gICAgICAgIDI4LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI2LFxuICAgICAgICA1MixcbiAgICAgICAgMjM5LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0LFxuICAgICAgICA4MixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQxLFxuICAgICAgICAzNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjksXG4gICAgICAgIDgxLFxuICAgICAgICA2MixcbiAgICAgICAgMjAzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTczLFxuICAgICAgICA3NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTksXG4gICAgICAgIDI4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMixcbiAgICAgICAgMjQyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjI1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInhvUEU1aHVZUTgwRk9MQ2ZNOG1BeDUvUVc2U0dwdzhCc3ExblpXRml6QzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDcxNzA5NDEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0OTI4RTRBMjMwMjgxN0ZEMzkzNTE5NjU2Q0U4OTUwQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzE0MjczMjBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0NzE3MDk0MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE4OEE1RkJCMTQ5QUI4REIyQjVERjMzMzA2N0UwQkE5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTQyNzMyMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQ3MTcwOTQxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjRBNDZBOTgwMTJBRDdCMkExRDMwRTE5RDIwRkVBQkVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxNDI3MzI0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIks5dGZnUEtBU2dLZEZMM1NEanhZX0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmIwYTAyZGItMzgzOS00Mzg3LWJjODAtZDZlYjgxNDk2NWY0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOSxcbiAgICAgIDQwLFxuICAgICAgMTkwLFxuICAgICAgMTAzLFxuICAgICAgMTU0LFxuICAgICAgOSxcbiAgICAgIDE0NyxcbiAgICAgIDQ0LFxuICAgICAgNDUsXG4gICAgICA2OSxcbiAgICAgIDE1NixcbiAgICAgIDc1LFxuICAgICAgMTc2LFxuICAgICAgMTkxLFxuICAgICAgMjEsXG4gICAgICAyNyxcbiAgICAgIDE1MCxcbiAgICAgIDk5LFxuICAgICAgMTEwLFxuICAgICAgMTE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNCxcbiAgICAgIDUsXG4gICAgICAzNyxcbiAgICAgIDg3LFxuICAgICAgMTI4LFxuICAgICAgMTQ0LFxuICAgICAgNSxcbiAgICAgIDE2MSxcbiAgICAgIDEwMCxcbiAgICAgIDY3LFxuICAgICAgNDEsXG4gICAgICAyNyxcbiAgICAgIDcyLFxuICAgICAgMTEwLFxuICAgICAgMTMzLFxuICAgICAgMTgsXG4gICAgICAxNTYsXG4gICAgICAyMjMsXG4gICAgICAyMTQsXG4gICAgICAyMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTUJXRFdLMVpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQ3MTcwOTQxMjoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkp/wnZC88J2SsfCdkLjwnZC/IPCdkqvwnZC1IDY1IPCdkqbwnZC88J2SqfCdkqIg8J2SovCdkpzwnZGA8J2QvPCdkqnwnZKiXCIsXG4gICAgXCJsaWRcIjogXCI4MDU2MDkxOTY3OTE3OToxOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJUDh4OUFDRVBIM3pia0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlpOTWFtUzVDbnQyOTdqS0ZZekd1TW55QjdqS1JLYzZGZGxSS2Z6M2R4SDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYlhXb0JSZ1BpU05aZlQxSU1rQlZoVHdPVXhCbmNrc0ltUlBER0ZER1p4SHFjdWcrS3JsM3pabzdVb0lxaS9zSHZRSDVDWmRlV09YRVoyb01YVm14RGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRXpiWVMra052WUlESktjU2VNWURCL1haeWxGVnUybHVzckhFeUoxU29rT28rVWhFVUVkZTdWN1ZWZWpkZzlZVTJnVjZXS1NybTFlMlp5Zy8vS0pjalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDcxNzA5NDEyOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxNDI3MzE3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQjd5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCN3kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoMDJvWE5tNGwxWGZPSGVhc290bkFxWWpXUDBUcHpKQk16eE1xWmNuL1lJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcwNTgyMjIxMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMxNDI3MTIxMTkxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "Aztec_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
