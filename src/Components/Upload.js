import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import mammoth from 'mammoth';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Upload = (props) => {
  const [mydatainchat, setmydatainchat] = useState([]);
  const [filePreviews, setFilePreviews] = useState({});

  useEffect(() => {
    if (props.format && typeof props.format === 'object' && Object.keys(props.format).length > 0) {
      try {
        // No need to parse if it's already an object
        const parsedData = props.format;
        console.log(parsedData);
        setmydatainchat([parsedData]);
      } catch (error) {
        console.error('Error handling props.format:', error);
      }
    }
  }, [props.format]);
  
  
  // Convert Base64 to File
  const reconstructFileFromBase64 = (fileMetadata) => {
    return new Promise((resolve) => {
      const byteCharacters = atob(fileMetadata.base64);
      const byteArrays = [];

      for (let offset = 0; offset < byteCharacters.length; offset += 512) {
        const slice = byteCharacters.slice(offset, offset + 512);
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }

      const blob = new Blob(byteArrays, { type: fileMetadata.type });
      const file = new File([blob], fileMetadata.name, { type: fileMetadata.type });
      resolve(file);
    });
  };

  useEffect(() => {
    const processFiles = async () => {
      const updatedPreviews = {};
      for (const message of mydatainchat) {
        if (message.type === 'file') {
          try {
            const file = await reconstructFileFromBase64(message.data);

            if (file) {
              if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
                try {
                  const json = await convertExcelToJSON(file);
                  updatedPreviews[file.name] = json;
                } catch (error) {
                  console.error(`Error converting file ${file.name}:`, error);
                  updatedPreviews[file.name] = null;
                }
              } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
                try {
                  const html = await convertWordToHTML(file);
                  updatedPreviews[file.name] = 'data:text/html;charset=utf-8,' + encodeURIComponent(html);
                } catch (error) {
                  console.error(`Error converting file ${file.name}:`, error);
                  updatedPreviews[file.name] = null;
                }
              } else {
                updatedPreviews[file.name] = URL.createObjectURL(file);
              }
            }
          } catch (error) {
            console.error('Error processing file:', error);
          }
        }
      }
      setFilePreviews(updatedPreviews);
    };

    if (mydatainchat.length > 0) {
      processFiles();
    }
  }, [mydatainchat]);

  const convertExcelToJSON = (file) => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const sheet = workbook.Sheets[workbook.SheetNames[0]];
          const json = XLSX.utils.sheet_to_json(sheet, { header: 1 });
          resolve(json);
        } catch (error) {
          reject(error);
        }
      };
      reader.readAsArrayBuffer(file);
    });
  };

  const convertWordToHTML = (file) => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = (e) => {
        mammoth.convertToHtml({ arrayBuffer: e.target.result })
          .then((result) => resolve(result.value))
          .catch((error) => reject(error));
      };
      reader.readAsArrayBuffer(file);
    });
  };

  const renderExcelTable = (data) => {
    if (!data || data.length === 0) return <p>No data available</p>;

    const headers = data[0];
    const rows = data.slice(1);

    return (
      <div className="table-wrapper">
        <table className="table table-striped table-bordered table-hover">
          <thead className="table-primary">
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderFilePreview = (file) => {
    const fileContent = filePreviews[file.name];

    if (!fileContent) {
      return <p>Loading...</p>;
    }

    switch (file.type.split('/')[0]) {
      case 'image':
        return <img src={fileContent} alt="Preview" className="img-fluid" style={{ maxWidth: '100%', maxHeight: '400px' }} />;
      case 'application':
        if (file.type === 'application/pdf') {
          return <iframe src={fileContent} title="PDF Preview" className="img-fluid" style={{ width: '100%', height: '500px' }} />;
        }
        if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
          return (
            <iframe
              src={fileContent}
              title="Word Document Preview"
              className="img-fluid"
              style={{ width: '100%', height: '500px' }}
            />
          );
        }
        if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
          return renderExcelTable(fileContent);
        }
        return <p>Unsupported file type</p>;
      default:
        return <p>Unsupported file type</p>;
    }
  };

  return (
    <div className="container mt-4">
      {/* Display files from mydatainchat */}

      <div className="row">
        {mydatainchat.map((message, index) => (
          <div className="col-md-12 mb-3" key={index}>
            <div className="card">
              <div className="card-body">
              <div className="card-title ms-1 text-start">
            <i className="fa-solid fa-user fa-xl" style={{color: "rgb(12, 12, 150)",}}></i>
            <span className='ms-1 fw-bold'>My account</span></div>
                {message.type === 'file' ? renderFilePreview(message.data) : <p>Unsupported message type</p>}
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upload;
