import user from '../fixtures/user';
import { faker } from '@faker-js/faker';
import {register, setCookies} from "../support/helper";
import homePage from "../support/pages/HomePage";
import registrationPage from "../support/pages/RegistrationPage";


describe('Registration positive and negative test suites', () => {

  user.email = faker.internet.email();

  beforeEach(() => {
    setCookies();

  })

  it('Registration with valid data', () => {
    register(user.email, user.password, user.grandmaname);

  })

  it('Registration with invalid data', () => {
    cy.log('Fill in the form with invalid email');
    homePage.visit();
    homePage.openLoginPopup();
    homePage.clickRegisterButton();
    registrationPage.getEmailInputField().type(user.invalidemail);
    registrationPage.getPassInputField().type(user.password);
    registrationPage.getPassControlInputField().type(user.password);
    registrationPage.selectSecurityQuestion();
    registrationPage.fillSecurityAnswer(user.grandmaname);

    cy.log('Verify red aria of the field');
    registrationPage.getEmailInputField().should('have.attr', 'aria-invalid', 'true');

    cy.log('Verify the Error message');
    registrationPage.getErrorMessageText().eq(0).should('contain', 'Email address is not valid.');

    cy.log('Register button is disabled');
    registrationPage.getSubmitRegisterButton().should('be.disabled');
  })
})