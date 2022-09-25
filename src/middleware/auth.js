const owner = (msg) => {
    return msg.author.id == msg.guild.ownerId;
}

const admin = (msg) => {
    const admins = require('../database/whiteList.json');
    const exist = admins.find(el => el.discord_user_id == msg.author.id)
    if(!exist){
        return false
    }
    return true
}

module.exports = {
    owner,
    admin
}