<template>
  <q-page class="column">
    <div>
        <h6 style="text-align:center;margin-bottom:40px">
            <strong>Le type d'abonnement auquel vous êtes souscrit</strong>
        </h6>
  </div>
   <div class="row justify-center">
      <div class="col-5">
        <q-input class="taille" filled v-model="email" type="Type d'abonnement" readonly>
          <template v-slot:before>
            <label>Type d'abonnement</label>
          </template>
        </q-input><br/>
        <q-input filled v-model="email" type="Option d'abonnement" readonly>
          <template v-slot:before>
            <label>Option d'abonnement</label>
          </template>
        </q-input><br/>
        
        <q-input filled v-model="email" type="Date Fin" readonly>
          <template v-slot:before>
            <label>Date Fin</label>
          </template>
        </q-input>
      </div>
      <div class="col-5">
        <q-input filled v-model="email" type="Type paiement" readonly>
          <template v-slot:before>
            <label>Type paiement</label>
          </template>
        </q-input><br/>
        <q-input filled v-model="email" type="Date Début" readonly>
          <template v-slot:before>
            <label>Date Début</label>
          </template>
        </q-input><br/>
      </div>
    </div>
  </q-page>
</template>
<style>
.taille{
  width: 98%;
}
.q-field__before.q-field__marginal.row.no-wrap.items-center {
  
    padding-right: 30px;

}
@media (max-width: 360px){
}

</style>
<script>
export default {
  name: 'PageIndex',
  data () {
    return {
    }
  },
  methods: {
   
  }
}
</script>
