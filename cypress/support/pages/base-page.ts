import Cookie from './elements/cookie-element';
import Bvi from './elements/bvi-element';
import SearchPanelHeader from './elements/search-panel';
import { BASE_URL } from '../constants/constants';
import { PAGE_TITLES } from '../constants/types';

export default abstract class BasePage {
    protected baseUrl: string;
    protected pageUrl!: string;

    public cookie: Cookie;
    public bvi: Bvi;
    public searchPanelHeader: SearchPanelHeader;

    constructor() {
        this.baseUrl = BASE_URL;
        this.cookie = new Cookie();
        this.bvi = new Bvi();
        this.searchPanelHeader = new SearchPanelHeader();
    }

    public visitPage = () => {
        cy.visit(this.pageUrl);
    }

    public get pageTitle() { return cy.title(); }

    public checkTitleToIncludeText = (textTitle: PAGE_TITLES) => {
        this.pageTitle.should('include', textTitle);
    }
}