<template>
  <q-card class="bg-white full-width">
    <q-card-section class="bg-blue-grey-8">
      <div class="row items-center no-wrap">
        <div class="col">
          <div class="text-h6 text-white text-center">Présence et abscence annuel de l'Apprenant</div>
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <canvas id="mixed-chart"></canvas>
    </q-card-section>
  </q-card>
</template>

<script>
import Chart from 'chart.js'
export default {
  props: ['presence', 'abscence'],
  data () {
    return {
    }
  },
  mounted () {
    this.createChart('mixed-chart')
  },
  methods: {
    createChart (chartId) {
      console.log(this.abscence)
      console.log(this.presence)
      const ctx = document.getElementById(chartId)
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
          datasets: [{
            label: 'Absence',
            type: 'bar',
            backgroundColor: 'rgba(0,0,0,0.2)',
            data: this.abscence
          }, {
            label: 'Présence',
            type: 'bar',
            backgroundColor: '#1bf42a',
            backgroundColorHover: '#3e95cd',
            data: this.presence
          }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'La présence et l\'absence de l\'apprenant au cour de l\'année (Présence en vert, Absence en rgris)'
          },
          scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Variation'
              }
            }],
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Temps'
              }
            }]
          },
          legend: { display: false }
        }
      })
      return myChart
    }
  }
}
</script>

<style>
</style>
