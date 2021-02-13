const { description, homepage } = require('../../package.json')

module.exports = {
  base: '/vue-chk/',
  title: 'vue-chk',
  description: `${description}`,
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Examples',
        link: '/examples/'
      }
    ],
    repo: homepage,
    search: false
  }
}
