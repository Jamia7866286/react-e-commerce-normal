import React, { useState } from "react";
import HeaderComponent from "../Header/header";
// import { saveAs } from "file-saver";
import { Document, Page, pdfjs } from "react-pdf";

//PDFjs worker from an external cdn
const url = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

const UploadPDF = () => {
  const [selectedFile, setSelectedFile] = useState("");
  const [isFilePicked, setIsFilePicked] = useState(false);

  const FileMethod = (e) => {
    console.log(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
    setIsFilePicked(true);
  };

  pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
  const [numPages, setNumPages] = useState(0);

  const onDocumentLoadSuccess = ({ numPages: nextNumPages }) => {
    setNumPages(nextNumPages);
  };

  return (
    <>
      <HeaderComponent />

      <div>
        <Document
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => console.log("PDF load issue: ", error)}
        >
          {Array.from({ length: numPages }, (_, index) => {
            console.log("page", numPages, index);
            return (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            );
          })}
        </Document>
      </div>

      <div className="mt-5 mb-2">
        <label className="form-label">Upload PDF</label>
        <input
          type="file"
          accept="application/pdf"
          className="form-control"
          name="file"
          onChange={(e) => {
            FileMethod(e);
          }}
        />
      </div>

      {isFilePicked ? (
        <div>
          <p>name: {selectedFile.name}</p>
          <p>type: {selectedFile.type}</p>
          <p>size: {selectedFile.size}</p>
          <p>
            Date: {new Date(selectedFile.lastModified * 1000).toLocaleString()}
          </p>
        </div>
      ) : (
        "No file selected"
      )}

      {/* <button
        className="btn btn-primary"
        onClick={() => {
          var blob = new Blob([selectedFile.name], {
            type: "application/pdf",
          });
          saveAs(blob, selectedFile.name);
        }}
      >
        Upload
      </button> */}
    </>
  );
};

export default UploadPDF;
