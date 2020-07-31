import React from 'react';
import timelineData from '../data';
import TimelineItem from './TimelineItem';
import '../vertical.css';

const Timeline = () => timelineData.length > 0 && (
    <div className = "timeline-container">
        {timelineData.map((data, idx) => (
            <TimelineItem data = {data} key = {idx} />

        ))}
    </div>
);

export default Timeline;