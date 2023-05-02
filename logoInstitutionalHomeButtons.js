const PoHeaderMenu = require('../pageobjects/poHeaderMenu');
const PoHeaderLogoInstitutionalHome= require('../pageobjects/poHeaderLogoInstitutionalHome');
const PoHeaderProductsMenu= require('../pageobjects/poHeaderProductsMenu');

 describe ('logo and home button must to redirect to web home', ()=>{
    it('logo must to redirect to web home', async()=>{
        await browser.url('https://vitraindumentaria.com.ar/');
        //await browser.maximizeWindow();
        await $(PoHeaderMenu.locators.acceptCookies).click();
        await $(PoHeaderLogoInstitutionalHome.locators.homeLogo).waitForDisplayed();
        await $(PoHeaderProductsMenu.locators.productsButton).click();
        await $(PoHeaderLogoInstitutionalHome.locators.homeLogo).click();
        await expect (browser).toHaveUrl('https://vitraindumentaria.com.ar/');
    })
    it('home button must to redirect to web home', async()=>{
        await $(PoHeaderLogoInstitutionalHome.locators.homeButton).waitForDisplayed();
        await $(PoHeaderProductsMenu.locators.productsButton).click();
        await $(PoHeaderLogoInstitutionalHome.locators.homeButton).click();
        await expect(browser).toHaveUrl('https://vitraindumentaria.com.ar/');
    })
    it ('Institutional button must to redirect to web home', async()=>{
        await $(PoHeaderLogoInstitutionalHome.locators.institutionalButton).waitForDisplayed();
        await $(PoHeaderProductsMenu.locators.productsButton).click();
        await $(PoHeaderLogoInstitutionalHome.locators.institutionalButton).click();
        await expect(browser).toHaveUrl('https://vitraindumentaria.com.ar/');
    })
 })