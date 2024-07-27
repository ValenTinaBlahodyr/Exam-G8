import {setCookies, register, login, findProduct, productPurchase} from "../support/helper";
import user from "../fixtures/user.json";
import homePage from "../support/pages/HomePage";

it('should find product and place an order', () => {
        setCookies();
        register(user.email, user.password, user.grandmaname);
        login(user.email, user.password);

        const productName = " OWASP Juice Shop Mug ";

        cy.log('Find the product add to the basket');
        findProduct(productName);

        cy.log('Open the basket');
        homePage.getBasketIcon().click();

        cy.log('Navigate to Homepage to update the basket');
        homePage.getHomePageLogo().click();
        homePage.getBasketIcon().click();

        cy.log('Buy the product');
        productPurchase();

})