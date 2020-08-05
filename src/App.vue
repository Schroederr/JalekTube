<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md">
        <b-navbar class="nav-bar" variant="light" type="primary">
          <b-navbar-brand href="#"><img src="./assets/YouTube-icon.png" class="nav-logo" >Youtube Video Manager</b-navbar-brand>
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
