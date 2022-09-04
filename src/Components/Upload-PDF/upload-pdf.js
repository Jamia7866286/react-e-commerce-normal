import React, { useState } from "react";
import HeaderComponent from "../Header/header";
// import { saveAs } from "file-saver";
import { Document, Page, pdfjs } from "react-pdf";

//PDFjs worker from an external cdn
// const url =
//   "https://tyke-pitch-bucket.s3.ap-south-1.amazonaws.com/0041be86-c050-4e29-8e2d-4ea5a3b0140d.pdf";

const url = "http://localhost:3000/Adnan resume.pdf";

const UploadPDF = () => {
  const [selectedFile, setSelectedFile] = useState(url);
  const [isFilePicked, setIsFilePicked] = useState(false);

  const onFileChange = (e) => {
    let fileReader = new FileReader();

    fileReader.onload = function (fileLoadedEvent) {
      selectedFile = fileLoadedEvent.target.result;
      console.log(selectedFile);
    };
    // Convert data to base64
    fileReader.readAsDataURL(e.target.files[0]);

    setSelectedFile(fileReader);
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

      <div className="mt-5 mb-2">
        <label className="form-label">Upload PDF</label>
        <input
          type="file"
          accept="application/pdf"
          className="form-control"
          name="file"
          onChange={(e) => {
            onFileChange(e);
          }}
        />
      </div>

      <Document
        file={selectedFile}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={(error) => alert(`PDF load issue: ${error}`)}
        onLoadProgress={() => {}}
      >
        {Array.from({ length: numPages }, (_, index) => {
          return (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              width={800}
            />
          );
        })}
      </Document>

      {/* {isFilePicked ? (
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
      )} */}

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
