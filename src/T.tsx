import React, {Component} from 'react';

import * as echarts from 'echarts';
import html2canvas from 'html2canvas';


class EchartsColumnarTest extends Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例

        var chartDom: HTMLElement = document.getElementById('EchartsColumnarTest') as HTMLElement;

        var myChart = echarts.init(chartDom, 'dark', {
            renderer: 'canvas',
            useDirtyRect: false
        });
        // var myChart = echarts.init(chartDom ,'dark');
        var option;

        option = {
            toolbox: {
                show: true,
                right: 23,
                feature: {
                    /* line是折线图，bar是柱形图*/
                    magicType: {
                        show: true,
                        type: ['line', 'bar'],
                        title: {
                            line: "切换为折线图",
                            bar: "切换为柱状图"
                        },
                        // icon:{
                        //     bar: "image://src/assets/bar-2.png",
                        //     line: "image://src/assets/line-1.png",
                        // }
                    },
                }
            },
            grid: {
                left: '35px',
                right: '60px',
                bottom: '20px',
                containLabel: true
            },
            xAxis: {
                boundaryGap:false,
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            series: [
                {
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'line',
                    barWidth: 10,
                    itemStyle: {
                        normal: {
                            //这里是颜色
                            color: "#42CDBC",
                        }
                    },

                    smooth: true,
                    lineStyle: {
                        color: '#42CDBC'
                    },
                    symbol: 'circle',
                    showSymbol: true,
                    areaStyle: {
                        opacity: 0.5,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#42CDBC'
                            },
                            {
                                offset: 1,
                                color: 'rgb(18,40,21)'
                            }
                        ])
                    },
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
                },
                {
                    data: [60, 65, 94, 25, 80, 45, 36],
                    type: 'line',
                    barWidth: 10,
                    itemStyle: {
                        normal: {
                            //这里是颜色
                            color: "#9464FF",
                        }
                    },
                    smooth: true,
                    areaStyle: {
                        opacity: 0.5,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#9464FF'
                            },
                            {
                                offset: 1,
                                color: 'rgb(18,40,21)'
                            }
                        ])
                    },
                }
            ]
        };

        option && myChart.setOption(option);
    }


    render() {
        const creatImg = () => { // 绑定在某个点击事件
            html2canvas(document.getElementById('aphoto') as HTMLElement, {
                // aphoto为被截图节点id
                allowTaint: false,
                useCORS: true, // 支持跨域图片的截取，不然图片截取不出来
                // 图片服务器配置 Access-Control-Allow-Origin: *
            }).then(canvas => {
                const link = document.createElement('a'); // 建立一个超连接对象实例
                const event = new MouseEvent('click'); // 建立一个鼠标事件的实例
                link.download = 'img.png'; // 设置要下载的图片的名称
                link.href = canvas.toDataURL(); // 将图片的URL设置到超连接的href中
                link.dispatchEvent(event); // 触发超连接的点击事件
            })
        }


        return (
            <>
                <div id="EchartsColumnarTest"
                     style={{width: 608, height: 213, overflow: "hidden", background: '#000', borderRadius: 14}}>

                </div>

                <div id='aphoto'>
                    abc
                </div>
                <div onClick={creatImg}>点击我截图</div>
            </>


        );
    }
}

export default EchartsColumnarTest;