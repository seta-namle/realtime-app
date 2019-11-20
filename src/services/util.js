import { isEmpty, includes } from 'lodash';
import { configService } from './config';
const { baseUrl } = configService;

export async function makeRequest(
  method = 'GET',
  urlPattern,
  paramsObject = {},
  queryObject,
  extraHeaders = {}
) {
  const options = {
    method,
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'test-token',
      ...extraHeaders
    }
  };
  const endpoint = buildUrlWithParams(urlPattern, paramsObject);
  const fullUrl = `${baseUrl}${endpoint}${buildQueryString(queryObject)}`;
  console.log("TCL: fullUrl", fullUrl)
  const response = await fetch(fullUrl, options);
  return await response.json();
}

function buildQueryString(queryObject) {
    let queryString = '?';
    if (isEmpty(queryObject)){
        return ''
    }
    for(let [key,value] of Object.entries(queryObject)) {
        if (key && value) {
            queryString += `${key}=${value}&`
        }
    }
    queryString = queryString.slice(0, queryString.length - 1);
    return queryString;
}

function buildUrlWithParams(urlPattern, params = {}) {
    const urlIdentifies = urlPattern.split('/');
    if (!includes(urlPattern, ':')){
        return urlPattern;
    }
    for (let i = 0; i < urlIdentifies.length; i++) {
        if (includes(urlIdentifies[i], ':')) {
            const urlParam = urlIdentifies[i].slice(1, urlIdentifies[i].length);
            if (!params[urlParam]) {
                throw new Error('Params is not matched: ' + urlParam);
            }
            urlIdentifies[i] = params[urlParam];
        }
    }
    return urlIdentifies.join('/')
}
