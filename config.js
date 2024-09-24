const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "MqcUWDDb#A9jbwX_uUYO0-d2qMJtIhM1pVVVByP5KaKO_JnsWXIg",
MONGODB: process.env.MONGODB || "",//enter mongo db url
};
