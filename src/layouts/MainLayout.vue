<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
      <q-toolbar-title>DSTECH</q-toolbar-title>
        <q-toolbar-title>
        </q-toolbar-title>
        
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
    <q-list>
        <center>
          <q-item-label header>
            <img
              src="../assets/logo-dstech.jpg"
              style="height: 110px; max-width: 110px;margin-top:20px auto"
            />
          </q-item-label>
        </center>
        <!-- Menu avec sous menu -->
        
        <q-item to="/droit">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label style="font-size:15pt;">Listes Livreur</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/codeaccueil">
          <q-item-section avatar>
            <q-icon name="book" />
          </q-item-section>
          <q-item-section>
            <q-item-label style="font-size:15pt;">Listes des Courses</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/listecommande">
          <q-item-section avatar>
            <q-icon name="book" />
          </q-item-section>
          <q-item-section>
            <q-item-label style="font-size:15pt;">Listes des Commandes</q-item-label>
          </q-item-section>
        </q-item>
        <!--
        <q-item to="#/statistique">
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>
          <q-item-section>
            <q-item-label style="font-size:15pt;">Statistiques</q-item-label>
          </q-item-section>
        </q-item>
        -->
        <q-item to="/listemessage">
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>
          <q-item-section>
            <q-item-label style="font-size:15pt;">Discussion</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="lock" />
          </q-item-section>
          <q-item-section>
            <q-item-label style="font-size:15pt;" @click="logout">Se déconnecté</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<style>
.q-item.q-router-link--active, .q-item--active {
    color: #1976d2 !important;
}
</style>
<script>
import { openURL } from 'quasar'
export default {
  name: 'MainLayout',

  components: {
  },

  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    openURL,
    logout() {
      localStorage.clear();
      this.$q.notify({
        color: "primary",
        position: "top",
        message: "Votre compte est déconnecté",
        icon: "close"
      });
      this.$router.push("/");
    }
  }
}
</script>
