import PageFactory from '../../support/utils/page-factory';
import MainPage from '../../support/pages/main-page';
import SearchPage from '../../support/pages/search-page';
import { PAGE_TITLES, PAGE_TYPES } from '../../support/constants/types';

describe('TMGNews Site Cypress tests with POM pattern:', () => {
    const mainPage = PageFactory.create(PAGE_TYPES.MAIN) as MainPage;
    const searchPage = PageFactory.create(PAGE_TYPES.SEARCH) as SearchPage;

    before(() => {
        mainPage.visitPage();
    });

    it('Should display page title correctly', () => {
        mainPage.checkTitleToIncludeText(PAGE_TITLES.MAIN_PAGE_TITLE);
    });

    it(`Should close the cookie block and set the cookie 'cookie-block-closed'`, () => {
        mainPage.cookie.checkCookieBlockVisibility();
        mainPage.cookie.clickOnCookieButton();
        mainPage.cookie.checkCookieBlockCssDisplayValue();
        mainPage.cookie.checkCookieProperty();
    });

    it('Should open and close BVI version', () => {
        mainPage.bvi.clickOnBviButtonOpen();
        mainPage.bvi.checkBviPanelStatus();
        mainPage.bvi.clickOnBviButtonClose();
        mainPage.bvi.checkBviButtonOpenVisibility();
    });

    it('Should open search-panel, fill and then clear field, close search panel', () => {
        mainPage.searchPanelHeader.clickOnSearchIcon();
        mainPage.searchPanelHeader.clickOnSearchInput();
        mainPage.searchPanelHeader.fillSearchInput();
        mainPage.searchPanelHeader.clickOnSearchIconCleaner();
        mainPage.searchPanelHeader.clickOnSearchIconCancel();
        mainPage.searchPanelHeader.checkSearchBlockCssOpacityValue();
    });

    it('Should fill the search field and then load search page', () => {
        mainPage.searchPanelHeader.clickOnSearchIcon();
        mainPage.searchPanelHeader.clickOnSearchInput();
        mainPage.searchPanelHeader.fillSearchInput();
        mainPage.searchPanelHeader.clickOnSearchButtonSubmit();
        searchPage.checkTitleToIncludeText(PAGE_TITLES.SEARCH_PAGE_TITLE);
        searchPage.checkSearchInputText();
    });
});