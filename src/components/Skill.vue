<template>
  <div class="container">
    <div class="box">
      <h1>Skill</h1>
      <div class="box-brain">
        <font-awesome-icon :icon="['fas', 'brain']" size="5x" class="icon" />
      </div>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Skill extends Vue {}
</script>
