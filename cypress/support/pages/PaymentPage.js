class PaymentPage {

    constructor() {
        this.addNewCardOption = '#mat-expansion-panel-header-0';
        this.cardNameInput = '#mat-input-16';
        this.cardNumberInput = '#mat-input-17'
        this.expiryMonthSelect = '#mat-input-18'
        this.expiryYearSelect = '#mat-input-19'
        this.submitButton = '#submitButton'
        this.creditCardRadioButton = '#mat-radio-44'
        this.nextButton = '.btn.nextButton'
    }

    visit() {
        cy.log('Visit the Contact page')
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/payment/shop');
    }

    getAddNewCardOption() {
        return cy.get(this.addNewCardOption);
    }

    getCardNameInput() {
        return cy.get(this.cardNameInput);
    }
    getCardNumberInput() {
        return cy.get(this.cardNumberInput);
    }
    getExpiryMonthSelect() {
        return cy.get(this.expiryMonthSelect);
    }
    getExpiryYearSelect() {
        return cy.get(this.expiryYearSelect);
    }
    getSubmitButton() {
        return cy.get(this.submitButton);
    }
    getCreditCardRadioButton() {
        return cy.get(this.creditCardRadioButton);
    }
    getNextButton() {
        return cy.get(this.nextButton);
    }

}
export default new PaymentPage();