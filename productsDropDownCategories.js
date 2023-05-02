const PoHeaderMenu= require('../pageobjects/poHeaderMenu');
const PoHeaderProductsMenu = require('../pageobjects/poHeaderProductsMenu')

describe('Products drop down categories', ()=>{
    it('Hover to Products menu must shows a drop down categories', async()=>{
        await browser.url('https://vitraindumentaria.com.ar/');
        //await browser.maximizeWindow();
        await $(PoHeaderMenu.locators.acceptCookies).click();
        await $(PoHeaderProductsMenu.locators.productsButton).waitForDisplayed();
        await $(PoHeaderProductsMenu.locators.productsButton).moveTo();
        await expect($(PoHeaderProductsMenu.locators.productsDropDownCategories)).toBeDisplayed();
    })
    it('click on categorie Remeras must redirect to the correct website and shows Remeras titlte', async()=>{
        await $(PoHeaderProductsMenu.locators.remerasCategorie).waitForDisplayed();
        await $(PoHeaderProductsMenu.locators.remerasCategorie).click();
        await $(PoHeaderProductsMenu.locators.categoriesTitle).waitForDisplayed();
        await expect(browser).toHaveUrlContaining('vitraindumentaria.com.ar/remeras/');
        await expect($(PoHeaderProductsMenu.locators.categoriesTitle)).toHaveText('Remeras');
    })
    it('click on categorie Musculosas must redirect to the correct website', async()=>{
        await $(PoHeaderProductsMenu.locators.productsButton).moveTo()
        await $(PoHeaderProductsMenu.locators.musculosasCategorie).waitForDisplayed();
        await $(PoHeaderProductsMenu.locators.musculosasCategorie).click();
        await $(PoHeaderProductsMenu.locators.categoriesTitle).waitForDisplayed();
        await expect(browser).toHaveUrlContaining('vitraindumentaria.com.ar/musculosas/');
        await expect($(PoHeaderProductsMenu.locators.categoriesTitle)).toHaveText('Musculosas');
    })
    it ('click on categorie Calzas must redirect to the correct website', async()=>{
        await $(PoHeaderProductsMenu.locators.productsButton).moveTo()
        await $(PoHeaderProductsMenu.locators.calzasCategorie).waitForDisplayed();
        await $(PoHeaderProductsMenu.locators.calzasCategorie).click();
        await $(PoHeaderProductsMenu.locators.categoriesTitle).waitForDisplayed();
        await expect(browser).toHaveUrlContaining('vitraindumentaria.com.ar/calzas/');
        await expect($(PoHeaderProductsMenu.locators.categoriesTitle)).toHaveText('Calzas');
    })
    it ('click on categorie Camperas must redirect to the correct website', async()=>{
        await $(PoHeaderProductsMenu.locators.productsButton).moveTo()
        await $(PoHeaderProductsMenu.locators.camperasCategorie).waitForDisplayed();
        await $(PoHeaderProductsMenu.locators.camperasCategorie).click();
        await $(PoHeaderProductsMenu.locators.categoriesTitle).waitForDisplayed();
        await expect(browser).toHaveUrlContaining('vitraindumentaria.com.ar/camperas/');
        await expect($(PoHeaderProductsMenu.locators.categoriesTitle)).toHaveText('Camperas');
    })
    it ('click on categorie Tops must redirect to the correct website', async()=>{
        await $(PoHeaderProductsMenu.locators.productsButton).moveTo()
        await $(PoHeaderProductsMenu.locators.topsCategorie).waitForDisplayed();
        await $(PoHeaderProductsMenu.locators.topsCategorie).click();
        await $(PoHeaderProductsMenu.locators.categoriesTitle).waitForDisplayed();
        await expect(browser).toHaveUrlContaining('vitraindumentaria.com.ar/tops/');
        await expect($(PoHeaderProductsMenu.locators.categoriesTitle)).toHaveText('Tops');
    })
    it ('click on categorie Shorts must redirect to the correct website', async()=>{
        await $(PoHeaderProductsMenu.locators.productsButton).moveTo()
        await $(PoHeaderProductsMenu.locators.shortsCategorie).waitForDisplayed();
        await $(PoHeaderProductsMenu.locators.shortsCategorie).click();
        await $(PoHeaderProductsMenu.locators.categoriesTitle).waitForDisplayed();
        await expect(browser).toHaveUrlContaining('vitraindumentaria.com.ar/shorts/');
        await expect($(PoHeaderProductsMenu.locators.categoriesTitle)).toHaveText('Shorts');
    })
    it ('click on categorie Buzos must redirect to the correct website', async()=>{
        await $(PoHeaderProductsMenu.locators.productsButton).moveTo()
        await $(PoHeaderProductsMenu.locators.buzosCategorie).waitForDisplayed();
        await $(PoHeaderProductsMenu.locators.buzosCategorie).click();
        await $(PoHeaderProductsMenu.locators.categoriesTitle).waitForDisplayed();
        await expect(browser).toHaveUrlContaining('vitraindumentaria.com.ar/buzo/');
        await expect($(PoHeaderProductsMenu.locators.categoriesTitle)).toHaveText('Buzos');
    })
    it ('click on categorie Jogging must redirect to the correct website', async()=>{
        await $(PoHeaderProductsMenu.locators.productsButton).moveTo()
        await $(PoHeaderProductsMenu.locators.joggingCategorie).waitForDisplayed();
        await $(PoHeaderProductsMenu.locators.joggingCategorie).click();
        await $(PoHeaderProductsMenu.locators.categoriesTitle).waitForDisplayed();
        await expect(browser).toHaveUrlContaining('vitraindumentaria.com.ar/jogging/');
        await expect($(PoHeaderProductsMenu.locators.categoriesTitle)).toHaveText('Jogging');
    })
    it ('click on categorie Remerones must redirect to the correct website', async()=>{
        await $(PoHeaderProductsMenu.locators.productsButton).moveTo()
        await $(PoHeaderProductsMenu.locators.remeronesCategorie).waitForDisplayed();
        await $(PoHeaderProductsMenu.locators.remeronesCategorie).click();
        await $(PoHeaderProductsMenu.locators.categoriesTitle).waitForDisplayed();
        await expect(browser).toHaveUrlContaining('vitraindumentaria.com.ar/remerones/');
        await expect($(PoHeaderProductsMenu.locators.categoriesTitle)).toHaveText('Remerones');
    })
    it ('click on categorie Hombre must redirect to the correct website', async()=>{
        await $(PoHeaderProductsMenu.locators.productsButton).moveTo()
        await $(PoHeaderProductsMenu.locators.hombreCategorie).waitForDisplayed();
        await $(PoHeaderProductsMenu.locators.hombreCategorie).click();
        await $(PoHeaderProductsMenu.locators.categoriesTitle).waitForDisplayed();
        await expect(browser).toHaveUrlContaining('vitraindumentaria.com.ar/hombre/');
        await expect($(PoHeaderProductsMenu.locators.categoriesTitle)).toHaveText('Hombre');
    })
})