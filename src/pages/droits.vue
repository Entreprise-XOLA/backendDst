<template>
  <div class="q-pa-md">
    <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="bg-grey-3 text-grey-7"
          active-color="primary"
          indicator-color="purple"
          align="justify"
        >
          <q-tab name="mails" label="Ajout Livreur" />
          <q-tab name="alarms" label="" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated class="bg-white text-black">
          <q-tab-panel name="mails">
            <div class="text-h6"><q-btn color="primary" label="AJOUTER" @click="ajoututil" /></div>
            <center><div style="font-size: 20px; margin-bottom: 5px;">Listes des livreurs</div></center>
            <q-markup-table dark class="bg-blue-9">
              <thead>
                <tr>
                  <th class="text-left">Nom</th>
                  <th class="text-right">Prenoms</th>
                  <th class="text-right">Tel</th>
                  <th class="text-right">Emails</th>
                  <th class="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in listecode"  :key="item.idutilisateur">
                  <td class="text-left">{{item.nom}}</td>
                  <td class="text-right">{{item.prenom}}</td>
                  <td class="text-right">{{item.tel}}</td>
                  <td class="text-right">{{item.email}}</td>
                  <td class="text-right"><q-btn icon="delete" stack glossy color="red" @click="editutil(item.idutilisateur)" />
                  <!-- <q-btn icon="delete" stack glossy color="red"  @click="editutil(item.idcode)" /> -->
                  </td>
                </tr>
              </tbody>
    </q-markup-table>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
  </div>
</template>

<script>
import { axiosInstance } from 'boot/axios'
export default {
  data () {
    return {
      tab: 'mails',
      listecode: null
    }
  },
   mounted () {
      axiosInstance.get('/Livraison/liste_livreur?')
        .then((response) => {
          this.listecode = response.data.infos
          // this.graph = true
          console.log(this.listecode)
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Erreur de chargement de la page',
            icon: 'report_problem'
          })
        })
        this.nom = localStorage.getItem("nom");
        this.prenom = localStorage.getItem("prenom");
  },
  methods: {
    verifcodeinsc () {
      this.$router.push('/validcodeinscription')
    },
    ajoututil () {
      this.$router.push('/ajoututilisateur')
    },
    ajoutrole () {
      this.$router.push('/ajoutrolepermission')
    },
    editutil (idcode) {
      console.log(idcode)
      axiosInstance.get('/Livraison/suppression_livreur?idutilisateur='+idcode)
        .then((response) => {
          //this.listecode = response.data.infos
          this.$q.notify({
            color: 'positive',
            position: 'top',
            message: 'Livreur supprimé avec succès',
            icon: 'report_problem'
          })
            axiosInstance.get('/Livraison/liste_livreur?')
          .then((response) => {
            this.listecode = response.data.infos
            // this.graph = true
            console.log(this.listecode)
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
    
    editrole () {
      this.$router.push('/editrolepermission')
    }
  }
}
</script>
