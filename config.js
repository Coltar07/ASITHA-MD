const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "zKJziCqI#eAm4W-TnUb98x4OnbzFdm0FM1AsjVEe2oRJXYbB0exo",
MONGODB: process.env.MONGODB || "mongodb+srv://Coltar07:<db_password>@coltar07.diwgx.mongodb.net/",//enter mongo db url
};
