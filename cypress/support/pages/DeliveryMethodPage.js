class DeliveryMethodPage {

    constructor() {
        this.oneDayDeliveryRadioButton = '#mat-radio-41';
        this.deliveryContinueButton = '.mat-button-base.mat-primary';
    }

    visit() {
        cy.log('Visit the Contact page')
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/delivery-method');
    }

    getOneDayDeliveryRadioButton() {
        return cy.get(this.oneDayDeliveryRadioButton);
    }
    getDeliveryContinueButton() {
        return cy.get(this.deliveryContinueButton);
    }


}
export default new DeliveryMethodPage();

