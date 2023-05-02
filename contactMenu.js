const PoHeaderContactMenu = require('../pageobjects/poHeaderContactMenu');
const PoHeaderMenu =require('../pageobjects/poHeaderMenu');

//To run this test the Captcha must to be handled manually!!!!.

describe('Header contact menu options and actions', ()=>{
    it('click on contact menu should redirect to a message page, shows Contact title, message form and recaptcha iframe', async ()=>{
        await browser.url('https://vitraindumentaria.com.ar/');
        await $(PoHeaderMenu.locators.acceptCookies).click();
        await $(PoHeaderContactMenu.locators.contactButton).waitForDisplayed();
        await $(PoHeaderContactMenu.locators.contactButton).click();
        await expect(browser).toHaveUrlContaining('vitraindumentaria.com.ar/contacto/');
        await expect($(PoHeaderContactMenu.locators.tittleContact)).toHaveText('Contacto');
        await expect($(PoHeaderContactMenu.locators.contactForm)).toBeDisplayed();
    })
    it('complete contact form inputs, check recapctha enable and send message button', async()=>{
        await $(PoHeaderContactMenu.locators.contactNameInput).waitForDisplayed();
        await $(PoHeaderContactMenu.locators.contactNameInput).setValue('Tom');
        await $(PoHeaderContactMenu.locators.contactEmailInput).waitForDisplayed();
        await $(PoHeaderContactMenu.locators.contactEmailInput).setValue('tom@tom.com');
        await $(PoHeaderContactMenu.locators.contactTelInput).waitForDisplayed();
        await $(PoHeaderContactMenu.locators.contactTelInput).setValue('111111');
        await $(PoHeaderContactMenu.locators.contactMessage).waitForDisplayed();
        await $(PoHeaderContactMenu.locators.contactMessage).setValue('Hello');
        await $(PoHeaderContactMenu.locators.contactReCaptchaIframe).scrollIntoView({ block: 'center', inline: 'center' });
        await browser.pause(3000);
        await $(PoHeaderContactMenu.locators.contactReCaptchaIframe).waitForDisplayed();
        await $(PoHeaderContactMenu.locators.contactReCaptchaIframe).click();
        await browser.pause(10000);
        await browser.switchToFrame(await browser.findElement('xpath','//form[@id="contact-form"]//iframe[@title="reCAPTCHA"]'));
        await expect($(PoHeaderContactMenu.locators.contacReCaptchaCheckbox)).toHaveAttrContaining('aria-checked', true);
        await browser.switchToFrame(null);
        await browser.pause(3000);
        await expect($(PoHeaderContactMenu.locators.sendMessageBtn)).toBeEnabled();
    })
})
