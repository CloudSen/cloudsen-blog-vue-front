export const ZUUL_URL = 'localhost:8222'

export const BASE_URL = '/api'

export const HTTP_SCHEME = 'http://'

export const USE_EOLINKER = process.env.NODE_ENV === 'EOLINKER'

export const COMMON_URL = HTTP_SCHEME + ZUUL_URL + BASE_URL
