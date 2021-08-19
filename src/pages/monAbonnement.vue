<template>
  <div class="q-pa-md">
    <q-markup-table dark class="bg-indigo-8">
      <thead>
        <tr>
          <th class="text-left">N° de compte</th>
          <th class="text-right">Nom</th>
          <th class="text-right">Raison sociale</th>
          <th class="text-right">Prénom (1)</th>
          <th class="text-right">Prénom ( 2)</th>
          <th class="text-right">Nom de jeune fille</th>
          <th class="text-right">Quartier</th>
          <th class="text-right">KIIKODE</th>
          <th class="text-right">Statut</th>
          <th class="text-right">Situation</th>
          <th class="text-right">Y aller?</th>
          <th class="text-right">Partager</th>
          <th class="text-right">Imprimer</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in listecode"  :key="item.idcode">
          <td class="text-left"></td>
          <td class="text-right"></td>
          <td class="text-right"></td>
          <td class="text-right"></td>
          <td class="text-right"></td>
          <td class="text-right"></td>
          <td class="text-right"></td>
          <td class="text-right"></td>
          <td class="text-right"></td>
          <td class="text-right"></td>
          <td class="text-right"></td>
          <td class="text-right"></td>
          <td class="text-right"></td>
          <td class="text-right"></td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listecode: null
    }
  },
  mounted () {
      this.$axios.get('http://vps732924.ovh.net/Neptune/index.php/GrandPublique/liste_code')
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
  },
  methods: {
    verif ($id) {
      localStorage.setItem('id_code', $id);
      console.log($id);
      this.$router.push('/verificationcodeattente/id_code='+$id)
    },
    emplacement ($id) {
      console.log($id);
      localStorage.setItem('id_code', $id);
      this.$router.push('/navigationcode/id_code='+$id)
    },
  }
}
</script>
