import React from 'react'
import PropTypes from 'prop-types'

import Login from './Login'

const LoginScreen = () => <Login {...contactData} />

LoginScreen.navigationOptions = () => ({
  header: null,
})

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default LoginScreen