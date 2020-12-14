// When DOM is fully loaded, run init()
document.addEventListener('DOMContentLoaded', init, false);

// Initiates all plots
function init() {
    plotStackedBar();
    plotPie();
    plotHeat();
    plotBar();
    linePlot();
}

// Stacked Bar Chart of Top 5 Call Emergencies 
function plotStackedBar(){
    Highcharts.chart('stackedBarContainer', {
        chart: {
            backgroundColor: 'black',
            type: 'bar',
            style: {
                fontFamily: 'Montserrat',
                color: "white"
            }
        },
        colors: ["#001441","#8d1111","#4b4a4a","#d0662c","#ddea16"],
        title: {
            text: '',
            style: {
                fontFamily: 'Montserrat',
                textOutline: false,
                color: "darkred",
                fontSize: 20 + 'px'
            },
        },
        xAxis: {
            categories: [2016,2017,2018,2019,2020],
            title:{
                text: 'Year',
                style: {
                    fontFamily: 'Montserrat',
                    textOutline: false,
                    fontSize: 20 + 'px',
                    color: "darkorange"
                }
            },
            labels: {
                style: {
                    color: 'darkorange'
                }
            }
        },
        yAxis: {
            gridLineColor: 'black',
            min: 0,
            title: {
                text: '911 Call Amounts',
                style: {
                    fontFamily: 'Montserrat',
                    textOutline: false,
                    fontSize: 20 + 'px',
                    color: "darkorange"
                }
            }
        },
        legend: {
            itemStyle: {
                color: 'darkorange',
                fontWeight: 'bold'
            },
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal',
                dataLabels: {
                    style: {
                        fontFamily: 'Montserrat',
                        textOutline: false,
                        fontSize: 15 + 'px'
                    },
                    enabled: true,
                    format: '<b>{point.name}</b> {point.percentage:.1f} %'
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Vehicle Accident',
            data: [33490,32776,34349,33406]
        }, {
            name: 'Disabled Vehicle',
            data: [10426,9826,12626,10564]
        },{
            name:'Fire Alarm',
            data:[7995,7978,8989,8636]
        },{
            name:'Fall Victim',
            data:[7060,7197,7581,7934]
        },{
            name:'Respiratory Emergency',
            data: [7166,7120,7402, 7502]
        }],
        colors: ["#451e3e","#851e3e","red","blue","#051e3e"]
    });
}

// Main PiePlot function 
function plotPie(){
    Highcharts.chart('piesContainer', {
        chart: {
            backgroundColor: 'black',
            type: 'pie',
            style: {
                fontFamily: 'Montserrat',
                textOutline: false,
                color: "white"
            }
        },
        title: {
            text: '',
            style: {
                fontFamily: 'Montserrat',
                textOutline: false,
                color: "darkred"
            }
        },
        tooltip: {
            pointFormat: 'Number of 911 calls: <b> {point.y} </b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    style: {
                        fontFamily: 'Montserrat',
                        textOutline: false,
                        color: "darkorange",
                        fontSize: 20 + 'px'
                    },
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        colors: ["#051e3e","#851e3e","#451e3e"],
        // colors:[Highcharts.getOptions().colors[0],Highcharts.getOptions().colors[5],Highcharts.getOptions().colors[1]],
        series:[{ 
            name: 'Categories',
            colorByPoint: true,
            data: [{
                name: 'Emergency Medical Services',
                y: 288773,
                events:{
                    click:function(){
                        plotPieEMS();
                    }
                }
            }, {
                name: 'Fire Emergencies',
                y: 87528,
                events:{
                    click:function(){
                        plotPieFire();
                    }
                }
            }, {
                name: 'Traffic Emergencies',
                y: 207047,
                events:{
                    click:function(){
                        plotPieTraffic();
                    }
                }
            }]
        }]
    });
}

// // Helper 1: PiePlot for Fire Categories Only
// function plotPieFire(){
//     var pieColors = (function () {
//         var colors = [],
//             base = Highcharts.getOptions().colors[5],
//             i;
    
