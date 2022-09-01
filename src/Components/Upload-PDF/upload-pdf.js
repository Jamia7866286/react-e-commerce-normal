import React, { useState } from "react";
import HeaderComponent from "../Header/header";
import { Document, Page } from "react-pdf";
import { saveAs } from "file-saver";

const UploadPDF = () => {
  const [selectedFile, setSelectedFile] = useState("");
  const [isFilePicked, setIsFilePicked] = useState(false);

  const FileMethod = (e) => {
    console.log(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
    setIsFilePicked(true);
  };
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <>
      <HeaderComponent />

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

      <button
        className="btn btn-primary"
        onClick={() => {
          var blob = new Blob([selectedFile.name], {
            type: "application/pdf",
          });
          saveAs(blob, selectedFile.name);
        }}
      >
        Upload
      </button>
      <div>
        <Document
          file={selectedFile.name}
          onLoadError={(er) => console.log(er)}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} width={600} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </>
  );
};

export default UploadPDF;
