const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+ssuhail:suhail@cluster0.cu90etc.mongodb.net/?retryWrites=true&w=majorityrv://"
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349078904723";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_04_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDcsXG4gICAgICAgIDM0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMixcbiAgICAgICAgMTcsXG4gICAgICAgIDgzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDksXG4gICAgICAgIDM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDc1LFxuICAgICAgICA1NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEzLFxuICAgICAgICAyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc4LFxuICAgICAgICA0MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2MSxcbiAgICAgICAgNTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMixcbiAgICAgICAgMTgyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTA0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzUsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDc0LFxuICAgICAgICA3NixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDM4LFxuICAgICAgICA2OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDksXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjIxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzksXG4gICAgICAgIDcxLFxuICAgICAgICAyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTczLFxuICAgICAgICA2NixcbiAgICAgICAgNzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAzMixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgODMsXG4gICAgICAgIDQ2LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNCxcbiAgICAgICAgODUsXG4gICAgICAgIDM2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0NixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk2LFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDYxLFxuICAgICAgICAxODksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMixcbiAgICAgICAgMjM0LFxuICAgICAgICA0NixcbiAgICAgICAgMjUzLFxuICAgICAgICA2LFxuICAgICAgICA4NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDk5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1LFxuICAgICAgICA5NyxcbiAgICAgICAgNDksXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDczLFxuICAgICAgICA5NSxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjJEWU1NTGNkdkJBYUcwL1g5WWdPVUk2OWNhMFhnbDhCeGY5eGhORWxmZTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImFaQzFfN0oxUzItcmJadVAyM0xfeWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTIwNGUwZDAtM2Y2OS00OTM4LTgwMDUtYjVmMmE5YWQxNjE0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOCxcbiAgICAgIDMxLFxuICAgICAgMixcbiAgICAgIDI1MyxcbiAgICAgIDE1NixcbiAgICAgIDMsXG4gICAgICA2LFxuICAgICAgMTk0LFxuICAgICAgNTksXG4gICAgICAyNTMsXG4gICAgICA0MyxcbiAgICAgIDIxMixcbiAgICAgIDIwMixcbiAgICAgIDgzLFxuICAgICAgMTU3LFxuICAgICAgMjA2LFxuICAgICAgMTA4LFxuICAgICAgNzMsXG4gICAgICA4OSxcbiAgICAgIDE5NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NCxcbiAgICAgIDQxLFxuICAgICAgMTQzLFxuICAgICAgODEsXG4gICAgICAyMTIsXG4gICAgICAxNzQsXG4gICAgICAxODUsXG4gICAgICA0NCxcbiAgICAgIDIyMyxcbiAgICAgIDEzMSxcbiAgICAgIDE4MCxcbiAgICAgIDIzNCxcbiAgICAgIDEwLFxuICAgICAgMTEwLFxuICAgICAgMTMzLFxuICAgICAgMjQ3LFxuICAgICAgMTg0LFxuICAgICAgMTM1LFxuICAgICAgMTYsXG4gICAgICA4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBSlNDRjNFQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA3ODkwNDcyMzoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdlI/wnZSy8J2UoPCdlKjwnZS2IPCdlIpcIixcbiAgICBcImxpZFwiOiBcIjIzODE0NzM4MDE4MzEwMDoxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNZWlqenNRN3ZtV3RBWVlBeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImVNZkI0REdHTmhHcWEwTHpFdTYyOHRLZ3drQ3J0TG5rY0NXRUFJaXlEaVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZm8wR0wvZThMaWlhRU9EYVo1SkhrY1pvVnI5NEdyMHBVaWhETmYyODA3UXRvanY4N2UyaHNaemtxNXlXaDFYS2Q4OGgwR3B1QUZqQ3JEa1JWTElCQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOFZ1bi9GWXZMWllqRnlaSENiSzUzVXpRUDRSd1Yya2t0OVNNSVpvNVphVUlNc1A0WkhrVnFEUVRuYnIrVzJoeTZiaHBFd3VYUUtQbTZoajNoSzVmaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA3ODkwNDcyMzoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAwNDA2OTBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Lucky G",


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
