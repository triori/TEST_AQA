describe('TEST-1(API)', () => {
    it('Download and compare img', () => {
    cy.request({
        url: 'http://apimeme.com/meme?meme=Alarm-Clock&top=Top+text&bottom=Bottom+text',
        encoding: 'base64',
      })
      .then((response) => {
        const base64Content = response.body
        cy.readFile('./img/example.jpeg', 'base64').then((currentImage) => {
            expect(base64Content).equal(currentImage);
        })
      })
    })
  })