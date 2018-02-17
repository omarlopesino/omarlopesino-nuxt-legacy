
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
    return this.response.result.fulfillment.speech;
  }

  getDisplayText() {
    return this.response.result.fulfillment.displayText;
  }

  getContexts() {
    return this.response.result.contexts;
  }

  hasContext(context) {
    var contexts = this.getContexts();
    var hasContext = false;
    contexts.some((value, key) => {
      if (value.name == context) {
        hasContext = true;
        return true;
      }
    });
    return hasContext;
  }

  hasVisualContext() {
    var hasVisualContext = false;
    var contexts = ['yesnowtf'];
    contexts.some((value, key) => {
      if (this.hasContext(value)) {
        hasVisualContext = true;
        return true;
      }
    });
    return hasVisualContext;
  }

}
