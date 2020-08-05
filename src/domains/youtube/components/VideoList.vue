<template>
  <div class="VideoList__Wrapper">
    <div class="container row grid">
      <VideoItem
        v-images-loaded:on.progress="imageProgress"
        v-for="video in videos"
        :video="video"
        :key="video.id.videoID"
      ></VideoItem>
    </div>
  </div>
</template>

<script>
import imagesLoaded from "vue-images-loaded";
import Isotope from "isotope-layout";
import VideoItem from "./VideoItem.vue";

export default {
  props: {
    videos: Array,
  },

  components: {
    VideoItem,
  },

  directives: {
    imagesLoaded,
  },

  data() {
    return {
      isotope: null,
      counter: 0,
    };
  },

  methods: {
    relayoutGrid() {
      var elem = document.querySelector(".grid");
      this.isotope = new Isotope(elem, {
        itemSelector: ".card",
        layoutMode: "masonry",
        masonry: {
          columnWidth: 25,
          fitWidth: true,
        },
      });
    },

    imageProgress() {
      this.counter++;

      if (this.counter == this.videos.length) {
        this.relayoutGrid();
      }
    },
  },
};
</script>