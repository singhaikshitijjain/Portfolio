import React from 'react';

const PublicationsAndCertifications = () => {
  return (
    <div>
      <div style={{ padding: '2vh' }}>
        <h3 style={{ color: 'cyan', fontSize: '4vh' , fontWeight:'bold'}}>Certifications</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ fontSize: '3vh' }}>
            <strong style={{ textDecorationColor:'cyan',textDecoration:'underline',fontWeight:'bolder'}}>NAIP Certification (RV University, Bangalore)</strong> - Completed from December 18 to 27, 2024, in Drafting and Review Paper Writing.
          </li>
          <li style={{ fontSize: '3vh' }}>
            <strong style={{ textDecorationColor:'cyan',textDecoration:'underline',fontWeight:'bolder'}}>HackerRank Certification</strong> - Completed Python certification with a focus on solving problems and mastering the language.
          </li>
        </ul>
      </div>

      <div style={{ padding: '2vh' }}>
        <h3 style={{ color: 'cyan', fontSize: '4vh', fontWeight:'bold' }}>Publication</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ fontSize: '3vh' }}>
            <strong style={{textDecorationColor:'cyan',textDecoration:'underline', fontWeight:'bolder'}}>NECECV (Python Package)</strong> - A Python package published to PyPI, focusing on neural network-based models for computer vision tasks.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PublicationsAndCertifications;
