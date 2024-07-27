class ContactPage {

    constructor() {
        this.commentInputField = '#comment';
        this.captchaExpression = '#captcha';
        this.captchaExpressionInput = '#captchaControl';
        this.submitButton = '#submitButton';
        this.successMessageText = '.mat-simple-snack-bar-content';
    }

    visit() {
        cy.log('Visit the Contact page')
        cy.visit('http://juice-shop-sanitarskyi.herokuapp.com/#/contact');
    }

    getCommentInputField() {
        return cy.get(this.commentInputField);
    }

    fillCommentForm() {
        cy.log('Fill in the form');
        this.getCommentInputField().type('Test comment');
    }
    getCaptchaExpression() {
        return cy.get(this.captchaExpression);
    }
    getCaptchaExpressionInput() {
        return cy.get(this.captchaExpressionInput);
    }
    getSubmitButton() {
        return cy.get(this.submitButton);
    }
    getSuccessMessageText() {
        return cy.get(this.successMessageText);
    }
}
export default new ContactPage();