//         for (i = 0; i < 10; i += 1) {
//             // Start out with a darkened base color (negative brighten), and end
//             // up with a much brighter color
//             colors.push(Highcharts.color(base).brighten((i - 3) / 7).get());
//         }
//         return colors;
//     }());
//     Highcharts.chart('piesContainer', {
//         chart: {
//             backgroundColor: 'black',
//             type: 'pie'
//         },
//         title: {
//             style: {
//                 fontFamily: 'Montserrat',
//                 textOutline: false,
//                 color: "white",
//                 fontSize: 20 + 'px'
//             },
//             text: 'Fire Incidents'
//         },
//         accessibility: {
//             point: {
//                 valueSuffix: '%'
//             }
//         },
//         plotOptions: {
//             pie: {
//                 allowPointSelect: true,
//                 colors:pieColors,
//                 cursor: 'pointer',
//                 dataLabels: {
//                     style: {
//                         fontFamily: 'Montserrat',
//                         textOutline: false,
//                         color: "darkorange",
//                         fontSize: 20 + 'px'
//                     },
//                     enabled: true,
//                     format: '<b>{point.name}</b>: {point.percentage:.1f} %'
//                 }
//             }
//         },
//         series: [{
//             name: 'Fire',
//             colorByPoint: true,
//             events:{
//                 click:function(){
//                     plotPie();
//                 }
//             },
//             data: [{
//                 name: 'Fire Alarm',
//                 y: 33598,
//                 sliced: true,
//                 selected: true
//             }, {
//                 name: 'Vehicle Accident',
//                 y: 9677
//             }, {
//                 name: 'Fire Investigation',
//                 y: 8121
//             }, {
//                 name: 'Gas-Odor/Leak',
//                 y: 5895
//             }, {
//                 name: 'Electrical Fire Outside',
//                 y: 4227
//             }, {
//                 name: 'Other',
//                 y: 26010
//             }]
//         }]
//     });
// }

// // Helper 2: PiePlot for EMS Categories Only
// function plotPieEMS(){
//     var pieColors = (function () {
//         var colors = [],
//             base = Highcharts.getOptions().colors[0],
//             i;
    
//         for (i = 0; i < 10; i += 1) {
//             // Start out with a darkened base color (negative brighten), and end
//             // up with a much brighter color
//             colors.push(Highcharts.color(base).brighten((i - 5) / 10).get());
//         }
//         return colors;
//     }());
//     Highcharts.chart('piesContainer', {
//         chart: {
//             backgroundColor: 'black',
//             type: 'pie'
//         },
//         title: {
//             style: {
//                 fontFamily: 'Montserrat',
//                 textOutline: false,
//                 color: "white",
//                 fontSize: 20 + 'px'
//             },
//             text: 'EMS Incidents'
//         },
//         accessibility: {
//             point: {
//                 valueSuffix: '%'
//             }
//         },
//         plotOptions: {
//             pie: {
//                 allowPointSelect: true,
//                 colors:pieColors,
//                 cursor: 'pointer',
//                 dataLabels: {
//                     style: {
//                         fontFamily: 'Montserrat',
//                         textOutline: false,
//                         color: "darkorange",
//                         fontSize: 20 + 'px'
//                     },
//                     enabled: true,
//                     format: '<b>{point.name}</b>: {point.percentage:.1f} %'
//                 }
//             }
//         },
//         series: [{
//             name: 'EMS',
//             colorByPoint: true,
//             events:{
//                 click:function(){
//                     plotPie();
//                 }
//             },
//             data: [{
//                 name: 'Fall Victim',
//                 y: 29772,
//                 sliced: true,
//                 selected: true
//             }, {
//                 name: 'Respiratory Emergency',
//                 y: 29190
//             }, {
//                 name: 'Cardiac Emergency',
//                 y: 28310
//             }, {
//                 name: 'Vehicle Accident',
//                 y: 22891
//             }, {
//                 name: 'Subject in Pain',
//                 y: 17122
//             }, {
//                 name: 'Head Injury',
//                 y:15841
//             },{
//                 name:"General Weakness",
//                 y:10146
//             },{
//                 name: 'Other',
//                 y: 135501
//             }]
//         }]
//     });   
// }

