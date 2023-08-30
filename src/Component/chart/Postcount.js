import React, {Component} from 'react';
import * as am5 from"@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated"
class Postcount extends Component {
	componentDidMount() {
		let root = am5.Root.new("PostCount");

		root.setThemes([
			am5themes_Animated.new(root)
		]);

		let chart = root.container.children.push(
			am5percent.PieChart.new(root, {
				endAngle: 270
			})
		);

		let series = chart.series.push(
			am5percent.PieSeries.new(root, {
				valueField: "value",
				categoryField: "category",
				endAngle: 270
			})
		);

		series.states.create("hidden", {
			endAngle: -90
		});

		series.data.setAll([{
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
		}]);

		series.appear(1000, 100);


	}
	render() {
		return (
			<>
				<h2>게시물 수</h2>
				<div id="PostCount"style={{ width: "100%", height: "500px" }}></div>
			</>
		);
	}
}
export default Postcount;