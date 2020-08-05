<template>
  <div class="VideoItem__wrapper">
    <div class="card" style="width: 18rem;" align="left" >
      <a href="#" v-on:click="loadVideo">
        <img class="card-img-top" v-bind:src="videoImage" v-bind:alt="videoTitle" />
      </a>
      <div class="card-body">
        <h5 class="card-title">{{ videoTitle }}</h5>
        <p class="card-text">{{ videoChannelTitle }}</p>
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
    videoChannelTitle() {
      let channel = this.video.snippet.channelTitle.replace(/&quot;/g,'"');
      return channel;
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