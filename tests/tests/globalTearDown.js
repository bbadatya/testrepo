const { chromium } = require('@playwright/test');
const path = require('path');
const { testResults } = require('./helper');


const PDFDocument = require('pdfkit');
const fs = require('fs');

//const { generatePDFReport } = require('../eConsent/generatePDFReport');

module.exports = async function () {
  /*const browser = await chromium.launch();
  const page = await browser.newPage();

  const filePath = path.join(process.cwd(), 'playwright-report', 'index.html');

  await page.goto(`file://${filePath}`);

  await page.waitForLoadState('networkidle');
  const pdfPath = path.join(process.cwd(), 'report.pdf');
  await page.waitForTimeout(2000)

  if (fs.existsSync(pdfPath)) {
    await new Promise(resolve => setTimeout(resolve, 500)); // Wait for 500 milliseconds
    fs.unlinkSync(pdfPath);
  }

 
// Convert the HTML to PDF
await page.pdf({
  path: 'report.pdf',
  format: 'A4',
  printBackground: true,
});
//await generatePDFReport();


  await browser.close();*/


  //for pdf report


  const doc = new PDFDocument();
  const stream = fs.createWriteStream('./test-report.pdf');

  doc.pipe(stream);

  // Add the test results to the PDF report
  testResults.forEach((test, index) => {
    doc.fontSize(16).text(`Test ${index + 1}: ${test.testName}`);

    if (test.result === 'passed') {
      doc.fontSize(14).fillColor('green').text('Result: Passed');
    } else if (test.result === 'failed') {
      doc.fontSize(14).fillColor('red').text('Result: Failed');
    }

    doc.moveDown();
    doc.fontSize(12).text('Screenshot:', { underline: true });

    if (test.screenshot) {
      doc.image(test.screenshot, { width: 500 });
    } else {
      doc.fontSize(10).text('No screenshot available.');
    }

    doc.moveDown();
  });

  doc.end();
}