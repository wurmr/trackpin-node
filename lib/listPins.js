import rp from 'request-promise-native'
import cheerio from 'cheerio'
import authenticate from './authenticate'

const jarRequest = rp.defaults({jar: true})

const listPins = async (credentials) => {
  await authenticate(credentials)

  const options = {
    uri: 'http://app.trackpin.com/index.php/app/pins',
    transform: body => cheerio.load(body)
  }

  // Get data
  const $ = await jarRequest.get(options)
  // parse out the pin titles and remove "Remotes"
  const result = $('td.pin_title')
                  .contents()
                  .map((i, el) => el.data)
                  .filter((i, pin) => pin !== 'Remotes')
  return result
}

export default listPins
