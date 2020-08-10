<template>
  <div class="VideoPlayer__wrapper" v-if="video">
    <div class="col-sm-8 col-sm-push-2" align="left">
      <h3>{{ videoTitle }}</h3>
      <br />
      <h6>Canal: {{ videoChannelTitle }}</h6>
      <p>{{ videoDescription}}</p>
      <div class="embed-responsive embed-responsive-16by9" align="center">
        <iframe v-bind:src="videoUrl" class="embed-responsive-item" allowfullscreen="allowfullscreen"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";

  export default {
    computed: {
      ...mapState({
        video: (state) => state.video
      }),
      videoTitle() {
        let title = this.video.snippet.title.replace(/&quot;/g, '"');
        return title;
      },
      videoDescription() {
        let description = this.video.snippet.description.replace(/&quot;/g, '"');
        return description;
      },
      videoUrl() {
        let url = process.env.VUE_APP_YOUTUBE_EMBED_URL + this.video.id.videoId;
        return url;
      },
      videoChannelTitle() {
        let channelTitle = this.video.snippet.channelTitle.replace(/&quot;/g, '"');
        return channelTitle;
      },
    },
  };
</script>
