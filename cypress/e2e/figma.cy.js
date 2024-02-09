import '@percy/cypress';

describe('Website öffnen', () => {
  it('Besucht Ikra Bau Startseite', () => {
    cy.visit('https://ikrabau.de/');
    cy.percySnapshot('Startseite');
  });
});