import React from "react";

const SkillsTable = () => {
  const skills = [
    {
      category: "AI/ML Expertise",
      details:
        "Strong foundation in Python with hands-on experience in AI/ML frameworks such as TensorFlow, PyTorch, and Scikit-learn.",
    },
    {
      category: "Computer Vision",
      details:
        "Proficient in OpenCV for image and video processing, object detection, and recognition tasks.",
    },
    {
      category: "Neural Networks",
      details:
        "Skilled in implementing deep learning models, including GANs (Generative Adversarial Networks) for generative tasks and advanced feature learning.",
    },
    {
      category: "LLM & GenAI",
      details:
        "Knowledge of Large Language Models (LLMs) and Generative AI for tasks such as text generation, summarization, and question answering.",
    },
    {
      category: "Frontend Development",
      details:
        "Proficient in building interactive and responsive user interfaces using React.js, integrating dynamic components and ensuring a seamless user experience.",
    },
    {
      category: "Backend Development",
      details:
        "Skilled in developing robust server-side applications with Node.js, including RESTful APIs and real-time data handling.",
    },
    {
      category: "Database Management",
      details:
        "Expertise in managing databases, including relational (SQL) and distributed database systems, ensuring high availability and efficient data retrieval.",
    },
    {
      category: "Voice AI Models",
      details:
        "Experienced in designing and implementing voice-based AI systems, including speech recognition and voice synthesis applications.",
    },
    {
      category: "End-to-End Development",
      details:
        "Expertise in building and deploying full-stack web applications that integrate AI/ML models for intelligent and dynamic user experiences.",
    },
  ];

  return (
    <div style={{margin: "5vh", fontFamily: "Arial, sans-serif" }}>
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "2px solid black",
            backgroundColor: "#2c2f33",
            color: "white",
            fontSize: "14px",
          }}
        >
          <thead>
            <tr style={{backgroundColor: "#23272a" }}>
              <th
                style={{
                  padding: "2vh",
                  textAlign: "left",
                  border: "2px solid black",
                  color: "cyan",
                  fontWeight: "bolder",
                  minWidth: "150px",
                }}
              >
                Skill Category
              </th>
              <th
                style={{
                  padding: "2vh",
                  textAlign: "left",
                  border: "2px solid black",
                  minWidth: "300px",
                }}
              >
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#3a3d42" : "#2c2f33",
                }}
              >
                <td
                  style={{
                    padding: "2vh",
                    border: "2px solid black",
                    color: "cyan",
                    fontWeight: "bold",
                  }}
                >
                  {skill.category}
                </td>
                <td
                  style={{
                    padding: "2vh",
                    border: "2px solid black",
                  }}
                >
                  {skill.details}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SkillsTable;
