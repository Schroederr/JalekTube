import Vue from 'vue'
import Vuex from 'vuex'
import YoutubeSearch from "../services/YoutubeSearch";

Vue.use(Vuex);

const store = new Vuex.Store({

  state: {
    video: "",
    searchTerm: "",
    nextPageToken: "",
    videos: Array,
    endOfPage: true,
    searchDone: false,
    gapi: Object
  },

  mutations: {
    setVideo(state, video) {
      state.video = video;
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

    concatVideos(state, videos) {
      state.videos = state.videos.concat(videos);
    },

    setEndOfPage(state, endOfPage) {
      state.endOfPage = endOfPage;
    },

    setGapi(state, gapi) {
      state.gapi = gapi;
    },
  },

  getters: {
    getGapi: state => {
      return state.gapi
    }
  },

  actions: {

    storeGapi(context, gapi) {
      context.commit('setGapi', gapi);
    },

    selectedVideo(context, video) {
      context.commit('setVideo', video);
    },

    async searchVideos({ state, commit }, searchTerm) {

      commit('setSearchDone', false);

      let response = await YoutubeSearch.searchFromYoutube(
        {
          term: searchTerm,
          nextPageToken: state.nextPageToken,
        }
      );

      commit('setVideos', response.items);
      commit('setNextPageToken', response.nextPageToken);
      commit('setSearchTerm', searchTerm);
      commit('setSearchDone', true);

    },

    async searchNextPage({ state, commit }) {

      commit('setEndOfPage', false);

      let response = await YoutubeSearch.searchFromYoutube(
        {
          term: state.searchTerm,
          nextPageToken: state.nextPageToken,
        }
      );

      commit('concatVideos', response.items);
      commit('setNextPageToken', response.nextPageToken);
      commit('setEndOfPage', true);

    },

  }
});

export { store }