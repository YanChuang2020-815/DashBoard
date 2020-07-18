<template>
  <div class="top-right-cmp">
    <div class="chart-name">
      温湿度变化趋势
      <dv-decoration-3 style="width:200px;height:20px;" />
    </div>
    <dv-charts :option="option" />
  </div>
</template>

<script>
export default {
  name: 'TopRightCmp',
  data () {
    return {
      option: {
        legend: {
          data: [
            {
              name: '温度℃',
              color: '#ff5ca9'
            },
            {
              name: '湿度%',
              color: '#3de7c9'
            }
          ],
          textStyle: {
            fill: '#fff'
          }
        },
        xAxis: {
          data: [
            '07/16 13:30', '07/16 14:00', '07/16 14:30', '07/16 15:00', '07/16 15:30', '07/16 16:00', '07/16 16:30', '07/16 17:00'
          ],
          axisLine: {
            style: {
              stroke: '#999'
            }
          },
          axisLabel: {
            style: {
              fill: '#999'
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          data: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            style: {
              stroke: '#999'
            }
          },
          axisLabel: {
            style: {
              fill: '#999'
            }
          },
          axisTick: {
            show: false
          },
          min: 0,
          max: 100
        },
        series: [
          {
            name: '温度℃',
            data: [
              29, 28, 28, 28, 27, 26, 25, 40
            ],
            type: 'line',
            lineStyle: {
              stroke: '#ff5ca9'
            },
            linePoint: {
              radius: 4,
              style: {
                fill: '#ff5ca9',
                stroke: 'transparent'
              }
            }
          },
          {
            name: '湿度%',
            data: [
              61, 64, 62, 65, 62, 67, 70, 30
            ],
            type: 'line',
            smooth: true,
            lineArea: {
              show: true,
              gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)']
            },
            lineStyle: {
              lineDash: [5, 5]
            },
            linePoint: {
              radius: 4,
              style: {
                fill: '#00db95'
              }
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="less">
.top-right-cmp {
  position: relative;
  padding: 0 50px;
  box-sizing: border-box;

  .chart-name {
    position: absolute;
    right: 70px;
    text-align: right;
    font-size: 20px;
    top: 10px;
  }
}
</style>
