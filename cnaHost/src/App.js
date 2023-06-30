import React from "react";
import "./styles.css";
import Cna from "../src/images/cnalogo.png";
import Home from "../src/images/Homescreen.png";
import { Outlet } from "react-router-dom";

const App = () => {
  const [value, setSelectedItem] = React.useState("/")
  React.useEffect(() => {
    if(value === "Get a Quote"){
      window.location.assign("/getQuote")
    }
  }, [value])
  const LeftNavData = ["Get a Quote", "Quote Advantage", "Endorse Policy", "Work in Progress", "CNA appetite", "Service my Accounts", "Reference Center", "Support Tools", "Supplemental Apps", "Learn CNA Central", "My Profile", "Contact Us" ]
  const handleClick = (value) => {
    setSelectedItem(value)
  }
  const handleImageClick = () => {
    window.location.assign("/")
  }
  return (
    <div className="App">
    <div style={{ display: "flex" }}>
    <div style={{ width: "25%", display: "flex", justifyContent: "left" }}><img src={Cna} onClick={handleImageClick}/></div>
    <div style={{ marginLeft:"-1vw", backgroundColor: "#d3d3d1", height: "10vh", width: "64vw", clipPath: "polygon( 0% 20%, 5% 0%, 100% 0%, 100% 0%, 95% 100%, 100% 100%, 0% 100%, 0 95%)"}}></div>
    <div style={{ marginLeft: "-2vw", backgroundColor: "#406c8c", height: "10vh", width: "30vw", clipPath: "polygon( 0% 100%, 10% 0%, 100% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 100%, 0 100%)"}}></div>
    </div>
      <div style={{ display: "flex", gap: "1vw" }}>
      <div style={{ width: "20%", height: "85vh", display: "flex", flexDirection: "column" }}>
        {LeftNavData.map((e) =>
          <button onClick={() => handleClick(e)} style={{ display: "flex", alignItems: "center", justifyContent:"left",backgroundColor: "#406c8c", height: "3rem", cursor: "pointer", color: "#FFFFFF"}}>
            <span style={{ fontWeight: "600", fontSize: "16px"}}>{e}</span>
          </button>
        )}
        <div style={{ border: "1px solid black", padding: "16px"}}>This is from <b>HOST MICRO-FRONTEND</b></div>
      </div>
      {window.location.pathname === "/" ?  <img src={Home} style={{ height: "90%" }}/> : 
      <Outlet />
      }
      </div>
    </div>
  );
};

export default App;

{/* <div>
{value === "getQuote" ?
<div>
<Suspense fallback={<span>Loading...</span>}>
  <FirstApp onChange={(e) => setName(e.target.value)} />
</Suspense>
</div>
: 
value === "endorsePolicy" ? 
"endorsePolicy micro app" :
null}
</div> */}