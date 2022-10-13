describe('Navigation', () => {
  describe('Static pages', () => {
    it('should navigate to the index page', () => {
      // Start from the index page
      cy.visit('/');

      // The index page should contain an h1
      cy.findByRole('heading', {
        name: 'Epub360 Block Editor',
      });
    });
  });
});
