const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://theobot:theobot@cluster0.nj0fs2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_19_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA4LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzksXG4gICAgICAgIDY3LFxuICAgICAgICAxODEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTcyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjksXG4gICAgICAgIDI0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjIzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDY3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzksXG4gICAgICAgIDgxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk0LFxuICAgICAgICA3NixcbiAgICAgICAgNjQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDk2LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDM4LFxuICAgICAgICAzMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA2LFxuICAgICAgICA4NSxcbiAgICAgICAgODQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY3LFxuICAgICAgICA1NixcbiAgICAgICAgMzksXG4gICAgICAgIDQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM4LFxuICAgICAgICA1OCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxLFxuICAgICAgICAyNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxODUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDc5LFxuICAgICAgICA5NyxcbiAgICAgICAgNDksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAzMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTIsXG4gICAgICAgIDg0LFxuICAgICAgICAyMixcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM5LFxuICAgICAgICA3MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDM1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIktqcVFMZ3NJaXpKY0JNZmpkeUpYeEFrTkwzR2RlbktnWGVQbGFMNFlSUTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImx2bWh5WXFqUzBxWjJWbk0yT0Qxc3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzYzMTY1MjctZjVjYy00M2ZkLWE1ZTAtMGU4M2Q4OWNjYTQ3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0LFxuICAgICAgMjQxLFxuICAgICAgMjA0LFxuICAgICAgMTU0LFxuICAgICAgMTMzLFxuICAgICAgMTQ4LFxuICAgICAgMTg5LFxuICAgICAgMTY4LFxuICAgICAgMTc4LFxuICAgICAgMTk5LFxuICAgICAgMTIsXG4gICAgICAxNjUsXG4gICAgICAxLFxuICAgICAgNixcbiAgICAgIDU4LFxuICAgICAgMTM5LFxuICAgICAgNzQsXG4gICAgICAxNjgsXG4gICAgICAxMDIsXG4gICAgICAxMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExLFxuICAgICAgMjQwLFxuICAgICAgOTIsXG4gICAgICAyMDYsXG4gICAgICAxMjEsXG4gICAgICA5MCxcbiAgICAgIDE0MSxcbiAgICAgIDExMSxcbiAgICAgIDMyLFxuICAgICAgMTk3LFxuICAgICAgNDYsXG4gICAgICAxOTMsXG4gICAgICA0OSxcbiAgICAgIDE4MCxcbiAgICAgIDcxLFxuICAgICAgMTMwLFxuICAgICAgNzQsXG4gICAgICAxNzgsXG4gICAgICAxNjIsXG4gICAgICAxNjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJN1Y3ZlFGRU4rV3JyVUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInE2L3ZqNE1xWXB3R0JtU3NuUUJGSCtEeTVlTVJtYzM4OHdYOGRCWjBVeE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiM1pOdmlLaDF2UnNBMWZMcnlqRU03ZmZva2NDTWQ5NDRzMWFBbEs4SFowV0tBSmNTOU45QXUxbHdhNHFvVE5LRUo2ZHV4eVhYaDBYWXd4elBSMjJLRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOThCUFFLZlpTN2VyTnFKOUdyTkpmLy9taUVEWVJuT2x6a0dhcE51ckRjY1BPUyt1NlNpUkxtMGdoL1d6TTdVSVBuUE5BTGtyZE0valBPY3ZCOFJlalE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDIyMTU5ODM4OjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTA5NjA5NjY2NDc5MjM6MzVAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDIyMTU5ODM4OjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI1MTgzNzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNUFJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1QUi5qc29uIjogIntcImtleURhdGFcIjpcIkx3OFdZRmllc0RxNkI4WWV3UHQvaE1IcEFGd21kcmgrNTF1cEZKVEpRYlk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU4NzI0MzY2MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVBTLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRGViZGRPaXlJUEhxT0w5N053MndJT00zeEJacmRTbnlvYXFHcUh2RWlqaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTg3MjQzNjYyLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI1MTgzNzIyMDZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNUFQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzaklkVHdUZ2tqRjNZTTJjTmpEMnBFOFptclVuVzVsS1dkRExYdDJtczBrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1ODcyNDM2NjIsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsM119LFwidGltZXN0YW1wXCI6XCIxNzIyNTE4MzcyODQ0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
