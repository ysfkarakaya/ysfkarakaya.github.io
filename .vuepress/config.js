const fs = require('fs');

function getMdFiles(path) {
  const dir = fs.readdirSync(path);
  const dirFiles = dir.filter( elm => elm.match(new RegExp(`.*\.(${'md'})`, 'ig')));
  let files = []
  dirFiles.forEach(function(item) {
    files.push('/' + path + '/' + item.replace(/\.[^/.]+$/, ""))
  })
  return files
}

let sideBar = [{
  title: 'Sayfalar',
  collapsable: false,
  children: [
      ['/', 'Ana Sayfa'], 
      ['/pages/hakkimizda', 'Hakkımda'], 

      ['/pages/iletisim', 'İletişim']

    ]
}]

const sideBarNames = [
    ['test2', 'Kategori'],
    ['yazilim', 'Yazılım']
]

function getSideBars(names) {
  let sideBarList = {}
  names.forEach(function(item) {
    sideBar.push({
      title: item[1],
      collapsable: false,
      children: getMdFiles(item[0].toLowerCase())
    })
  })
  return sideBar
}

module.exports = {
    plugins: ['@vuepress/last-updated'],
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],

  title: 'Y.Karakaya',
  description: 'Y.Karakaya',
 

  themeConfig: {
  	  lastUpdated: 'Last Updated', 
  	nav: [
  	    { text: 'Hakkımda', link: '/pages/hakkimizda.html'},
  	    { text: 'İletişim', link: '/pages/iletisim.html'},
        { text: 'GitHub', link: 'https://github.com/ykyazilim/'},

  	],
  	sidebar: getSideBars(sideBarNames),
    logo: "/logo.png"
  }
}