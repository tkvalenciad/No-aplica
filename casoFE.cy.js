describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com')
    cy.get('.SDkEP').type("Symetrik")
    cy.get('.G43f7e > :nth-child(1)').click()
    cy.get('#result-stats').should('not.contain', '0 results')
})
})