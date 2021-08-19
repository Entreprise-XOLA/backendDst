<template>
<q-page class="row" style="margin-top:20px;">
  <div class="col-xs-12 col-sm-3 col-md-3"></div>
  <div class="col-xs-12 col-sm-6 col-md-6">
    <q-list dense bordered padding class="rounded-borders">
      <center><div style="font-size: 20px; margin-bottom: 5px;">Modification d'un livreur</div>
      <div class="q-gutter-md" style="max-width: 700px">
        <q-input outlined v-model="nom" style="with: 300px;" label="Entrez le nom de l'utilisateur" :rules="[ myRule ]"/>
      </div><br/>

      <div class="q-gutter-md" style="max-width: 700px">
        <q-input outlined v-model="prenom" style="with: 300px;" label="Entrez le prenom de l'utilisateur" :rules="[ myRule ]"/>
      </div><br/>

      <div class="q-gutter-md" style="max-width: 700px">
        <q-input
          outlined
          square clearable
          v-model="tel"
          label="Téléphone portable"
          mask="(00228) ## - ## - ## - ##"
          hint="Exemple: (00228) ## - ## - ## - ##"
          :rules="[ myRule ]" 
        >
        <template v-slot:prepend>
          <q-icon name="phone" />
        </template>
        </q-input>
      </div><br/>
      <div class="q-gutter-md" style="max-width: 700px">
        <q-input square clearable v-model="email" type="email" label="Entrez l'email" id="email" :rules="[
              val => !!val || '* Champ requis',
              val => val.length > 6 || 'L\'email doit respecter le format d\'email',
            ]"
        lazy-rules filled onchange="validate">
            <template v-slot:prepend>
              <q-icon name="mail" />
            </template>
          </q-input>
        
      </div><br/>
      <div class="q-gutter-md" style="max-width: 700px">
      <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" label="Entrez votre mot de passe" :rules="[ myRule ]">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      </div><br/>
      <div class="q-gutter-md" style="max-width: 700px">
      <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" label="Entrez votre mot de passe" :rules="[ myRule ]">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
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
      nom: '',
      prenom: '',
      tel: '',
      text: '',
      email: '',
      isPwd: true,
      password: '',
      options: [
        'Pro', 'Entreprise', 'Grand Compte'
      ]
    }
  },
  methods: {
    verifier () {
      
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
