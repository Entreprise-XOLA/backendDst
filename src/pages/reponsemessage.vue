<template>
    <q-form @submit="ajoutReponse" >
        <div class="row justify-center">
            <h6>Répondre aux messages</h6>
        </div>
        <center>
        <div class="row justify-center">
            <q-input
                v-model="reponse"
                filled
                clearable
                type="textarea"
                color="red-12"
                label="Entrez votre reponse içi"
                style="width: 300px;"
            />
        </div><br/>
            <q-btn color="green"  label="Repondre message" type="submit"></q-btn>
            <q-btn color="primary"  label="Annuler"  @click="retour"></q-btn>
        </center>
    </q-form>
</template>

<script>
import {axiosInstance} from 'boot/axios'
export default {
 data () {
    return {
     reponse: null,
     idutilisateur: null
    }
  },
   mounted () {
    this.idcontact = localStorage.getItem("idcontact");    
    ///*
    axiosInstance.get('/Livraison/info_message?idcontact='+this.idcontact)
        .then((response) => {
          console.log(response.data)
          this.idutilisateur = response.data.infos[0].idutilisateur
          console.log(this.idutilisateur);
        })   

        console.log(this.idutilisateur)
  },
  methods: {
    ajoutReponse(){
      if (this.reponse != null ) {
       const params = new URLSearchParams()
      params.append('idcontact', this.idcontact)
      params.append('reponse', this.reponse)
      params.append('idutilisateur', this.idutilisateur)
      axiosInstance.get(`/Livraison/ajout_reponse?idcontact=`+this.idcontact+'&reponse='+this.reponse+'&idutilisateur='+this.idutilisateur)
        .then((response) => {
          if (response.data.status === 201) {
          console.log(response.data)
          }
          this.$q.notify({
            color: 'green',
            position: "top",
            message: "Enregistrement effectué avec succès",
            icon: "close"
          });
          this.$router.push('/listemessage')
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Erreur de chargement de la page',
            icon: 'report_problem'
          })
        })
        } else {
        this.$q.notify({
          color: "negative",
          position: "top",
          message: "Veuillez saisir une information dans la zone de saisie",
          icon: "close"
      });
      }
    },
    retour(){
          this.$router.push('/listemessage')
    }
  }
}
</script>
