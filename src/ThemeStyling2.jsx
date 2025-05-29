import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const colors = {
    theme1: {background: "#ffcccc"},
    theme2: {background: "#cce5ff"},
    theme3: {background: "#d4edda"},
    theme4: {background: "#fff3cd"},
};

const Triangle = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
            <div className="row row-cols-5 g-4 text-center">
                {Object.keys(colors).map((theme, index) => (
                    <div key={index}
                    className="col themed-grid-col border border-3 position-relative" style={colors[theme]}>
                        <div className="triangle" style={{width:0, height:0, borderLeft:"20px solid transparent", borderRight:"20px solid transparent", borderBottom:"40px solid red", position:"absolute", bottom:"10px", left:"50%", transform:"translateX(-50%)",}}>

                        </div>
        </div>
            
                ))}
            </div>
        </div>
    );
};

export default Triangle;