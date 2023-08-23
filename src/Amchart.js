import React, { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated"

import am5percent from "@amcharts/amcharts5/percent";

const AmChart = (props) => {
    const chartID = props.chartID;
    console.log({chartID});

    useLayoutEffect(() => {
        const root = am5.Root.new(chartID);
        root.setThemes([am5themes_Animated.new(root)]);
        
        const chart = root.container.children.push(
            am5percent.PieChart.new(root, {
                endAngle: 270
            })
        );
        const series = chart.series.push(
            am5percent.PieSeries.new(root, {
                valueField: "value",
                categoryField: "category",
                endAngle: 270
            })
        );
        series.states.create("hidden", {
            endAngle: -90
        });
        const data = [
            {
                category: "Lithuania",
                value: 501.9
            }, {
                category: "Czechia",
                value: 301.9
            }, {
                category: "Ireland",
                value: 201.1
            }, {
                category: "Germany",
                value: 165.8
            }, {
                category: "Australia",
                value: 139.9
            }, {
                category: "Austria",
                value: 128.3
            }, {
                category: "UK",
                value: 99
            }
        ];

        series.data.setAll(data);
        series.appear(1000, 100);
    }, [chartID]);

    
    

    return (
        <div id={chartID}></div>
    );
};
export default AmChart;