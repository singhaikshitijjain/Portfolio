import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PythonPackageDeveloper = () => {
  return (
    <div className="container" style={{ margin: "5vh", width: '100%' }}>
      <div className="row">
        <div className="col-md-8">
          <div style={{ textAlign: "left" }}>
            <h2 style={{ color: "white", backgroundColor: "cyan", padding: "2vh", borderRadius: "5px", fontSize: "1.5rem" }}>
              Python Package Developer
            </h2>
            <h5 style={{ color: "cyan", fontSize: "2vh" }}>Self-Initiated Project</h5>
            <p className="text-muted" style={{ fontSize: "2.5rem", color: "blue", fontWeight: "bold", marginTop: "2vh" }}>
              <i>December 2024 – Present</i>
            </p>
          </div>
          <ul className="list-unstyled" style={{ fontSize: "2.5vh" }}>
            <li className="mb-3">
              Developed and published a Python pip package,  <a href="https://pypi.org/project/nececv/0.2.2/" target="_blank" rel="noopener noreferrer">
                <strong style={{ color: 'cyan', textDecoration: 'underline' }}>nececv</strong>
              </a>, 
              designed to simplify neural networks in Python applications.
            </li>
            <li className="mb-3">
              Enhanced the package to support computer vision tasks, including edge detection and feature extraction, using efficient algorithms.
            </li>
            <li className="mb-3">
              Integrated functionality for large language models (LLMs) to enable seamless text processing and reduce errors in NLP workflows.
            </li>
            <li>
              Maintained the package and implemented updates to ensure compatibility with various Python frameworks and libraries.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PythonPackageDeveloper;
