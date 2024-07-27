import { setCookies, setRating } from "../support/helper";
import contactPage from "../support/pages/ContactPage";

it('should place feedback', () => {
    setCookies();
contactPage.visit();
contactPage.fillCommentForm();

cy.log('Select the rating');
setRating(4);

cy.log('Fill the Captcha');
contactPage.getCaptchaExpression().invoke('text').then((captchaText) => {
    const result = eval(captchaText.trim());

cy.log('Enter the expression result');
contactPage.getCaptchaExpressionInput().type(result.toString());
    })

cy.log('Submit the form');
contactPage.getSubmitButton().click();

cy.log('Verify the success message');
contactPage.getSuccessMessageText().should('contain.text', "Thank you for your feedback.");
})
