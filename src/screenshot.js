// const puppeteer = require('puppeteer') // puppeteer
const { screenshot } = require('./config/default')
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http:www.baidu.com');
    await page.screenshot({
          page: `${screenshot}/${Date.now()}.png`
        });
  
    await browser.close();
  })();