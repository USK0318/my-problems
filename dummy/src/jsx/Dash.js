import '../css/dash.css'
import React, { useEffect } from 'react';
import Chart from 'chart.js';



const Dash = ({ title, chartId, chartType }) => {
    useEffect(() => {
        // Sample data for charts
        const chartData = {
            labels: chartType === 'pie' ? ['Active Users', 'Inactive Users'] :
                (chartType === 'bar' ? ['Jan', 'Feb', 'Mar', 'Apr', 'May'] : []),
            datasets: [{
                data: chartType === 'pie' ? [80, 20] :
                    (chartType === 'bar' ? [120, 150, 200, 180, 250] : []),
                backgroundColor: chartType === 'pie' ? ['#36a2eb', '#ff6384'] :
                    (chartType === 'bar' ? '#4caf50' : []),
            }]
        };

        // Create chart
        new Chart(document.getElementById(chartId), {
            type: chartType,
            data: chartData
        });
    }, [chartId, chartType]);

    return (
        <div className="card">
            <h2 className="card__title">{title}</h2>
            <canvas className="card__chart" id={chartId} width="300" height="150"></canvas>
        </div>
    );
}

export default Dash;
