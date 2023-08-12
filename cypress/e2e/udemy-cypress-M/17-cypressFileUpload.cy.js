describe('Cypress File Upload', () => {
    it('Dosya yukleme -1', () => {
        cy.visit('https://www.qrcode-monkey.com/')
        cy.get('div:nth-child(3) > div.pane-header > h3').click()
        cy.get('.logo-preview').attachFile({filePath:"01.jpeg"},{subjectType:'drag-n-drop'})
    });

    it('Dosya yukleme -2', () => {
        //Yukaridaki calismaz ise convert islemi yapilmasi gerekiyor demektir bunun icin bu blog kullanilirrffffffwe
        cy.visit('https://www.qrcode-monkey.com/')
        cy.get('div:nth-child(3) > div.pane-header > h3').click()
        const fileName = '01.jpeg'
        cy.fixture('01.jpeg')
        .then(Cypress.Blob.base64StringToBlob)//convert islemi icin
        .then((fileContent) => {
            cy.get('.logo-preview').attachFile(
                {fileContent, fileName, mimeType: 'image/**'}, {subjectType: 'drag-n-drop'}
            )
        })
        
    });
});