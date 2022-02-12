// @ts-ignore
import type { VercelRequest, VercelResponse } from '@vercel/node';
const https = require('https')

export default (request: VercelRequest, response: VercelResponse) => {
  const { name } = request.query;
  response.status(200).send(`
  <script>console.log(\`Hello ${ name }\`)</script>
  `);
};