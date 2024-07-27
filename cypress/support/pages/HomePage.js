class HomePage{

    constructor(){
        this.accountButton = '#navbarAccount';
        this.loginButton = '#navbarLoginButton';
        this.registerButton = '#newCustomerLink';
        this.profileUserEmail = '[aria-label="Go to user profile"]';
        this.navbarLogoutButton = '#navbarLogoutButton';
        this.addToBasketButton = '.mat-primary.ng-star-inserted';
        this.successfulPopup = '.mat-simple-snack-bar-content';
        this.basketIcon = '.buttons.mat-button.mat-button-base.ng-star-inserted'
        this.homePageLogo = '[aria-label="Back to homepage"]'
    }
    visit(){
        cy.log('Open home page');
        cy.visit('/')
    }
    getAccountButton(){

        return cy.get(this.accountButton);
    }
    clickAccountButton(){
        cy.log('Open login form');
        this.getAccountButton().click();
    }

    getLoginButton(){

        return cy.get(this.loginButton);
    }
    clickLoginButton(){
        cy.log('Open login form');
        this.getLoginButton().click();
    }
    getRegisterButton(){

        return cy.get(this.registerButton);
    }
    clickRegisterButton(){
        cy.log('Open login form');
        this.getRegisterButton().click();
    }
    getProfileUserEmail(){
        return cy.get(this.profileUserEmail)
    }
    getNavbarLogoutButton() {
        return cy.get(this.navbarLogoutButton);
    }
      clickNavbarLogoutButton(){
          cy.log('log out');
          this.getNavbarLogoutButton().click();
      }

    getAddToBasketButton(){
        return cy.get(this.addToBasketButton)
    }
    getSuccessfulPopup(){
        return cy.get(this.successfulPopup)
    }
    getBasketIcon(){
        return cy.get(this.basketIcon)
    }
    openLoginPopup(){
        cy.log('Open Login popup');
        this.getAccountButton().click();
        this.getLoginButton().click();
    }
    getHomePageLogo(){
        return cy.get(this.homePageLogo)
    }
}

export default new HomePage();