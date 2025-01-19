import React from 'react';

const Projects = () => {
  const aspectRatio = window.innerWidth / window.innerHeight;

  // Compute margin dynamically based on aspect ratio
  const marginValue = aspectRatio < 1.9 ? '2vh' : '20px';

  return (
    <div className="projects-container" style={{ margin: marginValue, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', backgroundColor: '#111' }}>
      <div className="main-content" style={{ width: '100%', maxWidth: '70%', marginRight: '20px' }}>
        <h1 className="heading" style={{ color: 'cyan', fontWeight: 'bold', fontSize: '4vh', marginBottom: '15px' }}>
          Hierarchical Language Model Using Solar System Metaphor
        </h1>
        <p className="text" style={{ color: 'white', fontSize: '2.5vh', lineHeight: '1.5', marginBottom: '20px' }}>
          Designed a unique language model inspired by the solar system metaphor, where hierarchical relationships between words are represented as gravitational pulls.
          Implemented Word2Vec to calculate weights and n-grams to structure sentences into planetary systems.
          Enabled multi-layered sentence generation through nodes represented as planets, moons, and satellites.
        </p>

        <h1 className="heading" style={{ color: 'cyan', fontWeight: 'bold', fontSize: '4vh', marginBottom: '15px' }}>
          Speech-Recognition-Based Command Execution with Route Finder and Python Code Complexity Calculator
        </h1>
        <p className="text" style={{ color: 'white', fontSize: '2.5vh', lineHeight: '1.5', marginBottom: '20px' }}>
          Developed a speech recognition system capable of executing commands, including real-time route finding across India using OSMnx and Folium.<br />
          Integrated command datasets for additional functionalities, including analyzing time and space complexity.<br />
          Enhanced user experience with interactive map visualizations and detailed route insights.<br />
          Included python code time and space complexity calculator.<br />
        </p>

        <h1 className="heading" style={{ color: 'cyan', fontWeight: 'bold', fontSize: '4vh', marginBottom: '15px' }}>
          Computer Vision-Based Edge Detection and Image Classification
        </h1>
        <p className="text" style={{ color: 'white', fontSize: '2.5vh', lineHeight: '1.5', marginBottom: '20px' }}>
          Implemented Sobel edge detection using matrix multiplication filters to identify edges in images effectively.<br />
          Developed a robust edge detection pipeline with Canny edge detection for enhanced precision in detecting object boundaries.<br />
          Used the VGG16 pre-trained dataset to detect and focus on key elements within images, providing detailed visual analysis.<br />
          Optimized the system for scalability and accuracy in various computer vision applications.<br />
        </p>

        <h1 className="heading" style={{ color: 'cyan', fontWeight: 'bold', fontSize: '4vh', marginBottom: '15px' }}>
          Real-Time Chat Application
        </h1>
        <p className="text" style={{ color: 'white', fontSize: '2.5vh', lineHeight: '1.5', marginBottom: '20px' }}>
          Built a real-time chat app using Node.js and Socket.io, supporting multiple chat rooms and private messaging.<br />
          Implemented a secure authentication system with JWT, ensuring user data protection.<br />
          Improved usability with responsive design and optimized backend performance for handling concurrent users.<br />
        </p>

        <h1 className="heading" style={{ color: 'cyan', fontWeight: 'bold', fontSize: '4vh', marginBottom: '15px' }}>
          AI-Powered Crop Rotation Planner
        </h1>
        <p className="text" style={{ color: 'white', fontSize: '2.5vh', lineHeight: '1.5', marginBottom: '20px' }}>
          Created an AI-based planner for suggesting crop rotation strategies based on soil conditions and historical data.<br />
          Integrated FastAPI backend with a React frontend to provide real-time data visualization.<br />
          Used machine learning models to analyze agricultural data and predict optimal crop sequences for maximum yield.<br />
        </p>

        <h1 className="heading" style={{ color: 'cyan', fontWeight: 'bold', fontSize: '4vh', marginBottom: '15px' }}>
          AI-Powered Expert System for Blood Disease Diagnosis
        </h1>
        <p className="text" style={{ color: 'white', fontSize: '2.5vh', lineHeight: '1.5', marginBottom: '20px' }}>
          Designed an expert system similar to MYCIN for diagnosing blood-related diseases.<br />
          Leveraged knowledge representation techniques and inference rules to emulate expert-level decision-making.<br />
          Focused on building an accessible, user-friendly interface for healthcare professionals.<br />
        </p>
      </div>

      <div className="timeline" style={{ width: '100%', maxWidth: '25%', background: 'linear-gradient(180deg, #333, #111)', padding: '20px', color: 'white', marginTop: '20px' }}>
        <h2 className="timeline-heading" style={{ fontSize: '3.5vh', marginBottom: '15px', textAlign: 'center' }}>Projects</h2>
        <div className="timeline-date-range" style={{ marginBottom: '15px' }}>
        </div>
        <div className="timeline-item" style={{ margin: '10px 0', padding: '8px', fontSize: '2.5vh', borderLeft: '4px solid cyan' }}>Hierarchical Language Model</div>
        <div className="timeline-item" style={{ margin: '10px 0', padding: '8px', fontSize: '2.5vh', borderLeft: '4px solid cyan' }}>Speech-Recognition Command Execution</div>
        <div className="timeline-item" style={{ margin: '10px 0', padding: '8px', fontSize: '2.5vh', borderLeft: '4px solid cyan' }}>Edge Detection & Image Analysis</div>
        <div className="timeline-item" style={{ margin: '10px 0', padding: '8px', fontSize: '2.5vh', borderLeft: '4px solid cyan' }}>Real-Time Chat Application</div>
        <div className="timeline-item" style={{ margin: '10px 0', padding: '8px', fontSize: '2.5vh', borderLeft: '4px solid cyan' }}>AI Crop Rotation Planner</div>
        <div className="timeline-item" style={{ margin: '10px 0', padding: '8px', fontSize: '2.5vh', borderLeft: '4px solid cyan' }}>AI Expert System for Blood Disease</div>
      </div>
    </div>
  );
};

export default Projects;
