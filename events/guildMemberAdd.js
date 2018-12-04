const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

module.exports = member => {
    let username = member.user.username;
    member.sendMessage('');
};