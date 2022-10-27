import React, {Component} from 'react';

import * as echarts from 'echarts';

class EchartsTest extends Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例

        var chartDom: HTMLElement = document.getElementById('main') as HTMLElement;

        var myChart = echarts.init(chartDom, 'dark', {
            renderer: 'canvas',
            useDirtyRect: false
        });
        // var myChart = echarts.init(chartDom ,'dark');
        var option;

        option = {
            backgroundColor: '#13132B',
            borderRadius: 5,
            color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
            title: {
                text: '日统计',
                x: 'center',
                y: '29px',
                textStyle: {
                    color: '#CFD0EE',
                    fontSize: 32,
                    fontWeight:800
                },
                textAlign: 'left'
            },

            tooltip: {
                transitionDuration: 0,
                confine:true,
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                },
                // formatter: function(params:any) {
                //     console.log("0000000000000")
                //     console.log(params[0]["seriesName"], params[0]["axisValue"],params[0]["data"])
                //     console.log(params[1]["seriesName"], params[1]["axisValue"],params[1]["data"])
                //     console.log(params[2]["seriesName"], params[2]["axisValue"],params[2]["data"])
                //     console.log(11111111)
                //     var html = `<div class='specialLook' >${params[0]["data"]}</div>
                //    <div class='addSearch'>${params[0]["seriesName"]}</div>`;
                //     return html;
                // }
            },
            legend: [{
                textStyle: {
                    color: '#9495A5',
                    fontSize: 12,
                    height: 8,
                    rich: {
                        a: {
                            verticalAlign: 'middle',
                        },
                    }
                },
                top: 10, //调整位置
                right: '20%',//调整位置
                data: [{name: '单日利润', icon: 'image:// src/assets/3.png'}],   //rect为矩形
            },
                {
                    textStyle: {
                        color: '#9495A5',
                        fontSize: 12,
                        height: 8,
                        rich: {
                            a: {
                                verticalAlign: 'middle',
                            },
                        }
                    },
                    top: 10, //调整位置
                    right: '12%',//调整位置
                    data: [{name: '单日支出', icon: 'image:// src/assets/2.png'}],   //rect为矩形
                },
                {
                    textStyle: {
                        color: '#9495A5',
                        fontSize: 12,
                        height: 8,
                        rich: {
                            a: {
                                verticalAlign: 'middle',
                            },
                        }
                    },
                    top: 10, //调整位置
                    right: '4%',//调整位置
                    data: [{name: '单日收入', icon: 'image:// src/assets/1.png'}],   //rect为矩形
                }
            ],
            grid: {
                top:'16%',
                left: '2%',
                right: '8%',
                bottom: '6%',
                containLabel: true
            },
            radiusAxis: {
                show: false,
                type: 'category',
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['10/1', '10/1', '10/1', '10/1', '10/1', '10/1', '10/1','10/1', '10/1', '10/1', '10/1', '10/1', '10/1', '10/1','10/1', '10/1', '10/1', '10/1', '10/1', '10/1', '10/1']
                }
            ],
            yAxis: [
                {
                    type: 'log',
                    axisLabel: {
                        formatter: function (value:number) {
                            return value === 0.1 ? 0 : value;
                        }
                    },

                },

            ],
            series: [
                {
                    name: '单日利润',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        color: '#6FF366'
                    },
                    symbol: 'circle',
                    itemStyle: {
                        normal: {
                            color: "#121228",
                            borderColor: '#6FF366',
                            borderWidth: 2,
                        }
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.5,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(111,243,102)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(18,40,21)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [0.1, 232, 101, 264, 90, 340, 250,140, 232, 101, 264, 90, 340, 250,140, 232, 101, 264, 90, 340, 250]
                },
                {
                    name: '单日支出',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        color: "#E84476"
                    },
                    symbol: 'circle',
                    itemStyle: {
                        normal: {
                            color: "#121228",
                            borderColor: '#E84476',
                            borderWidth: 2,
                        }
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#713245'
                            },
                            {
                                offset: 1,
                                color: 'rgb(18,40,21)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    //平均线
                    markLine: {
                        //设置该线样式
                        lineStyle: {
                            normal: {
                                type: "dashed",
                                color: "#713245",
                                width: 2,
                            }
                        },
                        data: [{
                            type: 'average',
                            name: "平均支出",
                            label: {
                                //右侧信息
                                formatter: [
                                    '{l|{b}}',
                                    '{l|{c}元}'
                                ].join('\n'),
                                rich: {
                                    l: {
                                        color: '#EBF0F4',
                                        fontsize: 12,
                                        lineHeight: 18
                                    },
                                }
                            }
                        }]
                    },
                    data: [120, 282, 500, 234, 800, 600, 310,120, 282, 500, 234, 800, 600, 310,120, 282, 500, 234, 800, 600, 310]
                },
                {
                    name: '单日收入',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        color: "#249DFA"
                    },
                    symbol: 'circle',
                    itemStyle: {
                        normal: {
                            color: "#121228",
                            borderColor: '#249DFA',
                            borderWidth: 2,
                        }
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#074779'
                            },
                            {
                                offset: 1,
                                color: '#121B28'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    //平均线设置
                    markLine: {
                        //设置该线样式
                        lineStyle: {
                            normal: {
                                type: "dashed",
                                color: "#249DFA",
                                width: 2,
                            }
                        },
                        data: [{
                            type: 'average',
                            name: "平均收入",
                            label: {
                                //右侧信息
                                formatter: [
                                    '{l|{b}}',
                                    '{l|{c}元}'
                                ].join('\n'),
                                rich: {
                                    l: {
                                        color: '#EBF0F4',
                                        fontsize: 12,
                                        lineHeight: 18
                                    },
                                }
                            }
                        }]
                    },
                    data: [900, 800, 2081, 3384, 1980, 1380, 220,900, 800, 2081, 3384, 1980, 1380, 220,900, 800, 2081, 3384, 1980, 1380, 220]
                },
            ]
        };

        option && myChart.setOption(option);


        myChart.on('mouseover' ,  'xAxis.category' , (params:any ) =>{
            console.log(params)
        });

        myChart.on('legendselectchanged', function (params) {
            console.log(params);
        });
        // myChart.on('mouseover', function (params) {
        //     console.log(params);
        // });


    }


    render() {
        return (
            <div id="main"
                 style={{width: 1184, height: 510, overflow: "hidden", background: '#000', borderRadius: 14}}></div>
        );
    }
}

export default EchartsTest;