import React from "react";

function Hello({color,name,isSpecial}){
    return <div style={{color}}>
        {isSpecial && <b>*</b>}
        안녕 나는"{name}"라고해
            
    </div>
    
}

export default Hello;