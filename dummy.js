const telegramCheckingAuthorization = require('telegram-checking-authorization');
let token = "631428444:AAGB1Ot057LQ-tu-EgQ2BREgXw9m3_wfiuU";
let data = {"id":318302581,"first_name":"Alex","last_name":"Ivanov","username":"zuodion","photo_url":"https://t.me/i/userpic/320/zuodion.jpg","auth_date":1538477649,"hash":"f3e6e2765c9b45ad6478674075c676511bd19008def7dbdef4a47d497052a22c"};
// let data = JSON.parse(jdata);
if(telegramCheckingAuthorization(data, token)) console.log('Data is from telegram!');
if(!telegramCheckingAuthorization(data, token)) console.log('Data is NOT from telegram :(')
