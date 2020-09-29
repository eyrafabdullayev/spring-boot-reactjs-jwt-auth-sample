import axios from 'axios'

const API_URL = 'http://localhost:8080'

export const USERNAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationService {

    executeJwtAuthenticationService(username, password) {
        return axios.post(`${API_URL}/authenticate`, {
            username,
            password
        })
    }

    registerSuccessfulLoginForJwt(username, token) {
        sessionStorage.setItem(USERNAME_SESSION_ATTRIBUTE_NAME, username)
        this.setupAxiosInterceptors(this.createJwtToken(token))
    }

    createJwtToken(token) {
        return `Bearer ${token}`
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USERNAME_SESSION_ATTRIBUTE_NAME)
        if(user === null) return false
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem(USERNAME_SESSION_ATTRIBUTE_NAME)
        if(user === null) return ''
        return user
    }

    logout() {
        sessionStorage.removeItem(USERNAME_SESSION_ATTRIBUTE_NAME)
    }

    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()) {
                    config.headers.authorization = token                
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()