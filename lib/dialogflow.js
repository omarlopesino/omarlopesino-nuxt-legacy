
import axios from 'axios';

export async function dialogFlowQuery(query) {
  var response = await axios.get(process.env.jsonApiServer + '/' + process.env.jsonApiPrefix + '/rest_dialogflow/query?query=' + query);
  return new DialogFlowResponse(response.data);
}

/**
 * Wrapper for dialogflow response.
 */
class DialogFlowResponse {
  constructor(response) {
    this.response = response;
  }

  /**
   * Handle dialog flow response.
   *
   * @returns {string}
   *   Speech.
   */
  getSpeech() {
    console.log(this.response);
    return this.response.result.fulfillment.speech;
  }

}
