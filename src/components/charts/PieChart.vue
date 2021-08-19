<template>
  <q-card class="bg-white full-width">
    <q-card-section>
      <canvas id="pie-chart"></canvas>
    </q-card-section>
  </q-card>
</template>

<script>
import Chart from 'chart.js'
export default {
  props: ['inscrip'],
  data () {
    return {
    }
  },
  mounted () {
    this.createChart('pie-chart')
  },
  methods: {
    createChart (chartId) {
      console.log(this.inscrip)
      const ctx = document.getElementById(chartId)
      const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Nombre d\'inscription Validé', 'Nombre d\'inscription non validée'],
          datasets: [{
            label: 'Population',
            backgroundColor: ['#3e95cd', '#8e5ea2'],
            data: [7, 5]
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Graphe d\'inscription totale'
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
