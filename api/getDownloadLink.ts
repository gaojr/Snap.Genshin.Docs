// @ts-ignore
import type { VercelRequest, VercelResponse } from '@vercel/node';
const https = require('https')

export default (request: VercelRequest, response: VercelResponse) => {
  const { source } = request.query
  if ( source === 'github' ) {
    https.get({
      host: 'api.github.com',
      path: '/repos/DGP-Studio/Snap.Genshin/releases/latest',
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.82 Safari/537.36'
      }
    }, result => {
      let data = ''
      result.on('data', chunk => {
        data += chunk
      })
      result.on('end', () => {
        let {
          assets: [
            {
              browser_download_url: downloadLink
            }
          ]
        } = JSON.parse(data)
        response.status(200).send(`
          <p>If the download has started, you can close this tab. If not, please click the link below.</p>
          <p><a href="${ downloadLink }">${ downloadLink }</a></p>
          <script>window.location.replace('${ downloadLink }')</script>
        `)
      })
    }).on('error', error => {
      response.status(500).send(JSON.stringify(error, null, 2))
      console.error(error)
    })
  } else {
    https.get({
      host: 'api.github.com',
      path: '/repos/DGP-Studio/Snap.Genshin/releases/latest',
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.82 Safari/537.36'
      }
    }, result => {
      let data = ''
      result.on('data', chunk => {
        data += chunk
      })
      result.on('end', () => {
        let {
          assets: [
            {
              browser_download_url: downloadLink
            }
          ]
        } = JSON.parse(data)
        let fastDownloadLink: string = downloadLink.replace('github.com', 'download.fastgit.org')
        response.status(200).send(`
          <p>如果下载已经开始，您可以关闭这个标签页。如果没有，请点击下面的链接。</p>
          <p><a href="${ fastDownloadLink }">${ fastDownloadLink }</a></p>
          <script>window.location.replace('${ fastDownloadLink }')</script>
        `)
      })
    }).on('error', error => {
      response.status(500).send(JSON.stringify(error, null, 2))
      console.error(error)
    })
  }
};