/// <reference types='cypress'/>

import { faker } from '@faker-js/faker'

describe('Funcionalidade: Pré-cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    it('Deve realizar pré-cadastro com sucesso', () => {
        let nomeFaker = faker.person.firstName()
        let sobrenomeFaker = faker.person.lastName()
        let emailFaker = faker.internet.email(nomeFaker + '.' + sobrenomeFaker)

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('qwe123')
        cy.get(':nth-child(4) > .button').click()
        
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
});