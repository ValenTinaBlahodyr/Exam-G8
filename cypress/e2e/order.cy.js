import {register, login, setCookies, productPurchase, checkTheProduct, verifyTheProduct} from "../support/helper";
import user from "../fixtures/user.json";
import homePage from "../support/pages/HomePage";
import orderCompletionPage from "../support/pages/OrderCompletionPage";

describe('Place order and verify product details', () => {
    beforeEach(() => {
        setCookies();
        homePage.visit();
        homePage.openLoginPopup();
        homePage.clickRegisterButton();
        register(user.email, user.password, user.grandmaname);
        login(user.email, user.password);
    });

    it('Place order from the main page', () => {
        cy.log('Add product to the basket');
        homePage.getAddToBasketButton().eq(1).click();
        homePage.getSuccessfulPopup({timeout: 10000}).should('contain', "Placed Apple Juice (1000ml) into basket.");

        cy.log('Open the basket');
        homePage.getBasketIcon().click();
        checkTheProduct();

        cy.log('Purchase the product')
        productPurchase();

        cy.log('Verify the purchase complete');
        orderCompletionPage.getConfirmationText().should('contain', "Thank you for your purchase!");
        verifyTheProduct();

    })
})
