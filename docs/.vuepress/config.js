const path = require('path')

module.exports = {
  dest: 'public',
  title: 'MDD blog',
  description: 'MadeleineDev blog',
  head: [
    ['meta', { name: 'nofollow' }]
  ],
  themeConfig: {
    author: 'Srimko',
  },
  additionalPages: [
    {
      path: '/mentionlegales/',
      filePath: path.resolve(__dirname, '../ml.md'),
      frontmatter: {
        layout: 'Layout'
      }
    }
  ]
}