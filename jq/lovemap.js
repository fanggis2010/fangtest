(function() {
        require.config({
            paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
            },
            packages: [{
			name: 'BMap',
			location: './src',
			main: 'main'
		}]
        });
        
        // 使用
        require(
            [
                'echarts',
                'BMap', 
		        'echarts/chart/map', 
		        'echarts/chart/pie',
		        'echarts/chart/bar',
		        'echarts/chart/line'
            ],
            function (echarts,BMapExtension) {
                // 基于准备好的dom，初始化echarts图表
//              var myChart = ec.init(document.getElementById('main')); 
                var BMapExt = new BMapExtension($('#main')[0], BMap, echarts);//定义一张地图报表
		var map = BMapExt.getMap();//初始化地图
		var container = BMapExt.getEchartsContainer();//定义一个容器
		map.centerAndZoom(new BMap.Point(110.363319,30.558732), 5);//设置地图中心及地图等级
		map.enableScrollWheelZoom(true);//允许滚轮滑动
		var mapStyle = {
			features: ["road", "building", "water", "land"],
			style: "midnight"
		}//定义一个主题
		map.setMapStyle(mapStyle);
		option = {
			title: {
				text: 'The Citys We Will Go',
				x: 'center',
				textStyle: {
					color: '#FFFFFF',
					fontSize: 40
				}
			},
			color:['#00ff00', '#1BB2D8','#ff0000'],
			series: [
			/**第一步,声明每个点的坐标*/
			{
				type: 'map',
				mapType: 'none',
				data: [],
				geoCoord: {
					'1': [114.275931,30.6247],
					'2': [114.336298,30.643592],
					'3': [114.366768,30.620722],
					'4': [114.384878,30.590261],
					'5': [114.363319,30.558732],
					'6': [114.356132,30.51755],
					'7': [114.318188,30.530491],
					'8': [114.256097,30.545919],
					'9': [114.215853,30.564081],
					'10': [114.234825,30.591691],
					'11': [114.239424,30.612828],
					'青岛':[120.409705,36.138296],
					'呼和浩特':[111.699735,40.883904],
					'丽江':[100.23017,26.873759],
					'西宁':[101.734149,36.647747],
					'北京':[116.418642,39.927552],
					'徐州':[117.198227,34.273543],
					'南昌':[115.904667,28.67477],
					'济南':[117.032651,36.686654],
					'拉萨':[91.077515,29.652246],
					'厦门':[118.111193,24.506272],
					'三亚':[109.518505,18.282471]
				}
			},
			{			
				name:'1',
				type:'map',
				mapType:'none',
				data:[],
				
				markPoint: {
					symbol: 'emptyCircle',
					symbolSize: 10,
					effect: {
						show: true,
						shadowBlur: 0
					},
					itemStyle: {
						normal: {
							label: {
								show: false
							}
						},
						emphasis: {
							label: {
								show: false
							}
						}
					},
					data: [
						/**点的格式为{name:名称,value:数值}*/
						{name: '青岛',value:10}, 
						{name: '呼和浩特',value:10}, 
						{name: '丽江',value:10}, 
						{name: '西宁',value:10}, 
						{name: '北京',value:10}, 
						{name: '徐州',value:10}, 
						{name: '南昌',value:10}, 
						{name: '济南',value:10}, 
						{name: '拉萨',value:10}, 
						{name: '厦门',value:10}, 
						{name: '三亚',value:10}
					]
				}
//				markPoint: {
//					symbol: 'emptyCircle',
//					symbolSize: 10,
//					effect: {
//						show: true,
//						shadowBlur: 0
//					},
//					itemStyle: {
//						normal: {
//							label: {
//								show: false
//							}
//						},
//						emphasis: {
//							label: {
//								show: false
//							}
//						}
//					},
//					data: [
//						/**点的格式为{name:名称,value:数值}*/
//						{name: '青岛',value:10}, 
//						{name: '呼和浩特',value:10}, 
//						{name: '丽江',value:10}, 
//						{name: '西宁',value:10}, 
//						{name: '北京',value:10}, 
//						{name: '徐州',value:10}, 
//						{name: '南昌',value:10}, 
//						{name: '济南',value:10}, 
//						{name: '静安区',value:10}, 
//						{name: '拉萨',value:10}, 
//						{name: '厦门',value:10}, 
//						{name: '三亚',value:10}
//					]
//				}
//				markPoint: {
//					symbol: 'emptyCircle',
//					symbolSize: 10,
//					effect: {
//						show: true,
//						shadowBlur: 0
//					},
//					itemStyle: {
//						normal: {
//							label: {
//								show: false
//							}
//						},
//						emphasis: {
//							label: {
//								show: false
//							}
//						}
//					},
//					data: [
//						/**点的格式为{name:名称,value:数值}*/
//						{name: '青岛',value:10}, 
//						{name: '呼和浩特',value:10}, 
//						{name: '丽江',value:10}, 
//						{name: '西宁',value:10}, 
//						{name: '北京',value:10}, 
//						{name: '徐州',value:10}, 
//						{name: '南昌',value:10}, 
//						{name: '济南',value:10}, 
//						{name: '静安区',value:10}, 
//						{name: '拉萨',value:10}, 
//						{name: '厦门',value:10}, 
//						{name: '三亚',value:10}
//					]
//			}
			}
		]
		};	
		BMapExt.initECharts(container);//将地图放置在对应的容器内
		BMapExt.setOption(option);//将地图配置项赋给地图
	}
        );
      })();