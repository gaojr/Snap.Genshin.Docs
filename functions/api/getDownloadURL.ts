export async function onRequestGet(context) {
  /*定义返回数据的函数*/
  const {request} = context

  function responseDownloadURL(URL: string): string {
    return `
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
    `
  }

  function getQueryString(url: string, name: string): string | null {
    const reg = new RegExp(`(\\?|&)${name}=([^&]*)(&|$)`, 'i');
    const query = url.match(reg);
    if (query != null) return decodeURI(query[2]);
    return null;
  }

  try {
    /*从请求参数中提取 source 参数*/
    const source = getQueryString(request.url, 'source')
    /*使用 Github 的 api 获取仓库最新的 release 信息*/
    const res = await fetch('https://api.github.com/repos/DGP-Studio/Snap.Genshin/releases/latest', {
      /*定义请求头*/
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.82 Safari/537.36'
      }
    })
    const data = await res.json()
    /*使用解构赋值从 data 中提取下载链接*/
    const {
      assets: [
        {
          browser_download_url: downloadURL
        }
      ]
    } = JSON.parse(data)
    /*判断返回哪个源的下载地址*/
    if (source === 'github') {
      /*返回 Github 提供的下载地址*/
      return new Response(responseDownloadURL(downloadURL))
    } else if (source === 'cloudflare') {
      /*返回 CloudflareWorkers 提供的下载地址*/
      return new Response(responseDownloadURL(`https://download.zhouhaixian.workers.dev/${downloadURL}`))
    } else {
      /*将 Github 提供的下载地址转换成 FastGit 加速后的下载地址并返回*/
      return new Response(responseDownloadURL(downloadURL.replace('github.com', 'download.fastgit.org')))
    }
  } catch (error) {
    return new Response(JSON.stringify(error, null, 2))
  }
}