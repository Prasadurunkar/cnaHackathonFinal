import React from "react";

const Topbar = () => {
    return (
        <div style={{ height: "10vh" }}>
            <div style={{ display: "flex", justifyContent: "flex-end"}}>
                <div style={{display: "flex", width: "78vw", height: "4vh", gap: "2vw", justifyContent: "center"}}>
                <div style={{ width: "100%" }}>
                    <div style={{ width: "100%"}}>
                            <span style={{ fontWeight: "600"}}>Customer Info</span>
                    </div>
                    <div style={{ width: "100%", height: "2vh", border: "1px solid black",position: "relative", backgroundColor: "#d3d3d1"}}>
                        <div style={{ width: "25%", height: "2vh", backgroundColor:"#004890", position: "absolute", top:0}}></div>
                    </div>
                    
                </div>
                <div style={{ width: "100%"}}>
                    <div style={{ width: "100%"}}>
                            Quote
                    </div>
                    <div style={{ width: "100%", height: "2vh", border: "1px solid black",position: "relative", backgroundColor: "#d3d3d1"}}>
                        <div style={{ width: "0%", height: "2vh", backgroundColor:"#004890", position: "absolute", top:0}}></div>
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
            <div style={{ display: "flex", marginTop: "2vw", width: "78vw"}}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1vw", width: "100%"}}>
                    <div style={{ backgroundColor: "grey", height: "1vw", width: "1vw", clipPath: "polygon(50% 0, 100% 100%, 0 100%)", transform: "rotate(90deg)"}}></div>
                    <div>
                        <span style={{ fontWeight: "600"}}>Classify Customer</span>
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1vw", width: "100%"}}>
                    <div style={{ backgroundColor: "grey", height: "1vw", width: "1vw", clipPath: "polygon(50% 0, 100% 100%, 0 100%)", transform: "rotate(90deg)"}}></div>
                    <div>
                        Customer Information
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1vw", width: "100%"}}>
                    <div style={{ backgroundColor: "grey", height: "1vw", width: "1vw", clipPath: "polygon(50% 0, 100% 100%, 0 100%)", transform: "rotate(90deg)"}}></div>
                    <div>
                        Product Selection
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1vw", width: "100%"}}>
                    <div style={{ backgroundColor: "grey", height: "1vw", width: "1vw", clipPath: "polygon(50% 0, 100% 100%, 0 100%)", transform: "rotate(90deg)"}}></div>
                    <div>
                        Underwriting Statements
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Topbar;