import user from '../fixtures/user';
import { faker } from '@faker-js/faker';
import{register, login, setCookies} from "../support/helper";
import homePage from "../support/pages/HomePage";
import loginPage from "../support/pages/LoginPage";


beforeEach(()=> {
    setCookies();
    homePage.visit();
    homePage.openLoginPopup();
})

it('Successful authorization after register', () => {
        homePage.clickRegisterButton();
        register(user.email, user.password, user.grandmaname);
        login(user.email, user.password);

        cy.log('Verify successful auth');
        homePage.clickAccountButton();
        homePage.getProfileUserEmail().should('contain', user.email);
        homePage.clickNavbarLogoutButton();

})

    describe('Auth negative test suites', () => {

        afterEach(() => {
            cy.log('Verify Error message');
            loginPage.getErrorMessageText().should('have.text', 'Invalid email or password.');
        });

        it('User cannot login with incorrect email', () => {

            cy.log("Fill login form");
            loginPage.getLoginEmailInputField().type(faker.internet.email());
            loginPage.getLoginPassInputField().type(user.password);
            loginPage.getSubmitLoginButton().click();
        });

        it('User cannot login with incorrect password', () => {

            cy.log("Fill login form");
            loginPage.getLoginEmailInputField().type(user.email);
            loginPage.getLoginPassInputField().type(faker.internet.password());
            loginPage.getSubmitLoginButton().click();
        })
    })


