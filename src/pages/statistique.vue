<template>
  <div class="row justify-center q-pa-lg">
    <div class="col-sm-4 col-md-4 col-xs-8">
      <q-input filled v-model="date" mask="date" label="Date début" :rules="['date']">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="date" @input="() => $refs.qDateProxy.hide()" />
          </q-popup-proxy>
        </q-icon>
      </template>
      </q-input>
    </div>&nbsp;
      <div class="col-sm-4 col-md-4 col-xs-8">
        <q-input filled v-model="date1" mask="date" label="Date Fin" :rules="['date']">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="date1" @input="() => $refs.qDateProxy.hide()" />
          </q-popup-proxy>
        </q-icon>
      </template>
      </q-input>
      </div>
      &nbsp;
      <div class="" style="text-align:center;">
            <q-btn color="white" text-color="black" label="Consulter" type="submit" @click="envoiedate" />
      </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm" v-if="graph==true">
      <bar-chart v-bind:nbrecode="infocode"></bar-chart>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm" v-if="graph==true">
      <horizontal-bar-chart v-bind:inscription="infoinscription" ></horizontal-bar-chart>
    </div>
    <!--
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm">
      <doughnut-chart></doughnut-chart>
    </div>
    -->
  </div>
</template>

<script>
import BarChart from '../components/charts/BarChart'
import HorizontalBarChart from '../components/charts/HorizontalBarChart'
//import DoughnutChart from '../components/charts/DoughnutChart'
export default {
  data () {
    return {
      model: null,
      date: '2020/01/01',
      date1: '2021/02/01',
      infoinscription: null,
      infocode: null,
      graph: false
    }
  },
  components: {
    BarChart,
    HorizontalBarChart,
    //DoughnutChart
  },
  methods: {
    envoiedate () {
      const params = new URLSearchParams()
      params.append('idutilisateur', this.idutilisateur)
      params.append('nom', this.date)
      params.append('tel', this.date1)
      this.graph = false
      this.$axios.get('http://vps732924.ovh.net/Neptune/index.php/GrandPublique/nbre_inscriptionperiode?dateajout1='+this.date+'&dateajout2='+this.date1)
        .then((response) => {
          this.infoinscription = response.data.infos
          // this.graph = true
          console.log(this.infoinscription)
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Erreur de chargement de la page',
            icon: 'report_problem'
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
        this.graph = false
        this.$axios.get('http://vps732924.ovh.net/Neptune/index.php/GrandPublique/nbre_codeperiode?dateajout1='+this.date+'&dateajout2='+this.date1)
        .then((response) => {
          console.log(this.date1)
          const sleep = (milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds))
          }
          sleep(200).then(() => {
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
    }
  }
}
</script>
