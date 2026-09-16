const fs = require('node:fs')
const path = require('node:path')

const distDirectory = path.resolve(__dirname, '..', 'dist')
const indexPath = path.join(distDirectory, 'index.html')
const fallbackPath = path.join(distDirectory, '404.html')

fs.copyFileSync(indexPath, fallbackPath)
console.log('Created dist/404.html for GitHub Pages route fallback')
