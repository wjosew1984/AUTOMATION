const PoHeaderMenu = require ('../pageobjects/poHeaderMenu');
const PoPageFooter = require('../pageobjects/poPageFooter');

describe('Header visibilty', ()=>{
    it('Header must to be displayed in viewport after page scrolling', async()=>{
        await browser.url('https://vitraindumentaria.com.ar/');
        await $(PoHeaderMenu.locators.acceptCookies).click();
        await $(PoHeaderMenu.locators.header).waitForDisplayed();
        await $(PoPageFooter.locators.footer).scrollIntoView({block: 'center', inline: 'center'});
        await browser.pause(3000);
        await expect($(PoHeaderMenu.locators.header)).toBeDisplayedInViewport();
    })
})