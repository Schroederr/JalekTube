import Vue from 'vue'
import Vuex from 'vuex'
import Search from "../services/YoutubeSearch";

Vue.use(Vuex);

const store = new Vuex.Store({

  state: {
    video: "",
    videoId: "",
    url: "",
    videos: "",
    searchTerm: "",
    nextPageToken: "",
    endOfPage: true,
    searchDone: false
  },
  mutations: {
    setVideo(state, video) {
      state.video = video;
      state.url = process.env.VUE_APP_YOUTUBE_EMBED_URL+video.id.videoId;
    },

    setVideos(state, videos) {
      state.videos = videos;
    },

    setSearchTerm(state, searchTerm) {
      state.searchTerm = searchTerm;
    },

    setSearchDone(state, searchDone) {
      state.searchDone = searchDone;
    },

    setNextPageToken(state, nextPageToken) {
      state.nextPageToken = nextPageToken;
    },

    concatVideos(state, videos){
      state.videos = this.state.videos.concat(videos);
    },

    setEndOfPage(state, endOfPage) {
      state.endOfPage = endOfPage;
    },
  },

  getters: {
    getSearchTerm: state => {
      return state.searchTerm
    },
    getNextPageToken: state => {
      return state.nextPageToken
    }
  },

  actions: {
    selectedVideo(context, video) {
      context.commit('setVideo', video);
    },

    async searchVideos({state, commit}, searchTerm) {

      commit('setSearchDone', false);
      
      let response = await Search.searchFromYoutube(
        {
          apiKey: process.env.VUE_APP_YOUTUBE_KEY,
          term: searchTerm,
          nextPageToken: state.nextPageToken,
        }
      );

        commit('setVideos', response.items);
        commit('setSearchDone', true);
        commit('setNextPageToken', response.nextPageToken);
        commit('setSearchTerm', searchTerm);


    },

    async searchNextPage({state, commit}){
      
      commit('setEndOfPage', false);

      let response = await Search.searchFromYoutube(
        {
          apiKey: process.env.VUE_APP_YOUTUBE_KEY,
          term: state.searchTerm,
          nextPageToken: state.nextPageToken,
        }
      );

      commit('concatVideos', response.items);
      commit('setEndOfPage', true);
      commit('setNextPageToken', response.nextPageToken);

    }
  }
});

export { store }