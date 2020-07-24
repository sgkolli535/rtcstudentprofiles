import React, {useRef, useEffect } from "react";

const { tableau } = window;

function Tableau(){
    const ref = useRef(null);
    const url = "https://public.tableau.com/views/RTCDataPipelineVisualizations/Top50Colleges?:language=en&:display_count=y&:origin=viz_share_link";

    function initViz() {   
       new tableau.Viz(ref.current, url);
    }
        
    useEffect(() => {
        initViz();
    },[])
    return (
    <div> 
        {/* <p>Test to see if Tableau component is displaying</p> */}
        <div ref={ref}></div>
    </div>
    );
}

export default Tableau;