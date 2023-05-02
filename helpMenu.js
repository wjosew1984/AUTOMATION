const PoHeaderMenu =require ('../pageobjects/poHeaderMenu');
const PoHeaderHelpMenu=require('../pageobjects/poHeaderHelpMenu');

describe('Help Menu actions', ()=>{
    it.only('Hover on Help menu should shows phone number and e-mail adress', async()=>{
        await browser.url('https://vitraindumentaria.com.ar/');
        //await browser.maximizeWindow();
        await $(PoHeaderMenu.locators.acceptCookies).click();
        await $(PoHeaderHelpMenu.locators.helpMenu).waitForDisplayed();
        await $(PoHeaderHelpMenu.locators.helpMenu).moveTo();
        await expect($(PoHeaderHelpMenu.locators.helpCellNum)).toBeDisplayed();
        await browser.pause(3000); 
        await expect ($(PoHeaderHelpMenu.locators.helpCellNum)).toHaveText('5491168391120');
        await expect($(PoHeaderHelpMenu.locators.helpMailto)).toBeDisplayed();
        await expect($(PoHeaderHelpMenu.locators.helpMailto)).toHaveText('vitraindumentaria@gmail.com');
    })
});