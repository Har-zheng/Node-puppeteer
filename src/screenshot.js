const puppeteer = require('puppeteer') // puppeteer
const { mn } = require('./config/default')
const srcToImg = require('./hleper/srcToimg')
 var init =  async () => {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto('https://cn.bing.com/images');
    console.log('goto https://cn.bing.com/images')
    await page.setViewport({
      width: 1920,
      height: 1080
    })
    await page.focus('#sb_form_q')
    console.log('#kw')

    await page.keyboard.sendCharacter('狗')

    await page.click('#sb_form_go')

    console.log('.s_btn')
    page.on('load' , async ()=> {
      console.log('page loading done, start fetch....')
      const srcs = await page.evaluate(() => {
        const image = document.querySelectorAll('img.mimg')
        return Array.prototype.map.call(image, img => img.src)
      })
      console.log(`get ${ srcs.length } imagess, start download`)
      srcs.forEach(async src => {
       await srcToImg(src, mn)
      });
      await browser.close();
    })

  };
  init()