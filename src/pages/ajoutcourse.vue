<template>
<q-page class="row" style="margin-top:20px;">
  <div class="col-xs-12 col-sm-3 col-md-3"></div>
  <div class="col-xs-12 col-sm-6 col-md-6">
    <q-list dense bordered padding class="rounded-borders">
      <center><div style="font-size: 20px; margin-bottom: 5px;">Ajout d'une course</div>
      <div class="q-gutter-md" style="max-width: 700px">
            <q-select standout="bg-grey text-white" bg-color="grey" color="white" v-model="consultypepaiement" :options="infotypecode" option-value="idutilisateur"
                option-label="nom" label="Selectionnez votre livreur" emit-value map-options/><br/>
      </div><br/>

      <div class="q-gutter-md" style="max-width: 700px">
        <q-input
              filled
              v-model="adressedepart"
              bg-color="grey"
              color="white"
              label="Entrer l'adresse de départ"
              :rules="[
              val => !!val || '* Champ requis',
              val => val.length > 2 || 'Saisissez au moins 2 caractères',
            ]"
          lazy-rules
            />
      </div><br/>
      <div class="q-gutter-md" style="max-width: 700px">
        <q-input
              filled
              v-model="adressearrive"
              bg-color="grey"
              color="white"
              label="Entrer l'adresse arrivée"
              :rules="[
              val => !!val || '* Champ requis',
              val => val.length > 2 || 'Saisissez au moins 2 caractères',
            ]"
          lazy-rules
            />
        
      </div><br/>
      <div class="q-gutter-md" style="max-width: 700px">
      <q-input filled v-model="datelivraison" mask="date" :rules="['date']" label="Entrer la date">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="datelivraison">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
      </div><br/>
      <div class="q-gutter-md" style="max-width: 700px">
      <q-input
        ref="ageRef"
        filled
        type="number"
        v-model="prix"
        label="Entrez le prix en FCFA*"
        lazy-rules
        :rules="ageRules"
      />
      </div><br/>
      <div class="q-gutter-md" style="max-width: 700px">
        <q-btn label="VALIDER" color="primary" style="margin-top: 10px"  @click="verifier"/>
        <q-btn label="NON VALIDER" type="reset" color="primary" flat style="text-align:right"  @click="nonverif"/>
      </div>
      </center>
    </q-list>
  </div>
  <div class="col-xs-12 col-sm-3 col-md-3"></div>
  </q-page>
</template>
<style>
@media (max-width: 360px){
  .select{
    width: 150px !important;
  }

}

</style>
<script>
import { Notify } from 'quasar'
import { axiosInstance } from 'boot/axios'
export default {
  data () {
    return {
      model: null,
      adressedepart: null,
      adressearrive: null,
      datelivraison: null,
      prix: null,
      nom: null,
      prenom: null,
      tel: null,
      ville: null,
      quartier: null,
      email: null,
      password: null,
      confirmpwd: null,
      text: null,
      isPwd: true,
      consultypepaiement: null,
      infotypecode: null,
      date: '2021/01/01',
      age: null,
      ageRef: null,
      ageRules: [
        val => (val !== null && val !== '') || 'Entrez un type de prix',
        val => (val > 1 && val < 999000000000) || 'Entrez un prix valide'
      ],
    }
  },
  mounted () {
      axiosInstance.get('/Livraison/liste_livreur?')
        .then((response) => {
        localStorage.setItem('idlivreur', response.data.infos.idutilisateur)
        this.infotypecode = response.data.infos
        console.log(this.infotypecode)
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
        // this.idclient = localStorage.getItem("idutilisateur");
        // console.log(this.idclient);
  },
  methods: {
    verifier () {
        
      if (this.adressedepart != null && this.adressearrive!= null && this.datelivraison != null && this.prix != null && this.consultypepaiement != null) {
      const params = new URLSearchParams()
      this.idrole = 4;
      params.append('idutilisateur', this.consultypepaiement)
      params.append('adressedepart', this.adressedepart)
      params.append('adressearrive', this.adressearrive)
      params.append('datelivraison', this.datelivraison)
      params.append('prix', this.prix)
      //console.log(this.file)
      
       axiosInstance.post(`/Livraison/ajout_course?`, params)
        .then(response => { 
          // envoie des infos
          if (response.data.status === 201) {
            console.log(response.data);
            //localStorage.setItem("idtype", response.data.info.idtype);
            //localStorage.setItem("numpiece", response.data.info.NumPiece);
            // localStorage.setItem("nom", response.data.info.nom);
            // localStorage.setItem("prenom", response.data.info.prenom);
            // localStorage.setItem("tel", response.data.info.tel);
            //localStorage.setItem("quartier", response.data.info.quartier);
            // localStorage.setItem("email", response.data.info.email);
            
          }
          this.$router.push("/droit");
            this.$q.notify({
            color: "green",
            position: "top",
            message: "Utilisateur créer avec succès.",
            icon: "close"
          });
          
        })
        .catch(e => {
          this.$q.notify({
            color: "red",
            position: "top",
            message: "Erreur de chargement de la page",
            icon: "report_problem"
          });
        });
      } else {
        this.$q.notify({
          color: "negative",
          position: "top",
          message: "Veuillez remplir tous les champs",
          icon: "close"
      });
      }
      //
    
    },
    nonverif () {
      this.$router.push('/droit')
    },

    myRule (val) {
      // simulating a delay

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // call
          //  resolve(true)
          //     --> content is valid
          //  resolve(false)
          //     --> content is NOT valid, no error message
          //  resolve(error_message)
          //     --> content is NOT valid, we have error message
          resolve(!!val || '* Requis (e)')

          // calling reject(...) will also mark the input
          // as having an error, but there will not be any
          // error message displayed below the input
          // (only in browser console)
        }, 1000)
      })
    }
  }
}
</script>
