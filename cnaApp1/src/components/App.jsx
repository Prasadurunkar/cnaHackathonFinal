import * as React from 'react';
import Topbar from './SmallComps/topbar';
const ClassifyCustomer = () => {
  
  const handleBack = () => {
    window.location.assign("/getQuote")
  }
  return (
    <div>
      <div style={{ position: "relative"}}>
        <Topbar />
      </div>
      <div style={{ marginTop: "10vh"}}>
        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center"}}>
          <span style={{ marginRight: "22.5vw"}}>Does Customer hire subcontractors?</span>
          <input type='radio' />
          <span style={{ marginRight: "10px"}}>Yes</span>
          <input type='radio' />
          <span>No  </span>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginTop: "20px"}}>
          <span style={{ marginRight: "20px"}}>Does the customer utilize Return to Work Program (RTW) for work-related injuries?</span>
          <input type='radio' />
          <span style={{ marginRight: "10px"}}>Yes</span>
          <input type='radio' />
          <span>No  </span>
        </div>
      </div>

      <div style={{ marginTop: "10vh", border: "1px solid black", padding: "16px"}}>
        This is from <b>THIRD MICRO-FRONTEND</b>
      </div>

      <div style={{ marginTop: "30vh"}}>
        <button onClick={handleBack} style={{ backgroundColor: "#FFFFFF", border: "1pt solid #3B6E8F", height: "4vh", width: "6vw", color: "#3B6E8F", marginRight: "1vw", cursor: "pointer"}}>BACK</button>
        <button style={{ backgroundColor: "#FFFFFF", border: "1pt solid #3B6E8F", height: "4vh", width: "8vw", color: "#3B6E8F",cursor: "pointer",marginRight: "1vw"}}>SAVE & EXIT</button>
        <button style={{ backgroundColor: "#FFFFFF", border: "1pt solid #3B6E8F", height: "4vh", width: "6vw", color: "#3B6E8F",cursor: "pointer"}}>CONTINUE</button>
      </div>

    </div>

  )
}
export default ClassifyCustomer;