import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div style={{ height: "100vh"}}>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
export default Home;