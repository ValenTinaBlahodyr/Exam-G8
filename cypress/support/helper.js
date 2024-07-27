import user from "../fixtures/user.json";
import {faker} from "@faker-js/faker";
import loginPage from "./pages/LoginPage";
import registrationPage from "./pages/RegistrationPage";
import basketPage from "./pages/BasketPage";
import addressSelectPage from "./pages/AddressSelectPage";
import addressPage from "./pages/AddressPage";
import deliveryMethodPage from "./pages/DeliveryMethodPage";
import paymentPage from "./pages/PaymentPage";
import orderSummary from "./pages/OrderSummary";
import orderCompletionPage from "./pages/OrderCompletionPage";
import homePage from "./pages/HomePage";

user.email = faker.internet.email();

export function setCookies() {
    cy.log("Set cookies");
    cy.setCookie("cookieconsent_status", "dismiss");
    cy.setCookie("welcomebanner_status", "dismiss");

}

export function register(email, password, grandmaname) {
    cy.log('Fill in the form');
    homePage.visit();
    homePage.clickAccountButton();
    homePage.clickLoginButton();
    homePage.clickRegisterButton();
    registrationPage.fillRegistrationForm(email, password);
    registrationPage.selectSecurityQuestion();
    registrationPage.fillSecurityAnswer(grandmaname);
    registrationPage.clickRegisterButton();

}

export function login() {
    loginPage.fillLoginForm(user.email, user.password);
    loginPage.getSubmitLoginButton().click();
}

export function findProduct(productName) {
    cy.get('body').then((body) => {
        if (body.find(`.item-name:contains("${productName}")`).length > 0) {
            cy.get(`.item-name:contains("${productName}")`)
                .closest('mat-card')
                .find('button[aria-label="Add to Basket"]')
                .click();
        } else {
            cy.get('[aria-label="Next page"]').click();
            findProduct(productName);
        }
    });
}

export function productPurchase(){
    cy.log('Go to checkout');
    basketPage.getCheckoutButton().click();

    cy.log('Add new address');
    addressSelectPage.getAddNewAddressButton().click();

    cy.log('Fill the form');
    addressPage.getCountryInput().type(user.country);
    addressPage.getNameInput().type(user.name);
    addressPage.getMobileNumberInput().type(user.mobile);
    addressPage.getZipCodeInput().type(user.zipcode);
    addressPage.getAddressInput().type(user.address);
    addressPage.getCityInput().type(user.city);

    cy.log('Submit the form');
    addressPage.getSubmitButton().click();

    cy.log('Select the address and continue');
    addressSelectPage.getAddressRadioButton().click();
    addressSelectPage.getAddressContinueButton().click();

    cy.log('Select delivery and continue');
    deliveryMethodPage.getOneDayDeliveryRadioButton().click();
    deliveryMethodPage.getDeliveryContinueButton().click();

    cy.log('Fill in payment details');
    paymentPage.getAddNewCardOption().click();
    paymentPage.getCardNameInput().type(user.name);
    paymentPage.getCardNumberInput().type(user.cardNumber);
    paymentPage.getExpiryMonthSelect().select('1');
    paymentPage.getExpiryYearSelect().select('2080');
    paymentPage.getSubmitButton().click();
    paymentPage.getCreditCardRadioButton().click();
    paymentPage.getNextButton().click();

    cy.log('Proceed to checkout');
    orderSummary.getPlaceOrderButton().click();

    cy.log('Verify the purchase complete');
    orderCompletionPage.getConfirmationText().should('contain', "Thank you for your purchase!");
}


export function setRating(value) {
    cy.get('#rating')
        .then($slider => {
            const sliderWidth = $slider.width();
            const minValue = 1;
            const maxValue = 5;

            cy.log('Calculate the position to click');
            const position = ((value - minValue) / (maxValue - minValue)) * sliderWidth;

            cy.log('Click on the calculated position');
            cy.wrap($slider).click(position, 10);
        });
}

export function checkTheProduct() {
    cy.log('Check the product price and quantity');
    basketPage.getPriceText().invoke('text').then((price) => {
        const productPrice = price.replace(/[\s\u00A0¤]/g, '').trim();
        cy.wrap(productPrice).as('productPrice');
    });
    basketPage.getQuantityText().invoke('text').then((quantity) => {
        const productQuantity = quantity.trim();
        cy.wrap(productQuantity).as('productQuantity');
    });
}

export function verifyTheProduct(){
    cy.log('Verify the price and the quantity in the basket');
    cy.get('@productPrice').then((productPrice) => {
        cy.get('.price-align.cdk-column-total-price').invoke('text').then((cartPrice) => {
            const cartPriceTrimmed = cartPrice.replace(/[\s\u00A0¤]/g, '').trim();
            expect(cartPriceTrimmed).to.eq(productPrice);
        });

        cy.get('@productQuantity').then((productQuantity) => {
            cy.get('.mat-cell.cdk-cell.cdk-column-quantity').should('contain', productQuantity);

            cy.log('Verify total price');
            cy.get('.mat-row td').eq(4).should('contain', productPrice * productQuantity);
            cy.get('.mat-row td').eq(5).should('contain', '0.99');
            cy.get('.mat-row td').eq(7).should('contain', productPrice * productQuantity + 0.9900);
        });
    })}



