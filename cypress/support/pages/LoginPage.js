
class LoginPage {

    constructor() {
        this.loginEmailInputField = '#email';
        this.loginPassInputField = '#password';
        this.submitLoginButton = '#loginButton';
        this.errorMessageText = '.error.ng-star-inserted'
    }

    visit() {
        cy.log('Open Login page');
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/login')
    }

    getLoginEmailInputField() {
        return cy.get(this.loginEmailInputField);
    }

    getLoginPassInputField() {
        return cy.get(this.loginPassInputField);
    }

    getSubmitLoginButton() {
        return cy.get(this.submitLoginButton);
    }


    getErrorMessageText() {
        return cy.get(this.errorMessageText);
    }

    fillLoginForm(email, password) {
        cy.log('Fill in the form');
        this.getLoginEmailInputField().type(email);
        this.getLoginPassInputField().type(password);
    }
}
export default new LoginPage();