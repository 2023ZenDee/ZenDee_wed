import React, { useCallback, useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import Instance from "../Instance";

const TimesPost = () => {
  const timePath = "/admin/statistics/issues/time";
  const fetchData = useCallback(async () => {
    try {
      const res = await Instance.get(timePath);
      console.log(res.data.data);
      const dataFromServer = Object.values(res.data.data);
      console.log(dataFromServer);
      const newData = dataFromServer.map((item) => ({
        hour: item.time,
        value: item.value + 1
      }));
      return newData;
    } catch (error) {
      console.log("데이터 불러오기 실패", error);
      return [];
    }
  }, [timePath]);

  useEffect(() => {
    fetchData().then((newData) => {
      let root = am5.Root.new("TimesPost");

      root.dateFormatter.setAll({
        dateFormat: "HH:00",
        dateFields: ["valueX"]
      });

      root.setThemes([am5themes_Animated.new(root)]);

      let chart = root.container.children.push(am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true
      }));

      let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
        behavior: "none"
      }));
      cursor.lineY.set("visible", false);

      let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "hour", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {}),
        tooltip: am5.Tooltip.new(root, {})
      }));

      let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        logarithmic: true,
        renderer: am5xy.AxisRendererY.new(root, {})
      }));

      let series = chart.series.push(am5xy.LineSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "hour",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueX}: {valueY}"
        })
      }));

      series.strokes.template.setAll({
        strokeWidth: 3
      });

      series.data.processor = am5.DataProcessor.new(root, {
        dateFormat: "HH:00",
        dateFields: ["hour"]
      });

      console.log(newData);
      let data = [...newData];

      series.data.setAll(data);

      chart.set("scrollbarX", am5.Scrollbar.new(root, {
        orientation: "horizontal"
      }));

      series.appear(100);
      chart.appear(100, 10);
    });
  }, [fetchData]);

  return (
    <>
      <h2>시간대별 게시물 수</h2>
      <div id="TimesPost" style={{ width: "100%", height: "500px" }}></div>
    </>
  );
};

export default TimesPost;
