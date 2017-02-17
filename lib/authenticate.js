import rp from 'request-promise-native'
const jarRequest = rp.defaults({jar: true})

const authenticate = async ({email, password}) => {
  const form = {
    'login_email': email,
    'login_password': password,
    'do_login': 'LOGIN'
  }

  // Login
  await jarRequest.post({ uri: 'http://app.trackpin.com/', form })
}

export default authenticate
