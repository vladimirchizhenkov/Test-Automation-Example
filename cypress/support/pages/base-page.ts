import Cookie from './elements/cookie-element';
import Bvi from './elements/bvi-element';
import SearchPanelHeader from './elements/search-panel';
import { BASE_URL } from '../constants/constants';
import { PAGE_TITLES } from '../constants/types';

export default abstract class BasePage {
    protected baseUrl: string = BASE_URL;
    protected currentUrl!: string;

    public cookie: Cookie;
    public bvi: Bvi;
    public searchPanelHeader: SearchPanelHeader;

    constructor() {
        this.cookie = new Cookie();
        this.bvi = new Bvi();
        this.searchPanelHeader = new SearchPanelHeader();
    }

    public visitPage = () => {
        cy.visit(this.currentUrl);
    }

    public get pageTitle() { return cy.title(); }

    public checkTitleToIncludeText = (textTitle: PAGE_TITLES) => {
        this.pageTitle.should('include', textTitle);
    }
}