const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send('Access denied. No token provided');

    try{
        req.user = jwt.verify(token, config.get('jwtPrivateKey'));//проверяет токен из headers и приватный ключ И возвращает юзера
        next();//пропуск дальше
    } catch (e) {
    res.status(400).send('Invalid token.');
    }
};