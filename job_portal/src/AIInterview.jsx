import React, { useState } from "react";

const AIInterview = () => {
  const [jobRole, setJobRole] = useState("");
  const [experience, setExperience] = useState("Fresher");
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);
  const [feedback, setFeedback] = useState("");

  // ⚠️ Put your Groq API key here (only for demo)
  const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

  // Start Interview - Generate Questions using AI
  const startInterview = async () => {
    if (!jobRole) {
      alert("Please enter Job Role");
      return;
    }

    setLoading(true);

    const prompt = `
        You are an experienced technical interviewer.
        Create exactly 8 high-quality interview questions for the role of "${jobRole}".
        Candidate experience: ${experience}.

        Rules:
        - Mix of basic, intermediate and advanced questions
        - dont repeat the questions
        - every user should have different questions even re-entered the interview
        - Include both technical and behavioral questions
        - Return only the questions in a numbered list
        - Do not add any extra text
        `;

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [{ role: "user", content: prompt }],
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      const text = data.choices[0].message.content;

      // Convert text into array of questions
      const generatedQuestions = text
        .split("\n")
        .filter((line) => line.trim().match(/^\d+\./))
        .map((line) => line.replace(/^\d+\.\s*/, "").trim());

      setQuestions(generatedQuestions);
      setStarted(true);
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert("Failed to generate questions");
      setLoading(false);
    }
  };

  // Submit Answer
  const submitAnswer = () => {
    if (!currentAnswer.trim()) {
      alert("Please write your answer");
      return;
    }

    const updatedAnswers = [...answers, currentAnswer];
    setAnswers(updatedAnswers);
    setCurrentAnswer("");

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Interview finished → Get Feedback
      getFinalFeedback(updatedAnswers);
    }
  };

  // Get Final Feedback from AI
  const getFinalFeedback = async (allAnswers) => {
    setLoading(true);

    let conversation = `Job Role: ${jobRole}\nExperience: ${experience}\n\n`;
    questions.forEach((q, i) => {
      conversation += `Q${i + 1}: ${q}\nAnswer: ${allAnswers[i]}\n\n`;
    });

    const prompt = `
        You are a professional interviewer.
        Based on the following interview, give:
        1. Overall Score (out of 10)
        2. Strengths
        3. Areas of Improvement
        4. Final Recommendation (Hire / Maybe / Reject)

Interview:
${conversation}
`;

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [{ role: "user", content: prompt }],
          temperature: 0.6,
        }),
      });

      const data = await response.json();
      setFeedback(data.choices[0].message.content);
      setFinished(true);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  // ========== UI ==========

  if (!started) {
    return (
      <div style={{ maxWidth: "500px", margin: "50px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
        <h2>AI Mock Interview</h2>
        <p>This interview will be conducted like a real human mock test.</p>

        <div style={{ marginBottom: "15px" }}>
          <label>Job Role</label>
          <input
            type="text"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
            placeholder="e.g. React Developer, Full Stack, Java"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Experience</label>
          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          >
            <option>Fresher</option>
            <option>0-1 Year</option>
            <option>1-3 Years</option>
            <option>3+ Years</option>
          </select>
        </div>

        <button
          onClick={startInterview}
          disabled={loading}
          style={{ width: "100%", padding: "10px", background: "#2563eb", color: "white", border: "none", borderRadius: "6px" }}
        >
          {loading ? "Generating Questions..." : "Start Interview"}
        </button>
      </div>
    );
  }

  if (finished) {
  const isQualified = answers.length >= 5;

  return (
    <div style={{
      maxWidth: "750px",
      margin: "40px auto",
      padding: "30px",
      background: "#ffffff",
      borderRadius: "16px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      border: "1px solid #e5e7eb"
    }}>
      
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "25px" }}>
        <div style={{
          width: "70px",
          height: "70px",
          background: isQualified ? "#dcfce7" : "#fee2e2",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 15px",
          fontSize: "32px"
        }}>
          {isQualified ? "✓" : "✗"}
        </div>

        <h2 style={{ margin: "0 0 8px", color: "#111827", fontSize: "28px" }}>
          Interview Completed
        </h2>

        {/* Qualified / Not Qualified Badge */}
        <div style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "6px 18px",
          borderRadius: "50px",
          fontWeight: "600",
          fontSize: "15px",
          background: isQualified ? "#dcfce7" : "#fee2e2",
          color: isQualified ? "#166534" : "#991b1b"
        }}>
          {isQualified ? "Qualified" : "Not Qualified"}
        </div>

        <p style={{ margin: "12px 0 0", color: "#6b7280", fontSize: "15px" }}>
          You answered {answers.length} out of {questions.length} questions
        </p>
      </div>

      {/* Feedback Card */}
      <div style={{
        background: "#f9fafb",
        borderRadius: "12px",
        padding: "25px",
        border: "1px solid #e5e7eb",
        marginBottom: "25px",
        whiteSpace: "pre-wrap",
        lineHeight: "1.7",
        fontSize: "15.5px",
        color: "#374151"
      }}>
        {feedback}
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
        <button
          onClick={() => window.location.href = "/"}
          style={{
            padding: "12px 28px",
            background: "#6b7280",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "15px",
            fontWeight: "500",
            cursor: "pointer"
          }}
        >
          Home
        </button>

        <button
          onClick={() => window.location.reload()}
          style={{
            padding: "12px 28px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "15px",
            fontWeight: "500",
            cursor: "pointer"
          }}
        >
          Take Another Interview
        </button>
      </div>
    </div>
  );
}
  return (
    <div style={{ maxWidth: "700px", margin: "40px auto", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <h2>Mock Interview</h2>
        <span>Question {currentQuestion + 1} of {questions.length}</span>
      </div>

      <div style={{ background: "#f1f5f9", padding: "20px", borderRadius: "8px", marginBottom: "20px" }}>
        <strong>Interviewer:</strong>
        <p style={{ marginTop: "10px", fontSize: "18px" }}>{questions[currentQuestion]}</p>
      </div>

      <textarea
        value={currentAnswer}
        onChange={(e) => setCurrentAnswer(e.target.value)}
        placeholder="Type your answer here..."
        rows={6}
        style={{ width: "100%", padding: "12px", fontSize: "16px", borderRadius: "6px", border: "1px solid #ccc" }}
      />

      <button
        onClick={submitAnswer}
        disabled={loading}
        style={{
          marginTop: "15px",
          padding: "12px 25px",
          background: "#16a34a",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontSize: "16px",
        }}
      >
        {currentQuestion + 1 === questions.length ? "Finish Interview" : "Next Question"}
      </button>
    </div>
  );
};

export default AIInterview;