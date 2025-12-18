import { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => (c > 0 ? c - 1 : 0));
  const reset = () => setCount(0);
  const incrementFive = () => setCount((c) => c + 5);
  const decrementFive = () => setCount((c) => (c >= 5 ? c - 5 : 0));

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#0f172a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="panel">
        <h1 className="title">Counter</h1>

        {/* Counter Display */}
        <div className="counter-display">
          {count === 0 ? "" : String(count).padStart(2, "0")}
        </div>

        {/* Buttons */}
        <div className="controls">
          {/* + and - */}
          <div className="row">
            <button onClick={increment} className="btn big">+</button>
            <button onClick={decrement} className="btn big">−</button>
          </div>

          {/* Reset */}
          <button onClick={reset} className="btn reset">⟳</button>

          {/* +5 and -5 */}
          <div className="row">
            <button onClick={incrementFive} className="btn small">+5</button>
            <button onClick={decrementFive} className="btn small">−5</button>
          </div>
        </div>
      </div>

      <style>{`
        .panel {
          background: #020617;
          color: white;
          padding: 28px;
          border-radius: 24px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.6);
          text-align: center;
          width: 320px;
        }
        .title {
          font-size: 22px;
          margin-bottom: 16px;
        }
        .counter-display {
          background: black;
          border: 3px solid #0f172a;
          border-radius: 14px;
          min-height: 64px;
          margin-bottom: 28px;
          font-size: 44px;
          font-family: 'Courier New', monospace;
          letter-spacing: 8px;
          color: #22c55e;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .controls {
          display: flex;
          flex-direction: column;
          gap: 22px;
          align-items: center;
        }
        .row {
          display: flex;
          gap: 24px;
        }
        .btn {
          background: linear-gradient(145deg, #e5e7eb, #cbd5e1);
          background-size: cover;
          background-position: center;
          border-radius: 50%;
          border: none;
          color: #0f172a;
          font-weight: bold;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          box-shadow: inset 0 0 0 2px rgba(0,0,0,0.25), 0 6px 12px rgba(0,0,0,0.4);
          filter: brightness(0.95) saturate(1.1);
        }
        .btn:hover { transform: scale(1.08); }
        .big { width: 80px; height: 80px; font-size: 28px; }
        .small { width: 60px; height: 60px; font-size: 18px; }
        .reset { width: 70px; height: 70px; font-size: 22px; }
      `}</style>
    </div>
  );
}
