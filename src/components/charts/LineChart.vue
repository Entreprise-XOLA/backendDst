<template>
  <q-card class="bg-white full-width">
    <q-card-section>
      <canvas id="line-chart"></canvas>
    </q-card-section>
  </q-card>
</template>

<script>
import Chart from 'chart.js'
export default {
  props: ['inscription', 'abonne', 'codemois'],
  data () {
    return {
    }
  },
  mounted () {
    this.createChart('line-chart')
  },
  methods: {
    createChart (chartId) {
      console.log(this.abonne)
      console.log(this.inscription)
      console.log(this.codemois)
      const ctx = document.getElementById(chartId)
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
          datasets: [{
            data: this.codemois,
            label: 'Code',
            borderColor: '#3e95cd',
            fill: false,
            lineTension: 0.9
          }, {
            data:  this.inscription,
            label: 'Inscription',
            borderColor: '#8e5ea2',
            fill: false,
            lineTension: 0
          }, {
            data: this.abonne,
            label: 'Abonnement',
            borderColor: '#3cba9f',
            fill: false,
            lineTension: 0
          }
          ]
        },
        options: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: 'Graphe d\'inscription, d\'abonnement et de code validé au cours de l\'année'
          }
        }
      })
      return myChart
    }
  }
}
</script>

<style>
</style>
