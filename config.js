const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=7qZEnaYY#MFc9zOoakEA-J2vBoc4QYRVr1V2fDanyFKxJ42sQH9o"
MONGODB: process.env.MONGODB || "mongodb+srv://Coltar07:<db_password>@coltar07.diwgx.mongodb.net//",//enter mongo db url
};