// // Helper 3: PiePlot for Traffic Categories Only
// function plotPieTraffic(){
//     Highcharts.chart('piesContainer', {
//         chart: {
//             backgroundColor: 'black',
//             type: 'pie'
//         },
//         title: {
//             style: {
//                 fontFamily: 'Montserrat',
//                 textOutline: false,
//                 color: "white",
//                 fontSize: 20 + 'px'
//             },
//             text: 'Traffic Incidents'
//         },
//         accessibility: {
//             point: {
//                 valueSuffix: '%'
//             }
//         },
//         plotOptions: {
//             pie: {
//                 allowPointSelect: true,
//                 colors:["#1b0618","#290924","#44103c","#5f1654","#7a1c6c"],
//                 cursor: 'pointer',
//                 dataLabels: {
//                     style: {
//                         fontFamily: 'Montserrat',
//                         textOutline: false,
//                         color: "darkorange",
//                         fontSize: 20 + 'px'
//                     },
//                     enabled: true,
//                     format: '<b>{point.name}</b>: {point.percentage:.1f} %'
//                 }
//             }
//         },
//         series: [{
//             name: 'Traffic',
//             colorByPoint: true,
//             events:{
//                 click:function(){
//                     plotPie();
//                 }
//             },
//             data: [{
//                 name: 'Vehicle Accident',
//                 y: 134021,
//                 sliced: true,
//                 selected: true
//             }, {
//                 name: 'Disabled Vehicle',
//                 y: 43442
//             }, {
//                 name: 'Road Obstruction',
//                 y: 19946
//             }, {
//                 name: 'Hazardous Road Conditions',
//                 y: 6213
//             }, {
//                 name: 'Vehicle Fire',
//                 y:2978
//             },{
//                 name: 'Other',
//                 y: 447
//             }]
//         }]
//     });
// }

// Helper for Heatmap 
function getPointCategoryName(point, dimension) {
    var series = point.series,
        isY = dimension === 'y',
        axis = series[isY ? 'yAxis' : 'xAxis'];
        val = axis.categories[point[isY ? 'y' : 'x']];
        if(val == 0){
            return 'Midnight'
        }
        if(val == 1){
            return '1:00 A.M.'
        }
        if(val == 2){
            return '2:00 A.M.'
        }
        if(val == 3){
            return '3:00 A.M.'
        }
        if(val == 4){
            return '4:00 A.M.'
        }
        if(val == 5){
            return '5:00 A.M.'
        }
        if(val == 6){
            return '6:00 A.M.'
        }
        if(val == 7){
            return '7:00 A.M.'
        }
        if(val == 8){
            return '8:00 A.M.'
        }
        if(val == 9){
            return '9:00 A.M.'
        }
        if(val == 10){
            return '10:00 A.M.'
        }
        if(val == 11){
            return '11:00 A.M.'
        }
        if(val == 12){
            return '12:00 P.M.'
        }
        if(val == 13){
            return '1:00 P.M.'
        }
        if(val == 14){
            return '2:00 P.M.'
        }
        if(val == 15){
            return '3:00 P.M.'
        }
        if(val == 16){
            return '4:00 P.M.'
        }
        if(val == 17){
            return '5:00 P.M.'
        }
        if(val == 18){
            return '6:00 P.M.'
        }
        if(val == 19){
            return '7:00 P.M.'
        }
        if(val == 20){
            return '8:00 P.M.'
        }
        if(val == 21){
            return '9:00 P.M.'
        }
        if(val == 22){
            return '10:00 P.M.'
        }
        if(val == 23){
            return '11:00 P.M.'
        }
        else{
            return val
        }
}

