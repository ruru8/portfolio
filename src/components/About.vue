<template>
  <div class="container">
    <div class="box">
      <h1>About</h1>
      <div class="box-user">
        <font-awesome-icon :icon="['far', 'user']" size="5x" class="icon" />
      </div>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {}
</script>
