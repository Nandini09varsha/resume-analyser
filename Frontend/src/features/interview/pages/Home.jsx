import React from "react";
import "../style/home.scss";
import { useAuth } from "../../auth/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();

  const logout = async () => {
    const success = await handleLogout();

    if (success) {
      navigate("/login");
    }
  };
  return (
    <main className="home-page">
      <header className="topbar">
        <div className="brand">
          Apex <span>AI</span>
        </div>

        <div className="topbar-actions">
          <button className="theme-button">🌙</button>

          <button className="signout-button" onClick={logout}>
            Sign Out
          </button>
        </div>
      </header>

      <section className="hero">
        <h1>Generate Your Interview Report</h1>
        <p>
          Leverage our elite AI Coach to transform your resume and job
          requirements into a high-performance interview strategy.
        </p>
      </section>

      <section className="report-builder">
        <div className="left-panel">
          <label htmlFor="jobDescription" className="panel-title">
            🗎 Job Description
          </label>
          <textarea
            name="jobDescription"
            id="jobDescription"
            placeholder="Paste the job description here..."
          ></textarea>
        </div>

        <div className="right-panel">
          <div className="upload-panel">
            <p className="panel-title">📄 Resume</p>
            <div className="upload-box">
              <div className="upload-icon">☁</div>
              <p>Drag &amp; drop your CV here or click to browse</p>
              <label className="upload-button" htmlFor="resume">
                Upload File
              </label>
              <input
                hidden
                type="file"
                name="resume"
                id="resume"
                accept=".pdf"
              />
            </div>
          </div>

          <div className="self-panel">
            <label htmlFor="selfDescription" className="panel-title">
              🧑 Self Description
            </label>
            <textarea
              name="selfDescription"
              id="selfDescription"
              placeholder="Add extra context about your experience, career goals, or specific concerns for this role..."
            ></textarea>
          </div>

          <button className="button primary-button generate-button">
            Generate Interview Report
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
