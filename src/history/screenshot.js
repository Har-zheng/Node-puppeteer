const puppeteer = require('puppeteer') // puppeteer
const { screenshot } = require('./config/default')
 var init =  async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://baidu.com/');
    await page.screenshot({
          path: `${screenshot}/${Date.now()}.png`
        });
    console.log(page.screenshot)
    await browser.close();
  };
  init()