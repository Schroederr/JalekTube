import { store } from '../vuex-module/Vuex'

export const searchApi = {

  async searchFromYoutube(options) {

    try {

      let gapi = store.getters.getGapi;

      let params = {
        part: "snippet",
        q: options.term,
        maxResults: 25,
        type: "video",
        pageToken: options.nextPageToken
      };

      var response = await gapi.client.youtube.search.list(params);

      return response.result

    } catch (error) {
      console.log(error);
    }

  },

}

export default searchApi
