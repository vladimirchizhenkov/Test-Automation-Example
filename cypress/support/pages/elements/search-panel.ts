import { CSS_PROPS } from '../../constants/types';
import { qString } from '../../constants/constants';

export default class SearchPanelHeader {
    private get searchIcon() { return cy.get('button[data-icon="search"]'); }

    private get searchInput() { return cy.get('.header__bottom input[placeholder="Поиск темы"]'); }

    private get searchBlock() { return cy.get('.header__bottom .header__search'); }

    private get searchIconCleaner() { return cy.get('.header__bottom .header-search__clear'); }

    private get searchIconCancel() { return cy.get('.header__bottom .header-search__cancel'); }

    private get searchButtonSubmit() { return cy.get('.header__bottom .header-search__submit-btn'); }

    public clickOnSearchIcon = () => {
        this.searchIcon.click();
    }

    public clickOnSearchInput = () => {
        this.searchInput.click();
    }

    public clickOnSearchIconCleaner = () => {
        this.searchIconCleaner.click();
    }

    public clickOnSearchIconCancel = () => {
        this.searchIconCancel.click();
    }

    public clickOnSearchButtonSubmit = () => {
        this.searchButtonSubmit.click();
    }

    public checkSearchBlockCssOpacityValue = () => {
        this.searchBlock.should('have.css', CSS_PROPS.DISPLAY, 'none');
    }

    public fillSearchInput = () => {
        this.searchInput.type(qString);
    }
}