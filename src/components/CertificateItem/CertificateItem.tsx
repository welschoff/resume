import { Document, Page } from 'react-pdf';
import { useState } from 'react';
import { pdfjs } from 'react-pdf';
import styles from './CertificateItem.module.scss';
import cert from '../../assets/certification.png';
import arrow from '../../assets/arrow.png';
import { useCallback } from 'react';

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

  const onDocumentLoadSuccess = useCallback(
    ({ numPages }: { numPages: number }) => {
      setNumPages(numPages);
    },
    []
  );

  const toggleOverlay = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsOpen((prev) => !prev);
    setPageNumber(1);
  }, []);

  return (
    <div onClick={toggleOverlay}>
      <div className={styles.box}>
        <img src={cert} alt="Certificate preview" />
        <div className={styles.text}>
          <h3>{title}</h3>
          <span>{date}</span>
        </div>
      </div>
      {isOpen && (
        <div className={styles.overlay}>
          <button className={styles.closeBtn} onClick={toggleOverlay}>
            X
          </button>
          <div
            className={styles.overlayContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Document
              renderMode="canvas"
              file={pdf}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={(error) =>
                console.error('PDF loading error:', error)
              }
            >
              <Page
                pageNumber={pageNumber}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          </div>
          {numPages && numPages > 1 ? (
            <>
              <div className={styles.arrows}>
                <img
                  className={styles.arrowUp}
                  src={arrow}
                  alt="Previous page"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPageNumber((prev) =>
                      numPages && prev === 1 ? numPages : prev - 1
                    );
                  }}
                />
                <img
                  className={styles.arrowDown}
                  src={arrow}
                  alt="Next page"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPageNumber((prev) =>
                      prev >= (numPages ?? 1) ? 1 : prev + 1
                    );
                  }}
                />
              </div>
              <p className={styles.numPages}>
                Page {pageNumber} of {numPages}
              </p>
            </>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
}

export default CertificateItem;
