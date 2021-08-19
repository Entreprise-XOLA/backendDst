<template>
  <div class="row justify-center q-pa-lg">
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm" style="margin-bottom: 20px;" v-if="graph==true">
      <line-chart v-bind:inscription="infoinscri" v-bind:abonne="infoabonnement" v-bind:codemois="infocode"></line-chart>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm">
      <pie-chart v-bind:inscrip="infonbreinscrnon"></pie-chart>
    </div>
  </div>
</template>

<script>
import LineChart from '../components/charts/LineChart'
import PieChart from '../components/charts/PieChart'
export default {
  components: {
    LineChart,
    PieChart
  },
  data () {
    return {
      infocode: null,
      infoinscri: null,
      infonbreinscrnon: null,
      infoabonnement: null,
      data: null,
      options: null,
      response: null,
      infoabscencetud: null,
      infopresencetud: null,
      graph: false
    }
  },
  mounted () {
    this.graph = false
      this.$axios.get('http://vps732924.ovh.net/Neptune/index.php/GrandPublique/nbre_abonnementmois')
        .then((response) => {
          this.infoabonnement = response.data.infos
          // this.graph = true
          console.log(this.infoabonnement)
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Erreur de chargement de la page',
            icon: 'report_problem'
          })
        })
    this.$axios.get('http://vps732924.ovh.net/Neptune/index.php/GrandPublique/nbre_inscriptionmois')
        .then((response) => {
          const sleep = (milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds))
          }
          sleep(300).then(() => {
            this.infoinscri = response.data.infos
            //this.graph = true
            console.log(this.infoinscri)
          })
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Erreur de chargement de la page',
            icon: 'report_problem'
          })
        })
    this.$axios.get('http://vps732924.ovh.net/Neptune/index.php/GrandPublique/nbre_codemois')
        .then((response) => {
          const sleep = (milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds))
          }
          sleep(500).then(() => {
            this.infocode = response.data.infos
            this.graph = true
            console.log(this.infocode)
          })
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Erreur de chargement de la page',
            icon: 'report_problem'
          })
        })
    this.$axios.get('http://vps732924.ovh.net/Neptune/index.php/GrandPublique/nbre_inscriptionvalidation')
        .then((response) => {
          const sleep = (milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds))
          }
          sleep(550).then(() => {
            this.infonbreinscrnon = response.data.infos
            this.graph = true
            console.log(this.infonbreinscrnon)
          })
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Erreur de chargement de la page',
            icon: 'report_problem'
          })
        })
  }
}
</script>
