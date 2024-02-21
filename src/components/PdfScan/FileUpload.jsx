import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'; // Import styles for PDF rendering

const PdfExtractor = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pdfText, setPdfText] = useState('');

  const extractTextFromPages = async (numPages) => {
    try {
      const textPromises = Array.from({ length: numPages }, (_, i) =>
        pdfjs.getDocument(pdfUrl)
          .then((pdf) => pdf.getPage(i + 1))
          .then((page) => page.getTextContent())
          .then((textContent) =>
            textContent.items.map((item) => item.str).join(' ')
          )
      );

      const pageTexts = await Promise.all(textPromises);
      const extractedText = pageTexts.join(' ');
      setPdfText(extractedText);
    } catch (error) {
      console.error('Failed to extract PDF text:', error);
    }
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    extractTextFromPages(numPages);
  };

  return (
    <div>
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (_, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
      <div>{pdfText}</div>
    </div>
  );
};

export default PdfExtractor;