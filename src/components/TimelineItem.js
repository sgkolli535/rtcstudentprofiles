import React from 'react';

const TimelineItem = ({data}) => (
    <div className = "timeline-item">
        <div className = "timeline-item-content">
        <span className = "circle"></span>
            <span className = "tag" style= {{background: data.category.color}}>
                {data.category.tag}
            </span>
            <span className = "year">
                {data.year}</span>
            <p> {data.text}
            <br></br>{data.email || data.city}{data.comma} {data.state}</p>
        </div>

    </div>
);

export default TimelineItem;