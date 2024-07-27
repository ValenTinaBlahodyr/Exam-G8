class OrderCompletionPage {

    constructor() {
        this.confirmationText = '.confirmation';

    }

    getConfirmationText() {
        return cy.get(this.confirmationText);
    }


}
export default new OrderCompletionPage();

