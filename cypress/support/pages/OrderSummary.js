class OrderSummaryPage {

    constructor() {
        this.placeOrderButton = '#checkoutButton';
    }

    visit() {
        cy.log('Visit the Contact page')
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/order-summary');
    }

    getPlaceOrderButton() {
        return cy.get(this.placeOrderButton);
    }


}
export default new OrderSummaryPage();