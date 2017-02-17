import request from 'request'
import cheerio from 'cheerio'

const jarRequest = request.defaults({jar: true})

const checkDoorStatus = ({email, password}) => {
  return new Promise(resolve => {
    const formData = {
      'login_email': email,
      'login_password': password,
      'do_login': 'LOGIN'
    }

    jarRequest.post({url: 'http://app.trackpin.com/', form: formData},
      (error, response) => {
        if (!error && response.statusCode === 200) {
          jarRequest.get('http://app.trackpin.com/index.php/app/main', (e, r, b) => {
            const $ = cheerio.load(b)
            const status = $('#door_status b').text()
            const lastPin = $('td.activity_title').first().contents().get(0).data
            resolve({status, lastPin})
          })
        }
      })
  })
}

export default checkDoorStatus
