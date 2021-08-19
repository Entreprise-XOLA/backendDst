<template>
  <q-card class="bg-white full-width">
    <q-card-section>
      <canvas id="horizontal-bar-chart"></canvas>
    </q-card-section>
  </q-card>
</template>

<script>
import Chart from 'chart.js'
export default {
  props: ['inscription'],
  data () {
    return {
    }
  },
  mounted () {
    this.createChart('horizontal-bar-chart')
  },
  methods: {
    createChart (chartId) {
      console.log(this.inscription)
      const ctx = document.getElementById(chartId)
      const myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
          labels: ['Inscription validée', 'Inscription non validée'],
          datasets: [
            {
              label: 'Nombre de personnes',
              backgroundColor: ['#3e95cd', '#8e5ea2'],
              data: this.inscription
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: 'Graphe d\'inscription du mois séléctionnez'
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
