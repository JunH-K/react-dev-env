describe('test', () => {
  it('카운터 기본값', () => {
    cy.visit('/');
    cy.get('.count').should('have.text', '0');
  });

  it('카운트 증가', function() {
    cy.visit('/');
    cy.get('.increment').click();
    cy.get('.count').should('have.text', '1');
  });
});
