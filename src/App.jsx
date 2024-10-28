import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import "./App.css";

const App = () => {
  const [clicks, setClicks] = useState(() => {
    const savedGrades = localStorage.getItem("saved-grades");
    return savedGrades
      ? JSON.parse(savedGrades)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  const updateFeedback = (feedbackType) => {
    setClicks((oldClicks) => ({
      ...oldClicks,
      [feedbackType]: oldClicks[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem("saved-grades", JSON.stringify(clicks));
  }, [clicks]);

  return (
    <div className="container">
      <Description
        name="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options
        update={updateFeedback}
        reset={resetFeedback}
        total={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback clicks={clicks} total={totalFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
