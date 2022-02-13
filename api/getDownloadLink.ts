// @ts-ignore
import type { VercelRequest, VercelResponse } from '@vercel/node';
const https = require('https')

export default (request: VercelRequest, response: VercelResponse) => {
  https.get('https://api.github.com/repos/DGP-Studio/Snap.Genshin/releases/latest', result => {
    let data;
    result.on('data', chunk => {
      data += chunk;
    })
    result.on('end', () => {
      console.warn(data)
      console.warn(typeof data)
      let downloadLink: string = JSON.parse(data).assets[0].browser_download_url
      let fastDownloadLink: string = downloadLink.replace('github.com', 'download.fastgit.org')
      response.status(200).send(`
        <script>window.location.replace(${fastDownloadLink})</script>
      `)
    })
  }).on('error', error => {
    response.status(500).send(JSON.stringify(error))
    console.error(error)
  })
};