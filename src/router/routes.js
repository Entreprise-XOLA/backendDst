
const routes = [
  {
    path: '/',
    component: () => import('pages/Connexion.vue')
  },
  {
    path: '/accueil',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/monAbonnement.vue') }
    ]
  },
  {
    path: '/validinscription',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/messageAKiikode.vue') }
    ]
  },
  {
    path: '/typeabonnement',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/typeabonnement.vue') }
    ]
  },
  {
    path: '/dateexpiration',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dateexpiration.vue') }
    ]
  },
  {
    path: '/donneentreprise',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/donnéeentreprise.vue') }
    ]
  },
  {
    path: '/droit',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/droits.vue') }
    ]
  },
  {
    path: '/listecommande',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/listecommande.vue') }
    ]
  },
  {
    path: '/codeaccueil',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/clientkiikode.vue') }
    ]
  },
  {
    path: '/ajoututilisateur',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ajoututilisateur.vue') }
    ]
  },{
    path: '/ajoutlivreur',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ajoutcourse.vue') }
    ]
  },
  {
    path: '/ajoutrolepermission',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ajoutrolepermission.vue') }
    ]
  },
  {
    path: '/editutilisateur',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/editutilisateur.vue') }
    ]
  },
  {
    path: '/editrolepermission',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/editrolepermission.vue') }
    ]
  },
  {
    path: '/listemessage',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/listemessage.vue') }
    ]
  },
  {
    path: '/reponsemessage',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/reponsemessage.vue') }
    ]
  },
  {
    path: '/navigationcode/:idcode',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/navigationcode.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
