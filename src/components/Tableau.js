import React, {useRef, useEffect, Component } from "react";

const { tableau } = window;

class Tableau extends Component{
    render() {

    const ref = useRef(null);
    const url = "https://public.tableau.com/views/RTCHSData/Sheet1?:language=en&:display_count=y&:origin=viz_share_link";

    function initViz() {   
       new tableau.Viz(ref.current, url);
    }
        
    useEffect(() => {
        initViz();
    },[])
    return (
    <div> 
        <p>Test to see if Tableau component is displaying</p>
        <div ref={ref}></div>
    </div>
    );
}

}
export default Tableau;