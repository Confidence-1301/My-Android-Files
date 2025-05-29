import React from "react";
import DataPropsCars from "./DataPropsCar";

const DataPropsCar = () => {
    const carInfo=['Venza', 'Black', '1998', 'cardillac Society']
    return(
       <>
         <div style={{ marginLeft: '100px', fontSize: '40px'}}>
            <DataPropsCars
            name={carInfo[0]}
            color={carInfo[1]}
            model={carInfo[2]}
            year_production={carInfo[3]} />

         </div>
       </>
    );
}

export default DataPropsCar;