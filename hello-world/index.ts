export async function handler(req: object) {
  console.log('hello from Deno', req)
  return {
    statusCode: 200,
    headers: {'content-type': 'text/html;charset=utf8'},
    body: `Welcome to deno ${Deno.version.deno} 🦕`
  }
}
