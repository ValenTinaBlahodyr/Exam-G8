class BasketPage {

        constructor() {
            this.priceText = '.cdk-cell.cdk-column-price';
            this.quantityText = '.content-align.cdk-column-quantity';
            this.checkoutButton = '#checkoutButton'
        }

        visit() {
            cy.log('Visit the Contact page')
            cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/basket');
        }

        getPriceText() {
            return cy.get(this.priceText);
        }

        getQuantityText() {
            return cy.get(this.quantityText);
        }
        getCheckoutButton() {
            return cy.get(this.checkoutButton);
        }
    }
export default new BasketPage();