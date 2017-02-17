import cheerio from 'cheerio'
import rp from 'request-promise-native'
import authenticate from './authenticate'
const jarRequest = rp.defaults({jar: true})

const checkDoorStatus = async credentials => {
  await authenticate(credentials)

  const options = {
    uri: 'http://app.trackpin.com/index.php/app/main',
    transform: body => cheerio.load(body)
  }

  // Get data
  const $ = await jarRequest.get(options)
  const status = $('#door_status b').text()
  const lastPin = $('td.activity_title').first().contents().get(0).data
  return {status, lastPin}
}

export default checkDoorStatus
