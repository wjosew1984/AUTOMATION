const PoBankPromo=require('../pageobjects/poBankPromo');
const PoHeaderMenu=require('../pageobjects/poHeaderMenu');

describe('header bank promo option', ()=>{
    it('click on bank promo header option should redirect to Mercado Pago credit cards promotions', async()=>{
        await browser.url('https://vitraindumentaria.com.ar/');
        await $(PoHeaderMenu.locators.acceptCookies).click();
        await $(PoBankPromo.locators.bankPromo).waitForDisplayed();
        await $(PoBankPromo.locators.bankPromo).click();
        await expect(browser).toHaveUrlContaining('https://www.mercadopago.com.ar/mercado-credito/comprar-cuotas-sin-tarjeta');

    })
})