const telegramCheckingAuthorization = require('telegram-checking-authorization');
let token = "631428444:AAGB1Ot057LQ-tu-EgQ2BREgXw9m3_wfiuU";
let jdata = '{"id":318302581,"first_name":"Alex","last_name":"Ivanov","username":"zuodion","photo_url":"https://t.me/i/userpic/320/zuodion.jpg","auth_date":1538475576,"hash":"f0bc332a84532dd96c20f306520911557a7d7273a692a96f3e03a47f48ccbdd1"}';
let data = JSON.parse(jdata);
if(telegramCheckingAuthorization(data, token)) console.log('Data is from telegram!');
if(!telegramCheckingAuthorization(data, token)) console.log('Data is NOT from telegram :(')
