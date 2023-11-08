import React, {useCallback, useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import Instance from "../Instance"

const RegionPost = () => {
  const regionPath = "/admin/statistics/issues/region"
 
  const fetchData = async () => {

    try{
      const res = await Instance.get(regionPath)
      const dataFromServer = Object.values(res.data.data);
      const newData = dataFromServer.map((item) => ({
        country : item.region,
        value : item.value
      }))
        return newData;

    } catch (error){
        console.log("데이터 불러오기 실패", error);
        return [];
      }
  }
  useCallback(() => {
    fetchData();
  },[])
  useEffect(() => {
    fetchData().then((newData) => {
    const root = am5.Root.new("RegionPost");

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      pinchZoomX: true,
    }));

    const cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);

    const xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
    xRenderer.labels.template.setAll({
      rotation: 45,
      centerY: am5.p50,
      centerX: am5.p100,
      paddingRight: -15,
    });

    xRenderer.grid.template.setAll({
      location: 1,
    });

    const xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      maxDeviation: 0.3,
      categoryField: "country",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {}),
    }));

    const yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation: 0.3,
      renderer: am5xy.AxisRendererY.new(root, {
        strokeOpacity: 0.1,
      }),
    }));

    const series = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: "Series 1",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      sequencedInterpolation: true,
      categoryXField: "country",
      tooltip: am5.Tooltip.new(root, {
        labelText: "{valueY}",
      }),
    }));

    series.columns.template.setAll({cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0});
    series.columns.template.adapters.add("fill", function(fill, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });
    series.columns.template.adapters.add("stroke", function(stroke, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });
    let data = [...newData];

    xAxis.data.setAll(data);
    series.data.setAll(data);

    series.appear(10);
    chart.appear(10, 10);

  });
  }, []);

  return (
    <>
      <h2>지역별 게시물 수</h2>
      <div id="RegionPost" style={{ width: "100%", height: "500px" }}></div>
    </>
  );
};

export default RegionPost;