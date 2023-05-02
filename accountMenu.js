const PoHeaderMenu = require('../pageobjects/poHeaderMenu');
const PoHeaderAccountMenu = require('../pageobjects/poHeaderAccountMenu');

describe ('Account menu actions',()=>{
    it('Hover on account menu should shows login options', async ()=>{
        await browser.url('https://vitraindumentaria.com.ar/');
        //await browser.maximizeWindow();
        await $(PoHeaderMenu.locators.acceptCookies).click()
        await $(PoHeaderAccountMenu.locators.accountMenu).waitForDisplayed();
        await $(PoHeaderAccountMenu.locators.accountMenu).moveTo();
        await expect($(PoHeaderAccountMenu.locators.dropDownAccountMenu)).toBeDisplayed();
    });
    it('Click on login option should redirect to the current page, shows login title and form', async()=>{
        await $(PoHeaderAccountMenu.locators.login).waitForDisplayed();
        await $(PoHeaderAccountMenu.locators.login).click();
        await expect($(PoHeaderAccountMenu.locators.tittleAccount)).toBeDisplayed();
        await expect($(PoHeaderAccountMenu.locators.tittleAccount)).toHaveText('Iniciá sesión');
        await expect($(PoHeaderAccountMenu.locators.accountForm)).toBeDisplayed();
    })
    it('Click on Create account option should redirect to the current page, shows Create account title and form', async()=>{
        await $(PoHeaderAccountMenu.locators.accountMenu).waitForDisplayed();
        await $(PoHeaderAccountMenu.locators.accountMenu).moveTo();
        await $(PoHeaderAccountMenu.locators.createAccount).waitForDisplayed();
        await $(PoHeaderAccountMenu.locators.createAccount).click();
        await expect($(PoHeaderAccountMenu.locators.tittleAccount)).toBeDisplayed();
        await expect($(PoHeaderAccountMenu.locators.tittleAccount)).toHaveText('Crear cuenta');
        await expect($(PoHeaderAccountMenu.locators.accountForm)).toBeDisplayed();
    })


})