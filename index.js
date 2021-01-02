const scrapper = require("./webScrapper");
const fs = require('fs');
const rawEmojis = require('./notPresentEmojis')
scrapper
  .getScrappedData()
  .then((data) => {
      fs.writeFile('./emoji.json', JSON.stringify([...data, ...rawEmojis]), function (err) {
          if(err){
              console.log(err)
          } 
          console.log('done!')
      })
  })
  .catch((err) => console.log(err));
