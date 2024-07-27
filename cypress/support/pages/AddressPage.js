class AddressPage {

    constructor() {
        this.countryInput = '[data-placeholder="Please provide a country."]';
        this.nameInput = '[data-placeholder="Please provide a name."]';
        this.mobileNumberInput = '[data-placeholder="Please provide a mobile number."]'
        this.zipCodeInput = '[data-placeholder="Please provide a ZIP code."]'
        this.addressInput = '[data-placeholder="Please provide an address."]'
        this.cityInput = '[data-placeholder="Please provide a city."]'
        this.submitButton = '#submitButton'
    }

    visit() {
        cy.log('Visit the Contact page')
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/address/create');
    }

    getCountryInput() {
        return cy.get(this.countryInput);
    }

    getNameInput() {
        return cy.get(this.nameInput);
    }
    getMobileNumberInput() {
        return cy.get(this.mobileNumberInput);
    }
    getZipCodeInput() {
        return cy.get(this.zipCodeInput);
    }
    getAddressInput() {
        return cy.get(this.addressInput);
    }
    getCityInput() {
        return cy.get(this.cityInput);
    }
    getSubmitButton() {
        return cy.get(this.submitButton);
    }
}
export default new AddressPage();