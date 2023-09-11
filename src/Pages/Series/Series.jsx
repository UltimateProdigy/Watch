import React from "react";
import Series from "./Seriescard";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Tvseries = () => {
    return (
        <div>
            <Sidebar />
            <h1 className="tvseries">TV series</h1>
            <div className="seriescomponent">
            <Series />
            </div>
        </div>
    )
}

export default Tvseries;