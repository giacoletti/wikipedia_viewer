describe('User visiting the application', () => {
  before(() => {
    cy.visit('/');
  });

  it('is expected to display header', () => {
    cy.get('[data-cy=wiki-viewer-header]').should('contain.text', 'Hello world')
      .and('be.visible');
  });
});
