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
            <center><div style="font-size: 20px; margin-bottom: 5px;">Listes des courses</div></center>
            <q-markup-table dark class="bg-blue-9">
              <thead>
                <tr>
                  <th class="text-left">Nom et prénom(s) du demandeur</th>
                  <th class="text-left">Nom Destinataire</th>
                  <th class="text-left">Prénom(s) Destinataire</th>
                  <th class="text-right">Adresse Destinataire</th>
                  <th class="text-right">Télephone destinataire</th>
                  <th class="text-right">Nature Payement</th>
                  <th class="text-right">Longitude</th>
                  <th class="text-right">Latitude</th>
                  <!-- <th class="text-right">Actions</th> -->
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in listecode"  :key="item.idcommande">
                  <td class="text-left">{{item.nom}} {{' '}} {{item.prenom}}</td>
                  <td class="text-left">{{item.nomdestinataire}}</td>
                  <td class="text-left">{{item.prenomdestinataire}}</td>
                  <td class="text-right">{{item.adressedestinataire}}</td>
                  <td class="text-right">{{item.teldestinataire}}</td>
                  <td class="text-right">{{item.libelle}}</td>
                  <td class="text-right">{{item.longitude}} </td>
                  <td class="text-right">{{item.latitude}} </td>
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
      axiosInstance.get('/Livraison/liste_commande')
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
