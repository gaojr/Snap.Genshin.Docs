// @ts-ignore
import type {VercelRequest, VercelResponse} from '@vercel/node';

const https = require('https')

export default (request: VercelRequest, response: VercelResponse) => {
  /*定义返回数据的函数*/
  function responseDownloadURL(URL): void {
    response.status(200).send(`
      <!DOCTYPE html>
      <html lang="zh-CN">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Download</title>
      </head>
      <body>
        <p>If the download has started, you can close this tab. If not, please click the link below.</p>
        <p>如果下载已经开始，您可以关闭这个标签页。如果没有，请点击下面的链接。</p>
        <p><a href="${URL}">${URL}</a></p>
        <script>window.location.replace('${URL}')</script>
      </body>
      </html>
    `)
  }
  /*从请求参数中提取 source 参数*/
  const {source} = request.query
  /*使用 Github 的 api 获取仓库最新的 release 信息*/
  https.get({
    /*定义域名*/
    host: 'api.github.com',
    /*定义路径*/
    path: '/repos/DGP-Studio/Snap.Genshin/releases/latest',
    /*定义请求头*/
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.82 Safari/537.36'
    }
  }, result => {
    /*请求成功后的回调函数*/
    /*定义 data 变量存放数据*/
    let data = ''
    result.on('data', chunk => {
      /*将获取到的数据块保存到 data 变量*/
      data += chunk
    })
    result.on('end', () => {
      /*请求完成后的回调函数*/
      /*使用解构赋值从 data 中提取下载链接*/
      let {
        assets: [
          {
            browser_download_url: downloadURL
          }
        ]
      } = JSON.parse(data)
      /*判断返回哪个源的下载地址*/
      if (source === 'github') {
        /*返回 Github 提供的下载地址*/
        responseDownloadURL(downloadURL)
      } else {
        /*将 Github 提供的下载地址转换成 FastGit 加速后的下载地址并返回*/
        responseDownloadURL(downloadURL.replace('github.com', 'download.fastgit.org'))
      }
    })
  }).on('error', error => {
    /*请求错误后的处理函数*/
    /*返回错误内容*/
    response.status(500).send(JSON.stringify(error, null, 2))
    /*打印错误内容*/
    console.error(error)
  })
};