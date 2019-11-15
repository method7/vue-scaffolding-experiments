<template>
  <div>
    <h1>todo</h1>
    <div
      v-for="(item,index) in list"
      :key="index"
    >
      <p v-if="index != editMe">
        <span>{{item.value}}</span>
        <span>{{item.priority}}</span>
        <button
          v-if="!item.complete"
          @click="edit(index)"
        >Edit</button>
        <button @click="remove(index)">Remove</button>
        <button
          v-if="!item.complete"
          @click="complete(index)"
        >Complete</button>
      </p>
      <p v-else>
        <input v-model="editItem.value" />
        <select v-model="editItem.priority">
          <option :value="undefined">please choose</option>
          <option
            v-for="(p,index) in priority"
            :key="index"
          >{{p}}</option>
        </select>
        <button @click="save(index)">Save</button>
      </p>
    </div>
    <p>
      <input v-model="newItem.value" />
      <select v-model="newItem.priority">
        <option :value="undefined">please choose</option>
        <option
          v-for="(p,index) in priority"
          :key="index"
        >{{p}}</option>
      </select>
      <button @click="add">Add item</button>
    </p>
    <button @click="deleteAll">Delete all</button>
  </div>
</template>

<script>
export default {
  name: 'todos',
  data: function () {
    return {
      list: [],
      priority: ['life changing', 'Important', 'Meh'],
      editMe: null,
      newItem: {},
      editItem: {}
    }
  },

  mounted() {
    if (localStorage.getItem('list')) {
      try {
        this.list = JSON.parse(localStorage.getItem('list'))
      } catch (e) {
        localStorage.removeItem('list')
      }
    }
  },

  watch: {
    list: {
      handler: function (list) {
        localStorage.setItem('list', JSON.stringify(this.list))
      },
      deep: true
    }
  },

  methods: {
    isValid(obj) {
      if (!obj.value || !obj.priority) return false
      return true
    },
    complete(index) {
      this.$set(this.list[index], 'complete', true)
    },
    add() {
      if (!this.isValid(this.newItem)) returns
      this.list.push(this.newItem)
      this.newItem = {}
    },
    edit(index) {
      this.editItem = this.list[index]
      this.editMe = index
    },
    save(index) {
      if (!this.isValid(this.editItem)) return
      this.editMe = null
      this.list[index] = this.editItem
    },
    remove(index) {
      this.list.splice(index, 1)
    },
    deleteAll() {
      this.list = []
    }
  }
}
</script>
