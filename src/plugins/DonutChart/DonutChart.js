import React from 'react';
import DrawPath from './DrawPath';
import './DonutChart.scss';

const DonutChart = ({ outerRadius, innerRadius , content , chartsData}) => {
    chartsData = DrawPath(chartsData);

    return (
        <div className="DonutChart" style={{ width: outerRadius, height: outerRadius }}>
            {chartsData}
            <div className="DonutChart__inner" style={{width: innerRadius , height: innerRadius}}>
                {content.map((context, index) => {
                    let clasname = index === 0 ? "text-0" : "text-1";
            
                    return (
                        <p className={clasname}>{context}</p>
                    )
                })}
            </div>
        </div>
    );
};

export default DonutChart;