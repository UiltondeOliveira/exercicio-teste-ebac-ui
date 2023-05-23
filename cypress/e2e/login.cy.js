/// <reference types= 'cypress' />

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });


    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
    });

    it('Deve exibir mensagem ao efetuar login com usuário inexistente', () => {
        cy.get('#username').type('aluno-ebaco@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error')
            .should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    });

    it('Deve exibir mensagem ao efetuar login com usuário inexistente', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('texto@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error')
            .should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    });
});