const PoHeaderMenu = require('../pageobjects/poHeaderMenu');
const PoHeaderProductsMenu = require('../pageobjects/poHeaderProductsMenu');
const PoShoppingCart = require('../pageobjects/poShoppingCart');
const PoCheckoutPage = require('../pageobjects/poCheckoutPage');
const poCheckoutPage = require('../pageobjects/poCheckoutPage');
describe ('Shopping cart actions',()=>{
    it('Add product on shooping cart must to show a ntification and shows the number of added products', async()=>{
        await browser.url('https://vitraindumentaria.com.ar/');
        await $(PoHeaderMenu.locators.acceptCookies).click();
        await $(PoHeaderProductsMenu.locators.productsButton).moveTo();
        await $(PoHeaderProductsMenu.locators.remerasCategorie).click();
        await $(PoHeaderProductsMenu.locators.randomItemOnTable).moveTo();
        await $(PoHeaderProductsMenu.locators.buyBtnRandomItem).click();
        await browser.pause(3000);
        await $(PoHeaderProductsMenu.locators.addToCartRandomItem).waitForDisplayed();
        await $(PoHeaderProductsMenu.locators.addToCartRandomItem).click();
        await browser.pause(3000);
        await expect($(PoShoppingCart.locators.cartItemsAddedNumber)).toHaveText('1');
        await expect($(PoShoppingCart.locators.itemAddedNotification)).toBeDisplayedInViewport();
    });
    it('Click on shopping cart notification button should shows the shopping cart menu, items added and buy button', async()=>{
        await $(PoShoppingCart.locators.seeShoppingCartBtn).waitForDisplayed();
        await $(PoShoppingCart.locators.seeShoppingCartBtn).click();
        await expect($(PoShoppingCart.locators.shoppingCartMenu)).toBeDisplayedInViewport();
        await expect($(PoShoppingCart.locators.shoppingCartList)).toBeDisplayedInViewport();
        await expect($(PoShoppingCart.locators.buyCartItemsBtn)).toBeDisplayedInViewport();
    })

    it('Click on shipping cart buy button must redirect to redirect to first checkout page, get input email, country and zipcode inputs enabled and shows items list', async()=>{
        await $(PoShoppingCart.locators.buyCartItemsBtn).click();
        await $(poCheckoutPage.locators.checkoutFirstPageMenu).waitForDisplayed();
        await expect(browser).toHaveUrlContaining('https://vitraindumentaria.com.ar/checkout/v3/start/');
        await expect($(PoCheckoutPage.locators.checkoutEmailInput)).toBeEnabled();
        await expect($(PoCheckoutPage.locators.checkoutShippingCountry)).toBeEnabled();
        await expect($(PoCheckoutPage.locators.checkoutShippingZipCode)).toBeEnabled();
        await expect($(PoCheckoutPage.locators.checkoutItemsList)).toBeDisplayedInViewport();

    })
    
});
