<template>
  <div class="VideoPlayer__wrapper" v-if="video" align="center">
    <div class="col-sm-8 col-sm-push-2">
      <h2>{{ videoTitle }}</h2>
      <br />
      <small>Canal: {{ videoDescription }}</small>
      <p>{{ videoChannelTitle }}</p>
      <div class="embed-responsive embed-responsive-16by9">
        <iframe v-bind:src="url" class="embed-responsive-item"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
        video: state => state.video,
        url: state => state.url,
    }),
    videoTitle() {
      let title = this.video.snippet.title.replace(/&quot;/g,'"');
      return title;
    },
    videoDescription() {
      let description = this.video.snippet.description.replace(/&quot;/g,'"');
      return description;
    },
    videoChannelTitle() {
      let channelTitle = this.video.snippet.channelTitle.replace(/&quot;/g,'"');
      return channelTitle;
    }

  }

};
</script>
