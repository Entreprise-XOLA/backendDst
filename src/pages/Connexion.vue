<template>
  <div>
    <center>
    <q-card-section id="imgtete">
            <center>
            <img
              src="../assets/logo-dstech.jpg"
              style="height: 80px; max-width: 150px"
            />
            <!-- <q-item-label header style="color:white; font-size: 12px; padding-top: 0px;">
              Qui mieux qu'une femme pour vous conduire.
            </q-item-label> -->
            </center>
            <!-- <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <img
              src="../assets/image51.png" style="border-radius: 50px;"
            />
            </div> -->
          </q-card-section>
      <div class="q-pa-md">
      <div>
        <q-form @submit="postLogin" @reset="onReset">
          <q-input
              filled
              square clearable
              v-model="name"
              label="Téléphone portable"
              mask="(00228) ## - ## - ## - ##"
              hint="Exemple: (00228) ## - ## - ## - ##"
              lazy-rules
              :rules="[
                val =>
                  (val && val.length > 24  && val.length < 27) || 'Le Numéro de téléphone est de 8 chiffres'
              ]"
              onkeypress="verifierCaracteres(event); return false;"
            >
            <template v-slot:prepend>
              <q-icon name="phone" />
            </template>
          </q-input>
          <q-input
            outlined
            v-model="password"
            type="password"
            label="Password"
            lazy-rules
            :rules="[ val => !!val  || '*Le mot de passe est obligatoire' ,val => val.length < 16 || 'Maximum 16 charactères'] "
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </q-input>
          <div class="row">
            <div class="col-xs-7 col-sm-9 col-md-9" style="text-align:left;">
              <q-checkbox v-model="teal" label="Rester connecter" />
            </div>
          </div>
          <div class="row" style="margin:auto; display: inline-flex;">
            <div class="col-xs-5 col-sm-3 col-md-3" style="text-align:right;">
              <q-btn
                color="primary"
                text-color="white"
                label="Connexion"
                type="submit"
              />
            </div>
          </div>
          <div class="row" style="margin-top: 10px;">
            <div class="col-xs-7 col-sm-9 col-md-9" style="text-align:left;" @click="motdepasse">
               <q-chip color="white" text-color="grey" icon="lock" dense style=" margin-left:0px; margin-right:0px;">
                Mot de passe oublié?
              </q-chip>
            </div>
            <div class="col-xs-5 col-sm-3 col-md-3" style="text-align:right;" @click="inscription">
              <q-chip color="white" text-color="grey" icon="" dense style=" margin-left:0px; margin-right:0px;">
                Créer un compte
              </q-chip>
            </div>
          </div>
        </q-form>
      </div>
    </div>
      </center>
  </div>
</template>

<style lang="stylus" scoped>
.q-pa-md
  width 100%
  max-width:500px
</style>
<style>
#imgtete{
    background-image: url(../assets/logodstech.jpg);
}
@media (max-width: 360px){
.q-gutter-y-md, .q-gutter-md {
    margin-top: 143px;
}
}
@media (max-width: 768px){
.q-gutter-y-md, .q-gutter-md {
    margin-top: 143px;
}
}
</style>

<script>
import { axiosInstance } from 'boot/axios'
export default {
  name: 'PageConnexion',
  data () {
    return {
      name: null,
      password: null,
      teal: true,
      orange: false,
      postBody: null
    }
  },
  methods: {
    onReset () {
      this.name = null
      this.password = null
      this.accept = false
    },
    postLogin () {
      const params = new URLSearchParams()
      params.append('username', this.name)
      params.append('password', this.password)
      axiosInstance.post(`/Livraison/login1?`, params)
        .then((response) => {
           localStorage.setItem('idutilisateur', response.data.idutilisateur)
            localStorage.setItem('nom', response.data.nom)
            localStorage.setItem('prenom', response.data.prenom)
            localStorage.setItem('tel', response.data.tel)
            localStorage.setItem('token', response.data.token)
          console.log(response.data)
          this.$router.push('/droit')
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
    inscription () {
      //this.$router.push('/')
    },
    motdepasse () {
      //this.$router.push('/')
    }
  }
}
</script>
