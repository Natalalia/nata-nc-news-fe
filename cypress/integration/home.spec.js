describe("Home", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("check incorrect username log in", () => {
    cy.get(".logInInput")
      .type("pispy")
      .should("have.value", "pispy");
    cy.get("[data-cy=logIn-button]").click();
    cy.get("[data-cy=warning-username-msg]").should("be.visible");
  });
  it("check correct username log in", () => {
    cy.get(".logInInput").type("grumpy19");
    cy.get("[data-cy=logIn-button]").click();
    cy.get("[data-cy=warning-username-msg]").should("not.be.visible");
    cy.get("[data-cy=login-username-img]").should("be.visible");
    cy.get("[data-cy=login-username-name]").should("be.visible");
  });
});
