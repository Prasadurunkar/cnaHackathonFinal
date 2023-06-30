import React from "react";

const Topbar = () => {
    const Flow = ["Policy Info", "Name Insured", "Location", "Classes", "Options", "Waviers", "Pricing"]
    return (
        <div style={{ height: "10vh" }}>
            <div style={{ display: "flex", justifyContent: "flex-end"}}>
                <div style={{display: "flex", width: "78vw", height: "4vh", gap: "2vw", justifyContent: "center"}}>
                <div style={{ width: "100%" }}>
                    <div style={{ width: "100%"}}>
                            <span >Customer Info</span>
                    </div>
                    <div style={{ width: "100%", height: "2vh", border: "1px solid black",position: "relative", backgroundColor: "#d3d3d1"}}>
                        <div style={{ width: "100%", height: "2vh", backgroundColor:"#004890", position: "absolute", top:0}}></div>
                    </div>
                    
                </div>
                <div style={{ width: "100%"}}>
                    <div style={{ width: "100%"}}>
                    <span style={{ fontWeight: "600"}}>Quote</span>
                    </div>
                    <div style={{ width: "100%", height: "2vh", border: "1px solid black",position: "relative", backgroundColor: "#d3d3d1"}}>
                        <div style={{ width: "10%", height: "2vh", backgroundColor:"#004890", position: "absolute", top:0}}></div>
                    </div>
                </div>
                <div style={{ width: "100%"}}>
                    <div style={{ width: "100%"}}>
                            Issue
                    </div>
                    <div style={{ width: "100%", height: "2vh", border: "1px solid black",position: "relative", backgroundColor: "#d3d3d1"}}>
                        <div style={{ width: "0%", height: "2vh", backgroundColor:"#004890", position: "absolute", top:0}}></div>
                    </div>
                </div>
                </div>
            </div>
            <div style={{ display: "flex", marginTop: "2vw", width: "78vw", height: "4vh"}}>
            <button style={{ border: "none", borderRight: "1px solid #D2D2D2", width: "80%"}}>
                <span style={{ fontWeight: "700", fontSize: "14px"}}>Referrals</span>
            </button>
            {Flow.map((e) =>
            <button style={{ display: "flex",width:"80%", alignItems: "center", justifyContent:"left", cursor: "pointer", color: "#282829", border: "none", borderRight: "1px solid #D2D2D2"}}>
                <span style={{ fontWeight: "600", fontSize: "12px"}}>{e}</span>
            </button>
            )}
            </div>
        </div>
    )
}
export default Topbar;