import { useEffect, useState } from "react";

const css = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700;800;900&display=swap');

.intro-overlay {
  position: fixed;
  inset: 0;
  background: #050816;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  font-family: 'Poppins', sans-serif;
  transition: opacity 0.7s ease, visibility 0.7s ease;
}
.intro-overlay.hide {
  opacity: 0;
  visibility: hidden;
}
.intro-overlay::before {
  content: "";
  position: fixed;
  inset: 0;
  background:
    radial-gradient(circle at 20% 30%, rgba(139,92,246,.3), transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(34,211,238,.2), transparent 40%);
  pointer-events: none;
}
.ring-wrapper {
  position: relative;
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 28px;
}
.ring-svg {
  position: absolute;
  inset: 0;
  animation: spinRing 2s linear infinite;
}
@keyframes spinRing {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
.avatar-circle {
  width: 104px;
  height: 104px;
  border-radius: 50%;
  background: #0b1025;
  border: 2px solid rgba(255,255,255,.1);
  overflow: hidden;
  z-index: 1;
  position: relative;
}
.avatar-circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.intro-name {
  font-size: 30px;
  font-weight: 800;
  color: #fff;
  letter-spacing: 1px;
  animation: fadeInUp 0.7s ease both;
  animation-delay: 0.2s;
}
.intro-name span {
  background: linear-gradient(90deg, #8b5cf6, #22d3ee);
  -webkit-background-clip: text;
  color: transparent;
}
.intro-role {
  margin-top: 8px;
  font-size: 13px;
  color: #a5b4fc;
  letter-spacing: 3px;
  text-transform: uppercase;
  animation: fadeInUp 0.7s ease both;
  animation-delay: 0.4s;
}
.progress-bar {
  margin-top: 40px;
  width: 180px;
  height: 3px;
  background: rgba(255,255,255,.1);
  border-radius: 99px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #8b5cf6, #22d3ee);
  border-radius: 99px;
  animation: fillBar 2.5s ease forwards;
}
@keyframes fillBar { to { width: 100%; } }
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
`;

export default function IntroScreen({ onDone }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    const timer = setTimeout(() => {
      setHide(true);
      setTimeout(onDone, 700);
    }, 2800);

    return () => {
      clearTimeout(timer);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className={`intro-overlay ${hide ? "hide" : ""}`}>
      <div className="ring-wrapper">
        <svg className="ring-svg" viewBox="0 0 140 140" fill="none">
          <defs>
            <linearGradient id="rg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="60%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle
            cx="70"
            cy="70"
            r="62"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="4"
          />
          <circle
            cx="70"
            cy="70"
            r="62"
            stroke="url(#rg)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="210 180"
          />
        </svg>
        <div className="avatar-circle">
          <img
            src="/rehan-photo.jpeg"
            alt="Md Rehan"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
      </div>

      <div className="intro-name">
        Md <span>Rehan</span>
      </div>
      <div className="intro-role">Laravel &amp; React Developer</div>
      <div className="progress-bar">
        <div className="progress-fill" />
      </div>
    </div>
  );
}
