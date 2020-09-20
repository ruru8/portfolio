<template>
  <div class="container">
    <div class="box">
      <h1>Blog</h1>
      <div class="box-pencil">
        <font-awesome-icon :icon="['fas', 'pencil-alt']" size="5x" class="icon" />
      </div>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Blog extends Vue {}
</script>
