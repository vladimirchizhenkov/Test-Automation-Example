import BasePage from './base-page';
import { qString } from '../constants/constants';

export default class SearchPage extends BasePage {
    currentUrl = this.baseUrl + 'search/';

    private get searchInput() { return cy.get(`input[placeholder="Поиск темы или тега"]`); }

    checkSearchInputText = () => {
        this.searchInput.should('have.attr', 'value', qString);
    }
}