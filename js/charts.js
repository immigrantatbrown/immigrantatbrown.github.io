		$(function() {
            $('#map').highcharts('Map', {
        chart : {
            borderWidth : 1
        },

        title : {
            text : 'Countries of Migration'
        },
        subtitle : {
            text : "Countries where respodents or respodents' parents where born"
        },
        credits: {
            enabled:false
        },
        mapNavigation: {
            enabled: true
        },
        legend: {
            enabled: false
        },

        series : [{
            name: 'Country',
            mapData: Highcharts.maps['custom/world'],
            data: [{
                code: 'MX',
                value: 5
            }, {
                code: 'BR',
                value: 2
            }, {
                code: 'UY',
                value: 1
            },{
                code: 'PR',
                value: 3
            },{
                code: 'IN',
                value: 1
            },{
                code: 'CO',
                value: 2
            },{
                code: 'NG',
                value: 1
            },{
                code: 'GT',
                value: 2
            },{
                code: 'CN',
                value: 8
            },{
                code: 'TW',
                value: 3
            },{
                code: 'CU',
                value: 2
            },{
                code: 'MM',
                value: 1
            },{
                code: 'PK',
                value: 2
            },{
                code: 'AR',
                value: 1
            },{
                code: 'KR',
                value: 2
            },{
                code: 'VN',
                value: 7
            },{
                code: 'PH',
                value: 4
            },{
                code: 'NI',
                value: 1
            },{
                code: 'ZA',
                value: 1
            },{
                code: 'GY',
                value: 1
            },{
                code: 'DO',
                value: 2
            },{
                code: 'ID',
                value: 1
            },{
                code: 'JM',
                value: 2
            },{
                code: 'TT',
                value: 1
            },{
                code: 'JP',
                value: 3
            },{
                code: 'BB',
                value: 1
            },{
                code: 'KH',
                value: 1
            },{
                code: 'TH',
                value: 2
            },{
                code: 'BE',
                value: 1
            },{
                code: 'BS',
                value: 1
            },{
                code: 'GD',
                value: 1
            }],
            joinBy: ['iso-a2', 'code'],
            dataLabels: {
                enabled: false,
                
            },
            tooltip: {
                headerFormat: '',
                pointFormat: '<b>{point.name}</b>: {point.value}'
            }
        }]
    });
    // Create the first chart
    $('#genderChart').highcharts({
        chart: {
            	renderTo: 'genderChart',
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Gender Identity of Respondents (Excluding Undeclared)'
            },
            tooltip: {
                pointFormat: '<b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true
                    },
                }
            },
            credits: {
            enabled: false
        },
            series: [{
                type: 'pie',
                name: 'Gender Identity',
                data: [
                    ['Female',   81.13],
                    ['Male',       18.87]
                ]
            }]
    });
    
    $('#ageChart').highcharts({
    	colors: ["#f45b5b", "#8085e9", "#8d4654", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
        chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Age of Respondents (Excluding Undeclared)'
            },
            tooltip: {
                pointFormat: '<b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true
                    },
                }
            },
            credits: {
            enabled: false
        },
            series: [{
                type: 'pie',
                name: 'Age',
                data: [
                    ['18', 4 ],
					['19', 8],
					['20',10],
					['21',11],
					['22',7],
					['23',7],
					['24',3],
					['25',1],
					['26',1]

                ]
            }]
    });
    $('#avgChart').highcharts({
    	colors: ["#f45b5b"],
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Response Averages'
        },
        xAxis: {
            categories: ['How encouraged/discouraged were you to apply to Brown University?',
            			'How satisfied/dissatisfied are you with financial aid support at Brown?',
            			'How likely/unlikely are you to visit Deans for academic support?',
            			'How likely/unlikely are you to visit Deans for personal issues?',
            			'"I know faculty I can relate to"',
            			'"I feel I can approach faculty with academic issues"',
            			'"I think faculty are helpful or constructively engaging"',
            			'How familiar/unfamiliar are you with campus resources?',
            			'How likely/unlikely are you to use campus resources?',
            			'"I know students at Brown I can relate to"',
            			'"I have a community of support at Brown"',
            			'"I feel fellow students have been helpful"',
            			'How well do you think you fit with the Brown culture?',
            			'How happy/unhappy are you overall with your Brown experience?'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            max: 10,
            title: {
                text: null
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            enabled: false,
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
        	enabled: false,
        },
        credits: {
            enabled: false
        },
        series: [{
           
            data: [7.0172, 6.05, 4.3, ,3.5, 5.77, 6.77, 7.4, 6.3, 6.5, 7.9, 7.2, 7.8, 6.1, 7.5]
        }],
    }, function(chart){
    	chart.renderer.text("Not at all", chart.plotLeft-20, chart.chartHeight-5).css({color:"#606060", fontSize:'11px'}).add();
    	chart.renderer.text("Highly", chart.chartWidth-chart.plotTop, chart.chartHeight-5).css({color:"#606060", fontSize:'11px'}).add();

    });
	$('#immigrantChart').highcharts({
		colors: ["#2b908f", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
        chart: {
            type: 'bar'
        },
        title: {
            text: "Respondents Immigrant Generation"
        },
        xAxis: {
            text: null,
            labels: {
            	enabled: false
            }
        },
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: null
            }
        },
        legend: {
            reversed: true
        },
        tooltip: {
        	formatter: function(){
        		return '<b>'+this.series.name+'</b>: '+ this.percentage + '%';
        	}
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        credits : {
            enabled: false
        }, 
        series: [{
            name: 'First Generation',
            data: [30]
        }, {
            name: 'Second Generation',
            data: [70]
        }]
    }, function(chart){

    });
});