<template>
<div id="q-app">
  <div class="q-pa-md">
    <q-table
      title="Treats"
      :data="tablistefacture"
      :columns="columns"
      row-key="idcontact"
      :filter="filter"
      :loading="loading"
      selection="single"
      :selected.sync="selected"
    >

      <template v-slot:top>
        <q-btn class="q-ml-sm" color="grey" :disable="loading" label="Répondre au message" @click="modifSelected(selected)"></q-btn>
        <!--<q-btn class="q-ml-sm" color="red" :disable="loading" label="Supprimer la facture" @click="removeRow"></q-btn>-->
        <q-space></q-space>
        <q-input borderless dense debounce="300" color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="search"></q-icon>
          </template>
        </q-input>
      </template>

    </q-table>
    <!--
     <div class="q-mt-md">
      Selected: {{ JSON.stringify(selected) }}
    </div>
    -->
  </div>
</div>
</template>

<script>
import { date } from 'quasar'
import { axiosInstance } from 'boot/axios'

export default {
 data () {
    return {
      loading: false,
      text: '',
      filter: '',
      tablistefacture: [],
      selected: [],
      rowCount: 10,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Nom',
          align: 'left',
          field: row => row.nom,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'prenom', align: 'center', label: 'Prenom', field: 'prenom', sortable: true },
        { name: 'objet', label: 'Objet', field: 'objet', sortable: true },
        { name: 'message1', label: 'Message', field: 'message1', sortable: true },
        { name: 'reponse', label: 'Réponse', field: 'reponse', sortable: true }
      ],
      data: this.tablistefacture,
      original: [],
      formattedString: null
    }
  },
  mounted () {
    let timeStamp = Date.now()
    this.formattedString = date.formatDate(timeStamp, 'DD MMMM YYYY')
    console.log(this.formattedString);
    axiosInstance.get(`/Livraison/liste_contact?`)
      .then((response) => {
        const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
      sleep(140).then(() => {
        this.tablistefacture = response.data.infos
          // this.graph = true
          console.log(this.tablistefacture);
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
  },
  methods: {
    // emulate fetching data from server
    modifSelected(id) {
      console.log(id[0].idcontact);
      localStorage.setItem("idcontact", id[0].idcontact);
       this.$router.push('/reponsemessage')
    },
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [ ...this.data.slice(0, index), addRow, ...this.data.slice(index) ]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [ ...this.data.slice(0, index), ...this.data.slice(index + 1) ]
        this.loading = false
      }, 500)
    }
  }
}
</script>
