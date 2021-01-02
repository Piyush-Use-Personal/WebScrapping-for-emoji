const emoji = require("node-emoji");
const findEmoji = (e) => {
  return emoji.find(e);
};
const findEmojiByName = (name) => {
    return emoji.get(name)
}
module.exports = {
  findEmoji,findEmojiByName
};
