describe('User visiting the application', () => {
  before(() => {
    cy.visit('/');
  });

  it('is expected to display header', () => {
    cy.get('[data-cy=wiki-viewer-header]').should('contain.text', 'Wikipedia Search')
      .and('be.visible');
  });

  it('is expected to display "random article" button', () => {
    cy.get('[data-cy=random-article-btn]').should('be.visible');
  });

  it('is expected to display search button', () => {
    cy.get('[data-cy=search-article-btn]').should('be.visible');
  });
});
