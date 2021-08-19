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
          <q-tab name="mails" label="Ajout Course" />
          <q-tab name="alarms" label="" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated class="bg-white text-black">
          <q-tab-panel name="mails">
            <div class="text-h6"><q-btn color="primary" label="AJOUTER" @click="ajoututil" /></div>
            <center><div style="font-size: 20px; margin-bottom: 5px;">Listes des courses</div></center>
            <q-markup-table dark class="bg-blue-9">
              <thead>
                <tr>
                  <th class="text-left">Nom Livreur</th>
                  <th class="text-left">Prénom(s) Livreur</th>
                  <th class="text-right">Adresse Départ</th>
                  <th class="text-right">Adresse Arrivée</th>
                  <th class="text-right">Date Livraison</th>
                  <th class="text-right">Prix</th>
                  <!-- <th class="text-right">Actions</th> -->
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in listecode"  :key="item.idcode">
                  <td class="text-left">{{item.nom}}</td>
                  <td class="text-left">{{item.prenom}}</td>
                  <td class="text-right">{{item.adressedepart}}</td>
                  <td class="text-right">{{item.adressearrive}}</td>
                  <td class="text-right">{{item.datelivraison}}</td>
                  <td class="text-right">{{item.prix}} FCFA</td>
                  <td class="text-right">
                  <!-- <q-btn icon="create" stack glossy color="purple" @click="editutil(item.idcode)" /> -->
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
      axiosInstance.get('/Livraison/liste_course')
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
      this.$router.push('/ajoutlivreur')
    },
    ajoutrole () {
      this.$router.push('/ajoutrolepermission')
    },
    editutil (idcode) {
      this.$router.push('/editutilisateur')
    },
    
    editrole () {
      this.$router.push('/editrolepermission')
    }
  }
}
</script>
