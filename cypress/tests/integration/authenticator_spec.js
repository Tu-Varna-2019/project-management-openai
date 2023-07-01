describe('Authenticator:', function() {
    // Step 1: setup the application state
    beforeEach(function() {
      cy.visit('/');
    });
    
    describe('Sign In:', () => {
      it('allows a user to signin', () => {
        // Step 2: Take an action (Sign in)
        cy.get(selectors.usernameInput).type("john.doe@tu-varna.bg");
        cy.get(selectors.signInPasswordInput).type("Password123!");
        cy.get(selectors.signInButton).contains('Sign in').click();
  
        cy.wait(3000);
  
        // Step 3: Make an assertion (Check for sign-out text)
          cy.get(selectors.signOutButton).contains('Sign out');
      });
    });
  
  });
  export const selectors = {
    // Auth component classes
    usernameInput: '.amplify-input.amplify-field-group__control[type="email"]',
    signInPasswordInput: '.amplify-input.amplify-field-group__control[type="password"]',
    signInButton: '[data-variation="primary"]',
    signOutButton: 'button'
  }