describe("Navigation", () => {
  it("should navigate to the about page and then back home", () => {
    cy.visit("/");

    cy.get("a[href*='about']").click();

    cy.url().should("include", "/about");

    cy.get("h1").contains("Hello and Welcome to Next Tac Toe!");

    cy.get("button").click();

    cy.url().should("not.include", "/about");

    cy.get("h1").contains("Next Tac Toe");
  });
});
