/// <reference types='cypress'/>

import random from 'random'

describe('Funcionalidade: Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve selecionar um produto', () => {
        cy.get('.product-block')
            .contains('Apollo Running Short')
            .click()

        cy.get('.product_title').should('contain', 'Apollo Running Short')
    });

    it.only('Deve adicionar um produto ao carrinho', () => {

        var radomQuantity = random.int(10)
        cy.get('.product-block')
            .contains('Abominable Hoodie')
            .click()

        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(radomQuantity)
        cy.get('.single_add_to_cart_button').click()


        cy.get('.dropdown-toggle > .mini-cart-items')
            .should('contain', radomQuantity)
        cy.get('.woocommerce-message')
            .should('contain', radomQuantity + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });

});