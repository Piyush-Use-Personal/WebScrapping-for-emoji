const axios = require('axios');
const emojiHandler = require("./emoji");
const $ = require('cheerio');

const url = 'https://emoji-css.afeld.me/';

const scrapper = 'li .emoji';
const getScrappedData = () => {
    return new Promise(function (resolve, reject) {
        let json = [];
        axios.get(url)
            .then(html => {
                let scrdata = $('li.emoji', html.data);
                for(let i = 0; i < scrdata.length ; i++){
                    let currentObj = scrdata[i];
                    let text = currentObj.attribs['data-clipboard-text']
                    let engName = text.split('aria-label="')[1].split('"></i>')[0]
                    let caseName = text.split('class="em em-')[1].split('" aria-role=')[0]
                    let emoji = emojiHandler.findEmojiByName(caseName)
                    json.push(
                        {
                            replaceItem : text,
                            engName,
                            caseName,
                            emoji
                        }
                    )
                }
                resolve(json)
            })
            .catch(err => reject(err));
    })
}

module.exports = {
    getScrappedData

}