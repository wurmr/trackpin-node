import request from 'request'
import cheerio from 'cheerio'

const jarRequest = request.defaults({jar: true})

const listPins = ({email, password}) => {
  return new Promise(resolve => {
    const formData = {
      'login_email': email,
      'login_password': password,
      'do_login': 'LOGIN'
    }

    jarRequest.post({url: 'http://app.trackpin.com/', form: formData},
      (error, response) => {
        if (!error && response.statusCode === 200) {
          jarRequest.get('http://app.trackpin.com/index.php/app/pins', (e, r, b) => {
            const $ = cheerio.load(b)
            const result = $('td.pin_title')
              .contents()
              .map((i, el) => el.data)
              .filter((i, pin) => pin !== 'Remotes')
            resolve(result)
          })
        }
      })
  })
}

export default listPins
