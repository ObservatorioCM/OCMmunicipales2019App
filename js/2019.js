Highcharts.chart('2019', {

  chart: {
    type: 'item'
  },

  title: {
    text: 'Elecciones municipales 2019'
  },

  subtitle: {
    text: 'Predicción'
  },

  legend: {
    labelFormat: '{name} <span style="opacity: 0.8">{y}</span>'
  },

  series: [{
    name: 'Concejales',
    keys: ['name', 'y', 'color', 'label'],
    data: [
      ['PP', 0, '#049CDD', 'Partido Popular'],
      ['Ciudadanos', 0, '#F88201', 'Ciudadanos'],
      ['Ganemos', 0, '#00B9AC', 'Ganemos Jerez'],
      ['PSOE', 0, '#DD0612', 'Partido Socialista Obrero Español'],
      ['Adelante Jerez',0, '#196CAC', 'Adelante Jerez'],
      ['Vox',0, '#5AC135', 'Vox'],
      ['Jerezanos',0, '#144F8E', 'Jerezanos'],
      ['Axsi',0, '#144F8E', 'Andalucia por si'],
      ['PCPA',0, '#144F8E', 'Partido Comunista del Pueblo Andaluz'],
      ['Sin asignar',27, '#F7DF1E', 'Sin asignar']
     
    ],
    dataLabels: {
      enabled: false,
      format: '{point.label}'
    },

    // Circular options
    center: ['50%', '88%'],
    size: '170%',
    startAngle: -100,
    endAngle: 100
  }]
});