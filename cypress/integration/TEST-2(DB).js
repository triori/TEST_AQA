describe('Task Command', () => {
    function printResults(rows, i, separator){
        cy.log(`${rows[i].name} ${separator} ${rows[i].population / rows[i].area}`)
    }
    it('Population desinty', () => {
        const query = 'select * from Countries';
        cy.task('Countries', query).then((rows) => {
            for (var i = 0; i < rows.length; i++) {
                rows[i].population / rows[i].area < 50 && rows[i].name === 'USA' ? printResults(rows, i, ' population desinty is ') :  rows[i].population / rows[i].area > 50 ? printResults(rows, i, ' population desinty is ') : expect(false).to.equal(true)
            }
            expect(true).to.equal(true)
        });
    })
    it('Population sum', () => {
        const query = 'select * from Countries';
        cy.task('Countries', query).then((rows) => {
            let sum = 0
            for (var i = 0; i < rows.length; i++) {
                sum += rows[i].population
            }
            expect(2000000000).to.be.greaterThan(sum)
        });
    })
})