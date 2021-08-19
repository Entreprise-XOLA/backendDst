<template>
<q-page class="row" style="margin-top:20px;">
  <div class="col-xs-12 col-sm-3 col-md-3"></div>
  <div class="col-xs-12 col-sm-6 col-md-6">
    <q-list dense bordered padding class="rounded-borders">
      <center><div style="font-size: 20px; margin-bottom: 5px;">modification d'un rôle</div>
      <div class="q-gutter-md" style="max-width: 700px">
        <q-input outlined v-model="text" style="with: 300px;" label="Admin" :rules="[ myRule ]"/>
      </div><br/>

      <div class="q-gutter-md" style="max-width: 700px">
        <q-input outlined v-model="text" style="with: 300px;" label="administrateur du site" :rules="[ myRule ]"/>
      </div><br/>

      <div class="q-gutter-md" style="max-width: 700px">
        <q-input outlined v-model="text" style="with: 300px;" label="/" :rules="[ myRule ]" />
      </div><br/>
      <div class="q-gutter-md" style="max-width: 700px">
        <q-btn label="VALIDER" type="submit" color="primary" style="margin-top: 10px"  @click="verifier"/>
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
export default {
  data () {
    return {
      model: null,
      email: '',
      text: '',
      password: '',
      isPwd: true,
      options: [
        'Pro', 'Entreprise', 'Grand Compte'
      ]
    }
  },
  methods: {
    verifier () {
      this.$router.push('/listeabonnement')
    },
    nonverif () {
      this.$router.push('/accueilparametres')
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
