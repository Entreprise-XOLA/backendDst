<template>
  <q-card class="bg-white full-width">
    <q-card-section>
      <canvas id="doughnut-chart"></canvas>
    </q-card-section>
  </q-card>
</template>

<script>
import Chart from 'chart.js'
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.createChart('doughnut-chart')
  },
  methods: {
    createChart (chartId) {
      const ctx = document.getElementById(chartId)
      const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Abonnement valide', 'Abonnement non valide'],
          datasets: [
            {
              label: 'Population (millions)',
              backgroundColor: ['#8e5ea2', '#e8c3b9'],
              data: [2478, 5267]
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Graphe d\'abonnement du mois sélectionner'
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
