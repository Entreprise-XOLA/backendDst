<template>
  <q-card class="bg-white q-pa-none full-width">
    <q-card-section>
      <canvas id="bar-chart"></canvas>
    </q-card-section>
  </q-card>
</template>

<script>
import Chart from 'chart.js'
export default {
  props: ['nbrecode'],
  data () {
    return {
    }
  },
  mounted () {
    this.createChart('bar-chart')
  },
  methods: {
    createChart (chartId) {
      console.log(this.nbrecode)
      const ctx = document.getElementById(chartId)
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Nombre de Code Validé', 'Nombre de Code Non Validé'],
          datasets: [
            {
              label: 'Population',
              backgroundColor: ['#c45850', '#3cba9f'],
              data: this.nbrecode
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: 'Graphe de Code du mois sélectionnez'
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
