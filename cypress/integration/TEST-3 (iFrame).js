describe('TEST-3 (iFrame)', () => {
    it('Open URL', () => {
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe')
    })

    it ('Find and replace SRC', () => {
        cy.get('span').contains('https://www.w3schools.com').type('{leftArrow}{leftArrow}{leftArrow}{leftArrow}{leftArrow}{leftArrow}{leftArrow}{leftArrow}{leftArrow}{leftArrow}{leftArrow}{leftArrow}{del}{del}{del}{del}{del}{del}{del}{del}{del}{del}{del}{del}{del}{del}{del}{del}{del}{del}{del}{del}{del}{del}{del}{del}{del}https://www.bing.com')
    })
    it ('Click RUN', () => {
        cy.get('button').click()
    })
    it ('Search input and type REDMOND', () => {
        cy.wait(15000)
        cy.get('iframe[id="iframeResult"]').then($iframe => {
            const $secondIframeReference = $iframe.contents().find('iframe');
            cy.wrap($secondIframeReference).as('secondIframeReference');

            cy.get('@secondIframeReference').then(($secondIframe) => {
                const $elem = $secondIframe.contents().find('input.sb_form_q');
                cy.wrap($elem).as('qInput')
                cy.get('@qInput').type('redmond')
            })
        })
    })
    it ('Check results and find REDMOND WASHINGTON', () => {
        cy.get('iframe[id="iframeResult"]').then($iframe => {
            const $secondIframeReference = $iframe.contents().find('iframe');
            cy.wrap($secondIframeReference).as('secondIframeReference');

            cy.get('@secondIframeReference').then(($secondIframe) => {
                const $elem = $secondIframe.contents().find('input.sb_form_q');
                cy.wrap($elem).as('qInput')
                cy.wait(5000)
                const $searchResult = $secondIframe.contents().find('div#sw_as')
                cy.wrap($searchResult).as('searchResult')
                cy.get('@searchResult').then($results => {
                    const $resultTable = $results.contents().find('li[query="redmond washington"]')
                })
            })
        })
    })
    it ('Click REDMOND WASHINGTON', () => {
        cy.get('iframe[id="iframeResult"]').then($iframe => {
            const $secondIframeReference = $iframe.contents().find('iframe');
            cy.wrap($secondIframeReference).as('secondIframeReference');

            cy.get('@secondIframeReference').then(($secondIframe) => {
                const $elem = $secondIframe.contents().find('input.sb_form_q');
                cy.wrap($elem).as('qInput')
                const $searchResult = $secondIframe.contents().find('div#sw_as')
                cy.wrap($searchResult).as('searchResult')
                cy.get('@searchResult').then($results => {
                    const $resultTable = $results.contents().find('li[query="redmond washington"]')
                    cy.wrap($resultTable).click()
                })
            })
        })
    })
    it ('Check results', () => {
        cy.wait(5000)
            cy.get('iframe[id="iframeResult"]').then($iframe => {
                const $secondIframeReference = $iframe.contents().find('iframe');
                cy.wrap($secondIframeReference).as('secondIframeReference');
    
                cy.get('@secondIframeReference').then(($secondIframe) => {
                    const $div = $secondIframe.contents().find('ol#b_results');
                    cy.wrap($div).get('a[href="https://www.bing.com/travelguide?q=Redmond"]')
                })
            })
        })
})