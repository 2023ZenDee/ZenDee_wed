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
				categoryField: "country",
				endAngle: 270
			})
		);

		series.states.create("hidden", {
			endAngle: -90
		});

		series.data.setAll([{
			country: "서울",
			value: 501.9
		}, {
			country: "부산",
			value: 301.9
		}, {
			country: "광주",
			value: 201.1
		}, {
			country: "울산",
			value: 165.8
		}, {
			country: "대전",
			value: 139.9
		}, {
			country: "대구",
			value: 128.3
		}, {
			country: "창원",
			value: 99
		}]);

		series.appear(1000, 100);


	}
	render() {
		return (
			<>
				<h2>인기 지역</h2>
				<div id="PostCount"style={{ width: "100%", height: "500px" }}></div>
			</>
		);
	}
}
export default Postcount;