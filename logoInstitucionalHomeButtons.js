const PoHeaderMenu = require('../pageobjects/poHeaderMenu');
const PoHeaderLogoInstitucionalHome= require('../pageobjects/poHeaderLogoInstitucionalHome');
const PoHeaderProductsMenu= require('../pageobjects/poHeaderProductsMenu');

 describe ('logo and home button must to redirect to web home', ()=>{
    it('logo must to redirect to web home', async()=>{
        await browser.url('https://vitraindumentaria.com.ar/');
        //await browser.maximizeWindow();
        await $(PoHeaderMenu.locators.acceptCookies).click();
        await $(PoHeaderLogoInstitucionalHome.locators.homeLogo).waitForDisplayed();
        await $(PoHeaderProductsMenu.locators.productsButton).click();
        await $(PoHeaderLogoInstitucionalHome.locators.homeLogo).click();
        await expect (browser).toHaveUrl('https://vitraindumentaria.com.ar/');
    })
    it('home button must to redirect to web home', async()=>{
        await $(PoHeaderLogoInstitucionalHome.locators.homeButton).waitForDisplayed();
        await $(PoHeaderProductsMenu.locators.productsButton).click();
        await $(PoHeaderLogoInstitucionalHome.locators.homeButton).click();
        await expect(browser).toHaveUrl('https://vitraindumentaria.com.ar/');
    })
    it ('Institucional button must to redirect to web home', async()=>{
        await $(PoHeaderLogoInstitucionalHome.locators.institutionalButton).waitForDisplayed();
        await $(PoHeaderProductsMenu.locators.productsButton).click();
        await $(PoHeaderLogoInstitucionalHome.locators.institutionalButton).click();
        await expect(browser).toHaveUrl('https://vitraindumentaria.com.ar/');
    })
 })