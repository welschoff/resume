import { Document, Page } from 'react-pdf';
import { useState } from 'react';
import { pdfjs } from 'react-pdf';
import styles from './CertificateItem.module.scss';

export type CertificateProps = {
  pdf: string;
  title: string;
  date: string;
};

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

function CertificateItem({ pdf, title, date }: CertificateProps) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  function toggleOverlay() {
    setIsOpen(!isOpen);
  }

  return (
    <div onClick={toggleOverlay}>
      <div className={styles.info}>
        <h3>{title}</h3>
        <span>{date}</span>
      </div>
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <button onClick={toggleOverlay}>X</button>
            <Document
              renderMode="canvas"
              file={pdf}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page
                pageNumber={pageNumber}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
            <p>
              Page {pageNumber} of {numPages}
            </p>
          </div>{' '}
        </div>
      )}
    </div>
  );
}

export default CertificateItem;
