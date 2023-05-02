const PoHeaderSearchInput=require('../pageobjects/poHeaderSearchInput');
const PoHeaderMenu = require('../pageobjects/poHeaderMenu');
const PoHeaderLogoInstitutionalHome= require('../pageobjects/poHeaderLogoInstitutionalHome');

describe('Header search input actions',()=>{
    it('value entered on search input should shows a suggestion list', async()=>{
        await browser.url('https://vitraindumentaria.com.ar/');
        await $(PoHeaderMenu.locators.acceptCookies).click();
        await $(PoHeaderSearchInput.locators.inputSearch).waitForEnabled();
        await $(PoHeaderSearchInput.locators.inputSearch).setValue('r');
        await browser.pause(3000);
        await expect(await $(PoHeaderSearchInput.locators.searchSuggestList)).toBeDisplayedInViewport();
    })
    it('click on search button should to shows search results and title ', async()=>{
        await $(PoHeaderSearchInput.locators.searchButton).waitForDisplayed();
        await $(PoHeaderSearchInput.locators.searchButton).click();
        await expect(await $(PoHeaderSearchInput.locators.searchResultTitle)).toBeDisplayedInViewport();
    })
    it ('Send enter button should redirect to search result too', async()=>{
        await $(PoHeaderLogoInstitutionalHome.locators.homeLogo).click();
        await $(PoHeaderSearchInput.locators.inputSearch).waitForDisplayed();
        await $(PoHeaderSearchInput.locators.inputSearch).setValue('b');
        await browser.keys("\uE007");
        await expect(await $(PoHeaderSearchInput.locators.searchResultTitle)).toBeDisplayedInViewport();
    })
})