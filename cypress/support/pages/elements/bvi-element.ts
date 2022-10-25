import { ELEMENT_ATTRIBUTES } from '../../constants/types';

export default class Bvi {
    private get bviIconOpen() { return cy.get('.header__top .bvi-open'); }

    private get bviBody() { return cy.get('.bvi-body'); }

    private get bviIconClose() { return cy.get('#bvi-panel-close'); }

    public clickOnBviButtonOpen = () => {
        this.bviIconOpen.click();
    }

    public clickOnBviButtonClose = () => {
        this.bviIconClose.click();
    }

    public checkBviPanelStatus = () => {
        this.bviBody.should('have.attr', ELEMENT_ATTRIBUTES.BVI_PANEL_HIDE, 'false')
    }

    public checkBviButtonOpenVisibility = () => {
        this.bviIconOpen.should('be.visible');
    }
}