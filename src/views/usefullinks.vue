<template>
  <div class="title">
    <h1>Useful links</h1>
    <ul>
      <li
        style="display: block"
        v-bind:key="link.title"
        v-for="link in links"
      >
        <a
          :href="link.url"
          target="_blank"
        >{{link.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'usefullinks',
  data: function () {
    return {
      links: [
        {
          title: 'vue.js Global-Config',
          url: 'https://vuejs.org/v2/api/#Global-Config'
        },
        {
          title: 'vue.js style-guide',
          url: 'https://vuejs.org/v2/style-guide/#Priority-A-Essential'
        },
        {
          title: 'build-reusable-components',
          url:
            'https://medium.com/js-dojo/vue-js-single-file-components-vue-cli-and-example-of-how-to-build-reusable-components-cf0991adbc2f'
        },
        {
          title: 'code-splitting-patterns',
          url:
            'https://medium.com/js-dojo/3-code-splitting-patterns-for-vuejs-and-webpack-b8fff1ea0ba4'
        },
        {
          title: 'understanding-scoped-slots',
          url:
            'https://adamwathan.me/the-trick-to-understanding-scoped-slots-in-vuejs/'
        },
        {
          title: 'vue-js-code-splitting',
          url:
            'https://vuejsdevelopers.com/2017/07/03/vue-js-code-splitting-webpack/'
        },
        {
          title: 'learn-vuex',
          url: 'https://scrimba.com/g/gvuex'
        },
        {
          title: 'vue-create',
          url: 'https://cli.vuejs.org/guide/'
        }
      ]
    }
  }
}
</script>
