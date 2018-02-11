/**
 * Functions to get content from Contenta JSON API.
 *
 * Taken from https://github.com/contentacms/contenta_vue_nuxt/blob/master/lib/api.js
 */
import jsonApiClient from './jsonApiClient'
const jsonApi = jsonApiClient()
/**
 * @param {String} uuid
 */
export async function getUserInfo (uuid) {
  const query = {
    include: 'user_image',
    fields: {
      files: 'url'
    },
  }
  return await jsonApi.get('users', query, uuid)
}
