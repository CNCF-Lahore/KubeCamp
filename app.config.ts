export default defineAppConfig({
  docus: {
    title: 'Kubernetes BootCamp',

    description: 'The best place to start your Kubernetes Journey',

    url: 'cncf-lahore.github.io/Kubernetes-Bootcamp',

    image: 'https://i.ibb.co/PGkhK2D/logo-07df0d71aa68491bbca25e45a62ac299.png',

    socials: {},

    layout: 'default',

    header: {
      title: '',
      logo: false,
      showLinkIcon: false,
      fluid: false,
      exclude: []
    },

    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },

    footer: {
      credits: {
        icon: '',
        text: 'Made with ❤️by Adil Shahzad',
        href: 'https://www.linkedin.com/in/adilshehzad7/'
      },
      textLinks: [],
      iconLinks: [],
      fluid: false
    },

    github: {
      branch: 'main',
      repo: '/Kubernetes-Bootcamp/',
      owner: 'CNCF-Lahore',
      edit: false
    },
  }
})

function defineAppConfig(arg0: { docus: { title: string; description: string; url: string; image: string; socials: {}; layout: string; header: { title: string; logo: boolean; showLinkIcon: boolean; fluid: boolean; exclude: never[]; }; aside: { level: number; collapsed: boolean; exclude: never[]; }; footer: { credits: { icon: string; text: string; href: string; }; textLinks: never[]; iconLinks: never[]; fluid: boolean; }; github: { branch: string; repo: string; owner: string; edit: boolean; }; }; }) {
  throw new Error("Function not implemented.");
}
