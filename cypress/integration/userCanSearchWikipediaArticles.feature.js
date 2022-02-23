describe("Visiting the application, a user can type a keyword in the search input and press Enter", () => {
  before(() => {
    cy.intercept(
      "GET",
      "https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&generator=search**gsrsearch=panzer",
      { fixture: "wikipediaSearchResponse" }
    );
    cy.visit("/");
    cy.get("[data-cy=search-article-input]").type("panzer{enter}");
  });

  it("is expected to display 10 list items", () => {
    cy.get("[data-cy=wikisearch-list]").children().should("have.length", 10);
  });

  describe('can see first list item with image, title and description', () => {
    it('is expected to see first item image', () => {
      cy.get("[data-cy=wikisearch-image-0]").should("be.visible");
    });

    it('is expected to see first item title', () => {
      cy.get("[data-cy=wikisearch-title-0]").should("contain.text", "Panzer II");
    });

    it('is expected to see first item description', () => {
      cy.get("[data-cy=wikisearch-description-0]").should("be.visible");
    });
  });
});
