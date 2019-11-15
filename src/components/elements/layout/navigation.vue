<template>
  <ul class="nav nav-tabs">
    <router-link
      tag="li"
      class="nav-item"
      :to="route.path"
      v-for="route in routes"
      v-bind:key="route.path"
      exact
    >
      <router-link
        class="nav-link"
        :to="route.path"
        exact
      >{{ route.name }}</router-link>
    </router-link>
  </ul>
</template>

<script>
import routes from '../../../routes/index'
export default {
  name: 'AppNav',
  data: function () {
    return {
      routes
    }
  }
}
</script>
