class AddressSelectPage {

    constructor() {
        this.addNewAddressButton = '.btn-new-address'
        this.addressRadioButton = '.mat-radio-container';
        this.addressContinueButton = '.mat-button-base.mat-primary.ng-star-inserted';
    }

    visit() {
        cy.log('Visit the Contact page')
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/address/select');
    }

    getAddressRadioButton() {
        return cy.get(this.addressRadioButton);
    }
    getAddressContinueButton() {
        return cy.get(this.addressContinueButton);
    }
    getAddNewAddressButton() {
        return cy.get(this.addNewAddressButton);
    }


}
export default new AddressSelectPage();