// HeatMap Plot
function plotHeat(){
    Highcharts.chart('heatContainer', {

        chart: {
            backgroundColor: 'black',
            type: 'heatmap',
        },
        title: {
            text: ''
        },
    
        xAxis: {
            categories: ['12AM','1AM','2AM','3AM','4AM','5AM','6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM','9PM','10PM','11PM'],
            labels: {
                style: {
                    fontWeight: 'bold',
                }
            }
        },
        yAxis: {
            categories: ['Sunday','Monday','Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday'],
            title: null,
            reversed: true,
            labels: {
                style: {
                    fontWeight: 'bold',
                }
            }
        },
        colorAxis: {
            stops: [
                [0, '#e4f0dd'],
                [0.5, '#ce8d3d'],
                [0.9, '#bf0d31']
            ],
            min: -5
        },
        tooltip: {
            formatter: function () {
                return '<b>' + getPointCategoryName(this.point, 'x') + '</b> on ' +getPointCategoryName(this.point, 'y') +'<br>'+ ' had a total of '+
                    '<br>' + this.point.value + '<b> accidents' + '</b>';
            }
        },
        series: [{
            name: '911 calls',
            borderWidth: 0.5,
            borderColor:'#000000',
            data:[[0, 0, 258],
            [0, 1, 198],
            [0, 2, 196],
            [0, 3, 191],
            [0, 4, 263],
            [0, 5, 441],
            [0, 6, 405],
            [1, 0, 169],
            [1, 1, 129],
            [1, 2, 134],
            [1, 3, 108],
            [1, 4, 210],
            [1, 5, 385],
            [1, 6, 367],
            [2, 0, 131],
            [2, 1, 101],
            [2, 2, 113],
            [2, 3, 177],
            [2, 4, 202],
            [2, 5, 399],
            [2, 6, 384],
            [3, 0, 107],
            [3, 1, 102],
            [3, 2, 122],
            [3, 3, 121],
            [3, 4, 141],
            [3, 5, 251],
            [3, 6, 253],
            [4, 0, 145],
            [4, 1, 142],
            [4, 2, 95],
            [4, 3, 136],
            [4, 4, 128],
            [4, 5, 188],
            [4, 6, 233],
            [5, 0, 334],
            [5, 1, 330],
            [5, 2, 302],
            [5, 3, 332],
            [5, 4, 286],
            [5, 5, 231],
            [5, 6, 196],
            [6, 0, 769],
            [6, 1, 860],
            [6, 2, 795],
            [6, 3, 831],
            [6, 4, 732],
            [6, 5, 323],
            [6, 6, 280],
            [7, 0, 1460],
            [7, 1, 1640],
            [7, 2, 1811],
            [7, 3, 1567],
            [7, 4, 1384],
            [7, 5, 442],
            [7, 6, 339],
            [8, 0, 1714],
            [8, 1, 1983],
            [8, 2, 1895],
            [8, 3, 1846],
            [8, 4, 1494],
            [8, 5, 606],
            [8, 6, 394],
            [9, 0, 1349],
            [9, 1, 1428],
            [9, 2, 1412],
            [9, 3, 1378],
            [9, 4, 1327],
            [9, 5, 993],
            [9, 6, 568],
            [10, 0, 1053],
            [10, 1, 1182],
            [10, 2, 1114],
            [10, 3, 1062],
            [10, 4, 1178],
            [10, 5, 1154],
            [10, 6, 806],
            [11, 0, 1198],
            [11, 1, 1301],
            [11, 2, 1307],
            [11, 3, 1197],
            [11, 4, 1376],
            [11, 5, 1542],
            [11, 6, 948],
            [12, 0, 1422],
            [12, 1, 1526],
            [12, 2, 1586],
            [12, 3, 1623],
            [12, 4, 1666],
            [12, 5, 1636],
            [12, 6, 1231],
            [13, 0, 1398],
            [13, 1, 1462],
            [13, 2, 1455],
            [13, 3, 1584],
            [13, 4, 1897],
            [13, 5, 1647],
            [13, 6, 1158],
            [14, 0, 1588],
            [14, 1, 1734],
            [14, 2, 1679],
            [14, 3, 1692],
            [14, 4, 1945],
            [14, 5, 1655],
            [14, 6, 1246],
            [15, 0, 1939],
            [15, 1, 2134],
            [15, 2, 2104],
            [15, 3, 2099],
            [15, 4, 2571],
            [15, 5, 1444],
            [15, 6, 1090],
            [16, 0, 2187],
            [16, 1, 2416],
            [16, 2, 2366],
            [16, 3, 2153],
            [16, 4, 2646],
            [16, 5, 1303],
            [16, 6, 1131],
            [17, 0, 2313],
            [17, 1, 2601],
            [17, 2, 2605],
            [17, 3, 2699],
            [17, 4, 2559],
            [17, 5, 1298],
            [17, 6, 1024],
            [18, 0, 1517],
            [18, 1, 1790],
            [18, 2, 1713],
            [18, 3, 1684],
            [18, 4, 1664],
            [18, 5, 1208],
            [18, 6, 920],
            [19, 0, 918],
            [19, 1, 1078],
            [19, 2, 1130],
            [19, 3, 1079],
            [19, 4, 1244],
            [19, 5, 1034],
            [19, 6, 812],
            [20, 0, 684],
            [20, 1, 745],
            [20, 2, 785],
            [20, 3, 813],
            [20, 4, 899],
            [20, 5, 821],
            [20, 6, 643],
            [21, 0, 538],
            [21, 1, 649],
            [21, 2, 641],
            [21, 3, 738],
            [21, 4, 778],
            [21, 5, 780],
            [21, 6, 470],
            [22, 0, 389],
            [22, 1, 433],
            [22, 2, 422],
            [22, 3, 446],
            [22, 4, 691],
            [22, 5, 597],
            [22, 6, 395],
            [23, 0, 284],
            [23, 1, 282],
            [23, 2, 289],
            [23, 3, 382],
            [23, 4, 561],
            [23, 5, 569],
            [23, 6, 388]],
            dataLabels: {
                enabled: false,
                color: '#000000'
            }
        }],
    });
}

