describe('Visiting the application, a user can type a keyword in the search input and press Enter', () => {
  before(() => {
    cy.visit('/');
    cy.get('[data-cy=search-article-input]').type('panzer{enter}');
  });

  it('is expected to display 10 list items', () => {
    cy.get('[data-cy=wiki-search-list]').children('[data-cy=wiki-list-item]')
      .should('have.length', 10);
  });
});