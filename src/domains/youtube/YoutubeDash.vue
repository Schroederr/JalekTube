<template>
  <div class="YoutubeDash__wrapper">
    <div class="container" align="center">
      <VideoPlayer></VideoPlayer>
      <VideoFinder></VideoFinder>
      <div v-if="searchDone">
        <VideoList :videos="videos"></VideoList>
      </div>
      <div v-if="!searchDone">
        <b-col md="6" class="mb-3">
          <b-icon icon="arrow-clockwise" animation="spin" font-scale="4"></b-icon>
        </b-col>
      </div>
      <div v-if="!endOfPage">
        <b-col md="6" class="mb-3">
          <b-icon icon="three-dots-vertical" animation="cylon-vertical" font-scale="4"></b-icon>
        </b-col>
      </div>
    </div>
  </div>
</template>

<script>
import VideoFinder from "./components/VideoFinder";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";
import { mapState } from "vuex";

export default {
  components: {
    VideoList,
    VideoFinder,
    VideoPlayer,
  },

  computed: {
    ...mapState({
      videos: (state) => state.videos,
      searchTerm: (state) => state.searchTerm,
      searchDone: (state) => state.searchDone,
      endOfPage: (state) => state.endOfPage,
    }),
  },

  created() {
    this.$store.dispatch("searchVideos", "jaleko");
  },

  mounted() {
    this.scroll();
  },

  methods: {
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          Math.ceil(window.innerHeight + window.pageYOffset) >=
          document.body.offsetHeight;

        if (bottomOfWindow && this.endOfPage == true) {
          this.$store.dispatch("searchNextPage");
        }
      };
    },
  },
};
</script>

<style>
  @import './assets/styles/style.css';
</style>
