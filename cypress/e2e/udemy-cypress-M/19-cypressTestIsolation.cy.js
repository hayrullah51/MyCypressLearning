describe('Cypress Test Isolation', {testIsolation:false}, () => {
    it('Dosya yukleme -1', () => {
        cy.visit('https://www.qrcode-monkey.com/')
        cy.get('div:nth-child(3) > div.pane-header > h3').click()
        cy.get('.logo-preview').attachFile({filePath:"01.jpeg"},{subjectType:'drag-n-drop'})
    });

    it('Dosya yukleme -2', () => {
        const fileName = '02.jpeg'
        cy.fixture('02.jpeg')
        .then(Cypress.Blob.base64StringToBlob)//convert islemi icin
        .then((fileContent) => {
            cy.get('.logo-preview').attachFile(
                {fileContent, fileName, mimeType: 'image/**'}, {subjectType: 'drag-n-drop'}
            )
        })
        
    });
});