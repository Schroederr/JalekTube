<template>
  <div class="VideoFinder__wrapper">
    <div class="container">
      <form v-on:submit.prevent="handleSubmit">
        <b-input-group size="sm" class="mb-2">
          <b-form-input type="search" placeholder="Search from YouTube.." v-model="searchString"></b-form-input>
          <b-input-group-append is-text href="#" style="cursor:pointer">
            <b-icon icon="search" v-on:click="handleSubmit"></b-icon>
          </b-input-group-append>
        </b-input-group>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchString: "",
      };
    },

    methods: {
      handleSubmit() {
        window.eventBus.$emit("searchStarted");
        this.$store.dispatch("searchVideos", this.searchString);
      },
    },
  };
</script>