const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_32_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODksXG4gICAgICAgIDc1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1LFxuICAgICAgICA5NixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNixcbiAgICAgICAgNTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDczLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI5LFxuICAgICAgICAyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICA1NixcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDg0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTksXG4gICAgICAgIDYxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODMsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMixcbiAgICAgICAgMTQwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNixcbiAgICAgICAgNzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYzLFxuICAgICAgICA5MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzksXG4gICAgICAgIDg3LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDM1LFxuICAgICAgICA0OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgzLFxuICAgICAgICA0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDU0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI2LFxuICAgICAgICAzOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgOTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODIsXG4gICAgICAgIDUsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4LFxuICAgICAgICA2NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAzOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDIzMixcbiAgICAgICAgNixcbiAgICAgICAgMzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMxLFxuICAgICAgICA3MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE3LFxuICAgICAgICA1MyxcbiAgICAgICAgNDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNixcbiAgICAgICAgNjIsXG4gICAgICAgIDc5LFxuICAgICAgICA0NCxcbiAgICAgICAgNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODMsXG4gICAgICAgIDMsXG4gICAgICAgIDUzLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiU3JscnZIUzVhemNaaFQyaVpkRlNrWDlDM0JoOFNRUXlReGxqZnJtUXpnUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDIyMTU5ODM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJENUY5NzA3QzU2QUE2RTMzNjcxQzRBQzUzNjQ4RTI4Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAyNzYzNTVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDIyMTU5ODM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4N0I3QTEzOEZBM0M1N0VEREU3Mzc3RkMwNzM5OTE5NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAyNzYzNTVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUHpEbDhvQm1SVXl4a18wM2Nsa2tBQVwiLFxuICBcInBob25lSWRcIjogXCI0ZWFmYjFjNS04MmRmLTQ3YmEtODkxZC1lOGYzZWI4Y2ExMDRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNixcbiAgICAgIDc1LFxuICAgICAgMTA2LFxuICAgICAgMjQsXG4gICAgICAxOTAsXG4gICAgICAxOTksXG4gICAgICA3LFxuICAgICAgMTIyLFxuICAgICAgMjI3LFxuICAgICAgNzEsXG4gICAgICAxMTEsXG4gICAgICAyMzAsXG4gICAgICAxNzgsXG4gICAgICAxMDksXG4gICAgICAyMzIsXG4gICAgICAxNzksXG4gICAgICAxNTksXG4gICAgICAyNTUsXG4gICAgICA1NCxcbiAgICAgIDcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NSxcbiAgICAgIDg5LFxuICAgICAgMTY4LFxuICAgICAgOTMsXG4gICAgICAyNDUsXG4gICAgICA5OSxcbiAgICAgIDE1MyxcbiAgICAgIDExNyxcbiAgICAgIDE3OCxcbiAgICAgIDIzNixcbiAgICAgIDc1LFxuICAgICAgMTM5LFxuICAgICAgMzIsXG4gICAgICAxMDcsXG4gICAgICAyMTksXG4gICAgICA0MixcbiAgICAgIDE0LFxuICAgICAgMTA4LFxuICAgICAgMjMsXG4gICAgICAxNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJM1Y3ZlFGRVB1cXBiUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInE2L3ZqNE1xWXB3R0JtU3NuUUJGSCtEeTVlTVJtYzM4OHdYOGRCWjBVeE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMFVFdWhuSndpbko4TXM1TUZPdjBpN1NFL3JIMHNWQXpwSTVXQW9obEhHVktQbWhacU1nUDUxUm9Wd2Z4YjBHNUQ4V0hPVjVTc1lJMFAwd0JPdVpoQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVVR1RUxOUVgrbVo5czVpWnVwWU8vK01JWnIvSHdDell3Nm1sb09LYmIwaG9XNWhqYmxZYk9TcW51a0IyWW4vWVMzT3o4aVBiOVdIOUVDeTVXZHdNQ1E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDIyMTU5ODM4OjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTA5NjA5NjY2NDc5MjM6MjhAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiVGVtaSBUdW5kdW5cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwMjIxNTk4Mzg6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI3NjM1MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpKT1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSkpOLmpzb24iOiAie1wia2V5RGF0YVwiOlwic2o0WjVQdE5Pdk1PTk5mWGQ2d1o1T3RvUCtYU0cvMEk4SHdDc1ZpS3RRTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTg3MjQzNjYwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAxNzIxNzIxMzlcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKSk8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJaZVJNdVNYSURuMkJDNFpObFRNN1V1akxoZ0hnd3Rjb05MMXdDN1VLbkFRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1ODcyNDM2NjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAxNzIzNzk2MzFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKSlAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxUXEvVmlSSTBRNEpvRWQ4NjJVVzZqbmRQSGQ4Q21iYUUzNFlTYW13aUprPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1ODcyNDM2NjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDE3NDY5NDc4NFwifSIKfQ=="  // PUT your SESSION_ID 


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
