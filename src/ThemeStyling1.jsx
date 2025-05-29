import React from "react";

const Triangle = () =>
{
  return(
    <div className="triangle" style={{width:0, height:0, borderLeft:"20px solid transparent", borderRight:"20px solid transparent", borderBottom:"40px solid red", position:"absolute", bottom:"10px", left:"50%", transform:"translateX(-50%)",}} />
  )
}

const color = {
  theme1: {
    backgroundColor: 'black',
    
    
},
theme2: {
  backgroundColor: 'pink',
  
  
},
theme3: {
  backgroundColor: 'red',
  
  
},
theme4: {
  backgroundColor: 'violet',
  
  
},
theme5: {
  backgroundColor: 'purple',
  
  
}
};



export default function ThemeStyling1 () 
{
    return(
      <>
      <div className="container">
      <div class="row row-cols-1 row-cols-sm-5 g-4 text-center p-5">
        {/* {Object.keys()} */}
      <div class="col themed-grid-col border border-3" style={color.theme1}>
        <div style={{width:"2px", height:"2px", borderLeft:"20px solid transparent", borderRight:"20px solid transparent", borderBottom:"40px solid red", position:"center",bottom:"10px", left:"50%", transform:"translateX(-50%)",}} />
      </div>
      <div class="col themed-grid-col border border-3" style={color.theme1}></div>
      <div class="col themed-grid-col border border-3" style={color.theme1}></div>
      <div class="col themed-grid-col border border-3" style={color.theme1}></div>
      <div class="col themed-grid-col border border-3" style={color.theme1}><code>.col</code> with <code>.gx-4</code> gutters</div>
      <div class="col themed-grid-col border border-3" style={color.theme2}></div>
      <div class="col themed-grid-col border border-3" style={color.theme2}></div>
      <div class="col themed-grid-col border border-3" style={color.theme2}></div>
      <div class="col themed-grid-col border border-3" style={color.theme2}></div>
      <div class="col themed-grid-col border border-3" style={color.theme2}><code>.col</code> with <code>.gx-4</code> gutters</div>
      <div class="col themed-grid-col border border-3" style={color.theme3}></div>
      <div class="col themed-grid-col border border-3" style={color.theme3}></div>
      <div class="col themed-grid-col border border-3" style={color.theme3}></div>
      <div class="col themed-grid-col border border-3" style={color.theme3}></div>
      <div class="col themed-grid-col border border-3" style={color.theme3}><code>.col</code> with <code>.gx-4</code> gutters</div>
      <div class="col themed-grid-col border border-3" style={color.theme4}></div>
      <div class="col themed-grid-col border border-3" style={color.theme4}></div>
      <div class="col themed-grid-col border border-3" style={color.theme4}></div>
      <div class="col themed-grid-col border border-3" style={color.theme4}></div>
      <div class="col themed-grid-col border border-3" style={color.theme4}><code>.col</code> with <code>.gx-4</code> gutters</div>
      <div class="col themed-grid-col border border-3" style={color.theme5}></div>
      <div class="col themed-grid-col border border-3" style={color.theme5}></div>
      <div class="col themed-grid-col border border-3" style={color.theme5}></div>
      <div class="col themed-grid-col border border-3" style={color.theme5}></div>
      <div  style={color.theme5}><code>.col</code> with <code>.gx-4</code> gutters</div>
      </div>
      </div>
      </>
    );
}; 