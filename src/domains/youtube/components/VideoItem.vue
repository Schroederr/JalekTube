<template>
  <div class="VideoItem__wrapper">
    <div class="card" style="width: 18rem;">
      <a v-on:click="loadVideo" href="#">
        <img class="card-img-top" v-bind:src="videoImage" v-bind:alt="videoTitle" />
      </a>
      <div class="card-body">
        <h5 class="card-title">{{ videoTitle }}</h5>
        <p class="card-text">{{ videoDescription }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    video: Object,
  },

  computed: {
    videoTitle() {
      let title = this.video.snippet.title.replace(/&quot;/g,'"');
      return title;
    },
    videoDescription() {
      let description = this.video.snippet.description.replace(/&quot;/g,'"');
      return description;
    },
    videoImage() {
      return this.video.snippet.thumbnails.high.url;
    },
  },

  methods: {
    loadVideo() {
      this.$store.dispatch('selectedVideo', this.video)
    },

  },
};
</script>