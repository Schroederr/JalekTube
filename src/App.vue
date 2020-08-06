<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md">
        <b-navbar class="nav-bar">
          <b-navbar-brand href="#" class="nav-text" style="color: white;"><img src="./assets/YouTube-icon.png" class="nav-logo" >JalekTube</b-navbar-brand>
        </b-navbar>
        <YoutubeDash></YoutubeDash>
      </div>
    </div>
  </div>
</template>

<script>
import YoutubeDash from "./domains/youtube/YoutubeDash";

export default {
  name: "App",
  components: {
    YoutubeDash,
  },
};
</script>

<style>
  @import './assets/styles/style.css';
</style>