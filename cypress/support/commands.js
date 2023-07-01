// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { Amplify, Auth } from 'aws-amplify';
Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: "eu-west-1",
    userPoolId: Cypress.env("eu-west-1_ojmQnge33"),
    //identityPoolId: Cypress.env("identityPoolId"),
    userPoolWebClientId: Cypress.env("72is8f4tq4gg7vhbd6nsartpjt"),
    oauth: {
        domain: Cypress.env("https://p2fl5tn40kjc-dev.auth.eu-west-1.amazoncognito.com"),
        scope: ['email', 'profile', 'aws.cognito.signin.user.admin', 'openid'],
        redirectSignIn: Cypress.env("redirect"),
        redirectSignOut: Cypress.env("redirect"),
        responseType: 'code',
        options: {
            AdvancedSecurityDataCollectionFlag: false
        }
    }
  }
});

Cypress.Commands.add("login", (email, password) => {
  return Auth.signIn(email, password)
      .then(user => {
        console.log('===> user', user);

        let session = Auth.currentSession();

        console.log('===> session', session);
      })
      .catch(err => console.log('===> err', err));
})