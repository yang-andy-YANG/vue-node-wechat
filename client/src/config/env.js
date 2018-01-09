let baseUrl = 'http://10.131.119.138:8007/DigitalInnovShowRoom/';
let defaultUserId = 'Default'
let isProduction = false

if (process.env.NODE_ENV === 'production') {
    baseUrl = './';
    isProduction = true
}

let imgBase = baseUrl + 'asset/image/'
let videoBase = baseUrl + 'asset/video/'

export {
    baseUrl,
    defaultUserId,
    imgBase,
    videoBase,
    isProduction
}

export default baseUrl
