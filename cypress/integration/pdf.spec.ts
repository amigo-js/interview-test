import * as pdfParse from 'pdf-parse';
import * as fs from 'fs';

describe('PDF Text Content', () => {
  it('should include expected text', () => {
    const expectedText = 'hello world';
    // create options object
    const options = { encoding: 'binary' }; 

    cy.task('readFile', '../pdf/sample.pdf', options).then((pdfData: string) => {
      pdfParse(pdfData, options).then((pdf: pdfParse.PDFData) => {
        const pdfText = pdf.text;
        expect(pdfText).to.include(expectedText);
      });
    });
  });
});
