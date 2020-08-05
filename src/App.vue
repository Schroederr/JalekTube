<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md">
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