// Data for horizontal bar chart
bar = [
    {
        name: 'All Years',
        data: [166589, 43450, 33705, 29779,  29192, 28316, 19947, 17126, 15844, 10147]
    },
    // {
    //     name: '2016',
    //     data: [41632, 10429,  8016,  7063,  7166, 7063, 4383, 3942, 3770, 2074],
    //     visible: false
    // },
    // {
    //     name: '2017',
    //     data: [40933, 9828,  8012,  7198, 7121, 7077, 4213, 4064, 3690, 2445],
    //     visible: false
    // },
    // {
    //     name: '2018',
    //     data: [42553, 12628, 9014, 7582, 7402, 6914, 5790, 4364, 3966, 2763],
    //     visible: false
    // },
    // {
    //     name: '2019',
    //     data: [41471, 10565, 8663,  7936, 7503, 7262, 5561, 4756, 4418, 2865],
    //     visible: false
    // }
]

// Horizontal Bar Chart Plot
function plotBar(){
    Highcharts.chart('bar-chart', {
        chart: {
            backgroundColor: 'black',
            type: 'bar',
            style: {
                fontFamily: 'Montserrat',
                textOutline: false,
                color: "darkorange",
                fontSize: 20 + 'px'
            }
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['VEHICLE ACCIDENT',  'DISABLED VEHICLE','FIRE ALARM',
            'FALL VICTIM','RESPIRATORY EMERGENCY','CARDIAC EMERGENCY', 
            'ROAD OBSTRUCTION', 'SUBJECT IN PAIN', 'HEAD INJURY','GENERAL WEAKNESS'],
            title: {
                style: {
                    fontFamily: 'Montserrat',
                    textOutline: false,
                    color: "darkorange",
                    fontSize: 15 + 'px'
                },
                text: null
            },
            labels: {
                style: {
                    fontFamily: 'Montserrat',
                    textOutline: false,
                    color: 'darkorange',
                    fontSize: 15 + 'px'
                }
            }
        },
        yAxis: {
            gridLineColor: 'black',
            min: 0,
            title: {
                style: {
                    fontFamily: 'Montserrat',
                    textOutline: false,
                    color: "darkorange",
                    fontSize: 20 + 'px'
                },
                text: 'Incidents',
                align: 'middle'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' millions'
        },
        plotOptions: {
            series: {
                borderWidth: 2,
                borderColor: 'black'
            },
            bar: {
                dataLabels: {
                    enabled: true,
                    style: {
                        fontFamily: 'Montserrat',
                        textOutline: false,
                        color: "darkorange",
                        fontSize: 15 + 'px'
                    },
                }
            }
        },
        legend: {
            enabled: false,
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: false,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: false
        },
        credits: {
            enabled: false
        },
        series: bar,
        colors: [
            'lightgray', 
            "#051e3e","#851e3e","#451e3e"
        ]
    });
}


var line = [
    {
        name: 'All Years',
        data: [26697, 22479, 25227, 22819, 25393, 24766, 24688, 24240, 24441, 27959, 27218, 26788],
        visible: false
    },
    {
        name: '2016',
        data: [7204,5784,5545,5609,6110,5990,6099,6049,6083,6851,6532,6450],
    },
    {
        name: '2017',
        data: [5977, 5037, 6076, 5720, 6206, 6189, 5885, 6060, 5856, 6644, 6281, 7161],
    },
    {
        name: '2018',
        data: [7063, 5772, 7336, 5559, 6482, 6284, 6273, 6089, 6530, 7141, 8088, 6562],
    },
    {
        name: '2019',
        data: [6453, 5886, 6270, 5931, 6595, 6303, 6431, 6042, 5972, 7323, 6317, 6615],
    }
]

function linePlot(){
    Highcharts.chart('line-chart', {
        chart: {
            backgroundColor: 'black',
            type: 'line',
            zoomType: 'xy'
        },
        title: {
            text: 'Top 5 Incidents by Month'
        },
        subtitle: {
            text: 'Instructions: Click legend to hide/show respective years'
        },
        legend: {
            layout: 'horizontal',
            verticalAlign: 'top',
            floating: false,
            backgroundColor: '#FFFFFF'
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Incident Count'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: line
    });
}


// // HeatMap Plot
// function plotHeat(){
//     Highcharts.chart('heatContainer', {

//         chart: {
//             backgroundColor: 'black',
//             type: 'heatmap',
//         },
//         title: {
//             text: ''
//         },
    
//         xAxis: {
//             categories: ['12AM','1AM','2AM','3AM','4AM','5AM','6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM','9PM','10PM','11PM'],
//             labels: {
//                 style: {
//                     fontWeight: 'bold',
//                 }
//             }
//         },
//         yAxis: {
//             categories: ['Friday','Saturday','Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday'],
//             title: null,
//             reversed: true,
//             labels: {
//                 style: {
//                     fontWeight: 'bold',
//                 }
//             }
//         },
//         colorAxis: {
//             stops: [
//                 [0, '#e4f0dd'],
//                 [0.5, '#ce8d3d'],
//                 [0.9, '#bf0d31']
//             ],
//             min: -5
//         },
//         tooltip: {
//             formatter: function () {
//                 return '<b>' + getPointCategoryName(this.point, 'x') + '</b> on ' +getPointCategoryName(this.point, 'y') +'<br>'+ ' had a total of '+
//                     '<br>' + this.point.value + '<b> incidents' + '</b>';
//             }
//         },
//         series: [{
//             name: '911 calls',
//             borderWidth: 0.5,
//             borderColor:'#000000',
//             data:[
//             [0, 0, 1983],
//             [0, 1, 1894],
//             [0, 2, 2447],
//             [0, 3, 2424],
//             [0, 4, 1731],
//             [0, 5, 1720],
//             [0, 6, 1664],
//             [1, 0, 1635],
//             [1, 1, 1571],
//             [1, 2, 2059],
//             [1, 3, 2135],
//             [1, 4, 1408],
//             [1, 5, 1459],
//             [1, 6, 1484],
//             [2, 0, 1449],
//             [2, 1, 1368],
//             [2, 2, 1883],
//             [2, 3, 1946],
//             [2, 4, 1426],
//             [2, 5, 1322],
//             [2, 6, 1259],
//             [3, 0, 1296],
//             [3, 1, 1272],
//             [3, 2, 1592],
//             [3, 3, 1614],
//             [3, 4, 1236],
//             [3, 5, 1213],
//             [3, 6, 1265],
//             [4, 0, 1339],
//             [4, 1, 1336],
//             [4, 2, 1451],
//             [4, 3, 1471],
//             [4, 4, 1293],
//             [4, 5, 1247],
//             [4, 6, 1128],
//             [5, 0, 1639],
//             [5, 1, 1844],
//             [5, 2, 1580],
//             [5, 3, 1488],
//             [5, 4, 1775],
//             [5, 5, 1741],
//             [5, 6, 1609],
//             [6, 0, 2670],
//             [6, 1, 2675],
//             [6, 2, 1880],
//             [6, 3, 1726],
//             [6, 4, 2816],
//             [6, 5, 2784],
//             [6, 6, 2668],
//             [7, 0, 4143],
//             [7, 1, 4430],
//             [7, 2, 2489],
//             [7, 3, 2408],
//             [7, 4, 4432],
//             [7, 5, 4425],
//             [7, 6, 4644],
//             [8, 0, 5018],
//             [8, 1, 5504],
//             [8, 2, 3457],
//             [8, 3, 3001],
//             [8, 4, 5297],
//             [8, 5, 5634],
//             [8, 6, 5469],
//             [9, 0, 5288],
//             [9, 1, 5724],
//             [9, 2, 4315],
//             [9, 3, 3728],
//             [9, 4, 5412],
//             [9, 5, 5566],
//             [9, 6, 5444],
//             [10, 0, 5584],
//             [10, 1, 5458],
//             [10, 2, 4944],
//             [10, 3, 4262],
//             [10, 4, 5464],
//             [10, 5, 5498],
//             [10, 6, 5367],
//             [11, 0, 5843],
//             [11, 1, 5632],
//             [11, 2, 5450],
//             [11, 3, 4438],
//             [11, 4, 5492],
//             [11, 5, 5582],
//             [11, 6, 5639],
//             [12, 0, 5994],
//             [12, 1, 5881],
//             [12, 2, 5555],
//             [12, 3, 4882],
//             [12, 4, 5898],
//             [12, 5, 5795],
//             [12, 6, 6092],
//             [13, 0, 6181],
//             [13, 1, 5664],
//             [13, 2, 5378],
//             [13, 3, 4654],
//             [13, 4, 6173],
//             [13, 5, 5794],
//             [13, 6, 5953],
//             [14, 0, 6394],
//             [14, 1, 5713],
//             [14, 2, 5421],
//             [14, 3, 4744],
//             [14, 4, 6079],
//             [14, 5, 5926],
//             [14, 6, 6069],
//             [15, 0, 7040],
//             [15, 1, 6289],
//             [15, 2, 5181],
//             [15, 3, 4475],
//             [15, 4, 6493],
//             [15, 5, 6252],
//             [15, 6, 6533],
//             [16, 0, 7065],
//             [16, 1, 6346],
//             [16, 2, 5211],
//             [16, 3, 4560],
//             [16, 4, 6375],
//             [16, 5, 6495],
//             [16, 6, 6745],
//             [17, 0, 7113],
//             [17, 1, 6408],
//             [17, 2, 5213],
//             [17, 3, 4505],
//             [17, 4, 6935],
//             [17, 5, 6883],
//             [17, 6, 7062],
//             [18, 0, 5668],
//             [18, 1, 5441],
//             [18, 2, 4980],
//             [18, 3, 4402],
//             [18, 4, 5512],
//             [18, 5, 5628],
//             [18, 6, 5691],
//             [19, 0, 5056],
//             [19, 1, 4488],
//             [19, 2, 4753],
//             [19, 3, 4135],
//             [19, 4, 4703],
//             [19, 5, 4621],
//             [19, 6, 4686],
//             [20, 0, 4375],
//             [20, 1, 3823],
//             [20, 2, 4127],
//             [20, 3, 3748],
//             [20, 4, 4045],
//             [20, 5, 3845],
//             [20, 6, 4116],
//             [21, 0, 3913],
//             [21, 1, 3254],
//             [21, 2, 3895],
//             [21, 3, 3161],
//             [21, 4, 3490],
//             [21, 5, 3409],
//             [21, 6, 3537],
//             [22, 0, 3422],
//             [22, 1, 2658],
//             [22, 2, 3226],
//             [22, 3, 2629],
//             [22, 4, 2844],
//             [22, 5, 2708],
//             [22, 6, 2826],
//             [23, 0, 2834],
//             [23, 1, 2072],
//             [23, 2, 2965],
//             [23, 3, 2323],
//             [23, 4, 2354],
//             [23, 5, 2137],
//             [23, 6, 2207]],
//             dataLabels: {
//                 enabled: false,
//                 color: '#000000'
//             }
//         }],
//     });
// }