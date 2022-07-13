
describe('Pokemon List', () => {
  it('should display a list of pokemon', () => {
    cy.intercept('GET', '/api/v1/pokemon?limit=5&offset=0', { fixture: 'pokemon-list/page-1.json' })
      .as('getPokemonListP1');

    cy.visit('/');

    cy.wait('@getPokemonListP1');
    cy.get('.pokemonItem').should('have.length', 5);
    cy.get('.pokemonList').should('be.visible');
    cy.get('.pagination').should('be.visible');
    cy.get('.pokemonItem').first().should('have.text', 'bulbasaur');
  });

  it('should display the 2nd page of the list pokemon', () => {
    cy.intercept('GET', '/api/v1/pokemon?limit=5&offset=0', { fixture: 'pokemon-list/page-1.json' })
      .as('getPokemonListP1');
    cy.intercept('GET', '/api/v1/pokemon?limit=5&offset=5', { fixture: 'pokemon-list/page-2.json' })
      .as('getPokemonListP2');

    cy.visit('/');

    cy.wait('@getPokemonListP1');
    cy.contains('next >').click();
    cy.wait('@getPokemonListP2');
    cy.get('.pokemonItem').should('have.length', 5);
    cy.get('.pagination .active').should('have.text', '2');
  });
});
