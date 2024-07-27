

class RegistrationPage{

    constructor(){
        this.emailInputField = '#emailControl';
        this.passInputField = '#passwordControl';
        this.passControlInputField = '#repeatPasswordControl';
        this.securityQuestionField = '[name="securityQuestion"]';
        this.securityQuestionOption = '#mat-option-4';
        this.securityAnswerInputField = '#securityAnswerControl';
        this.submitRegisterButton = '#registerButton';
        this.successfulMessageText = '#cdk-overlay-3';
        this.errorMessageText = '.mat-form-field-should-float';
    }
    visit(){
        cy.log('Open home page');
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/register')
    }

    getEmailInputField(){
        return cy.get(this.emailInputField);
    }


    getPassInputField(){
        return cy.get(this.passInputField);
    }


    getPassControlInputField(){
        return cy.get(this.passControlInputField);
    }


    getSecurityQuestionField(){
        return cy.get(this.securityQuestionField);
    }


    getSecurityQuestionOption(){
        return cy.get(this.securityQuestionOption);
    }


    getSecurityAnswerInputField(){
        return cy.get(this.securityAnswerInputField);
    }



    getSubmitRegisterButton(){
        return cy.get(this.submitRegisterButton);
    }


    getSuccessfulMessageText(){
        return cy.get(this.successfulMessageText);
    }


    getErrorMessageText(){
        return cy.get(this.errorMessageText);
    }
    fillRegistrationForm(email, password) {
        cy.log('Fill in the form');
        this.getEmailInputField().type(email);
        this.getPassInputField().type(password);
        this.getPassControlInputField().type(password);
    }
      selectSecurityQuestion() {
          cy.log('Select security question');
          this.getSecurityQuestionField().click();
          this.getSecurityQuestionOption().click();
      }
       fillSecurityAnswer(grandmaname){
        cy.log('Fill the security answer');
        this.getSecurityAnswerInputField().type(grandmaname);
    }
    clickRegisterButton(){
        cy.log("Submit the form");
        this.getSubmitRegisterButton().click();
    }
}

export default new RegistrationPage();