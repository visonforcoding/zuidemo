function exchange(that){
   				$(that).find('i').toggleClass('change');
   			}
$(function () {
		// 				Highcharts.setOptions({
		//     				 colors: ['#ff7473']
		// 			 });
    $('#container').highcharts({  
    	 credits: {
         enabled:false
      },
        chart: {
            type: 'column'                           //指定图表的类型，默认是折线图（line）
        },
        title: {
            text: ''                 //指定图表标题
        },
        colors:
        	 ['#ff7473', '#ccc', '#90ed7d', '#f7a35c', '#8085e9']
        ,
        xAxis: {
            categories: ['拖车救援', '搭电救援', '换胎&充气救援','紧急救援','取消救援'],
        },
        yAxis: {
            title: {
                text: '订单总数(包含已取消)'                 //指定y轴的标题
            }
        },
         legend: {
            align: 'right',
            verticalAlign: 'top',
            x: 0,
            y: 10
        },
          plotOptions: {
            series: {
                colorByPoint: true
            }
        },
        series: [{ 
        	//指定数据列
        	name:'日期',
            data: [100,300,90,400,200],
            colors:['#ff7473', '#47b8e0', '#ffc952', '#8fc31f', '#34314c']//数据
        }]
    });
 
    $('#driver').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        credits: {
         enabled:false
      },
        title: {
            text: ''
        },
          plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                size:"80%",
                dataLabels: {
                    enabled: false
                }
            }
        },
        series: [{
            type: 'pie',
            name: '',
            data: [
                ['忙碌', 45.0],
                ['空闲', 26.8],
                ['下线', 8.5],
            ],
            colors:['#ff7473', '#47b8e0', '#ffc952']//数据
        }]
    });
    //柱状图 营收
      $('#cash').highcharts({  
    	 credits: {
         enabled:false
      },
        chart: {
            type: 'column'                           //指定图表的类型，默认是折线图（line）
        },
        title: {
            text: ''                 //指定图表标题
        },
        colors:
        	 ['#47b8e0', '#ccc', '#90ed7d', '#f7a35c', '#8085e9']
        ,
        xAxis: {
            categories: ['1月', '2月', '3月','4月','5月','6月'],
        },
        yAxis: {
            title: {
                text: '订单总数(包含已取消)'                 //指定y轴的标题
            }
        },
         legend: {
            align: 'right',
            verticalAlign: 'top',
            x: 0,
            y: 10
        },
        series: [{ 
        	//指定数据列
        	name:'日期',
            data: [1000,3000,900,4000,2000,5000],
        }]
    });
 
    $('#driver').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        credits: {
         enabled:false
      },
        title: {
            text: ''
        },
          plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                size:"80%",
                dataLabels: {
                    enabled: false
                }
            }
        },
        series: [{
            type: 'pie',
            name: '',
            data: [
                ['忙碌', 45.0],
                ['空闲', 26.8],
                ['下线', 8.5],
            ],
            colors:['#ff7473', '#47b8e0', '#ffc952']//数据
        }]
    });
    //各救援情况
     $('#flagDay').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        credits: {
         enabled:false
      },
        title: {
            text: ''
        },
             plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                size:"80%",
                dataLabels: {
                    enabled: false
                }
            }
        },
        series: [{
            type: 'pie',
            name: '',
            data: [
                ['拖车救援', 45.0],
                ['换胎救援', 26.8],
                ['搭电救援', 8.5],
                 ['困境救援', 45.0],
                ['紧急加水', 26.8],
                ['现场抢修', 8.5],
                 ['充气救援', 45.0],
                ['地库救援', 26.8],
                ['其它', 20]
            ],
            states:{
            hover:{
                enabled:false
            }
        },
            colors:['#ff7473', '#47b8e0', '#ffc952','#34314c','#247ba0','#70c1b3','#ae5da1','#80c269','#898989']//数据
        }]
    });
});