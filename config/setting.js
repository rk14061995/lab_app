import Constants from 'expo-constants'

export const setting = {
    dev: {
        apiUrl: 'https://avicennatest.patientheal.com/Services/api/'
    },
    staging: {
        apiUrl: 'https://avicennatest.patientheal.com/Services/api/'
    },
    prod: {
        apiUrl: 'https://avicennatest.patientheal.com/Services/api/'
    }
}

const getCurrentSettings = () => {
    if(__DEV__) return setting.dev
    if(Constants.manifest.releaseChannel === 'staging') return setting.staging
    return setting.prod
}

export default getCurrentSettings()

