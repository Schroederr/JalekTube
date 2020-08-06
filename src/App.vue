<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md">
        <b-navbar class="nav-bar">
          <b-navbar-brand v-bind:href="baseUrl" class="nav-text" style="color: white;">
            <img src="./assets/logo.png" class="nav-logo" />JalekTube
          </b-navbar-brand>
        </b-navbar>
        <YoutubeDash></YoutubeDash>
      </div>
    </div>
  </div>
</template>

<script>
import YoutubeDash from "./domains/youtube/YoutubeDash";

export default {
  components: {
    YoutubeDash,
  },
  computed: {
    baseUrl() {
      return process.env.VUE_APP_BASE_URL;
    },
  },
};
</script>

<style>
@import "./assets/styles/style.css";
</style>