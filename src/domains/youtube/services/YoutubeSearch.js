let axios = require("axios");

export const searchApi = {

  async searchFromYoutube(options) {

    try {

      if (!options.apiKey) {
        throw new Error("YouTube API Key missing");
      }

      let params = {
        part: "snippet",
        key: options.apiKey,
        q: options.term,
        maxResults: 20,
        type: "video",
        pageToken: options.nextPageToken
      };

      var response = await axios.get(process.env.VUE_APP_YOUTUBE_SEARCH_URL, { params })

      return response.data

    } catch (error) {
      console.log(error);
    }

  }

}

export default searchApi
