Highcharts.chart('2015', {

  chart: {
    type: 'item'
  },

  title: {
    text: 'Elecciones municipales 2015'
  },

  subtitle: {
    text: 'Resultados definitivos'
  },

  legend: {
    labelFormat: '{name} <span style="opacity: 0.8">{y}</span>'
  },

  series: [{
    name: 'Concejales',
    keys: ['name', 'y', 'color', 'label'],
    data: [
      ['PP', 11, '#049CDD', 'Partido Popular'],
      ['Ciudadanos', 2, '#F88201', 'Ciudadanos'],
      ['Ganemos', 5, '#00B9AC', 'Ganemos Jerez'],
      ['PSOE', 7, '#DD0612', 'Partido Socialista Obrero Español'],
      ['IU',2, '#2FAC66', 'Izquierda Unida']
     
    ],
    dataLabels: {
      enabled: true,
      format: '{point.label}'
    },

    // Circular options
    center: ['50%', '88%'],
    size: '170%',
    startAngle: -100,
    endAngle: 100
  }]
});