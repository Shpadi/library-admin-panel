<template>
  <v-card>
    <template v-if="currentBook">
      <v-card-title>
        <span class="mr-3">Title {{ currentBook.title }}</span>
        <v-icon size="15px">mdi-pencil</v-icon>
      </v-card-title>
      <v-card-text>
        <div class="d-flex align-center">
          <span class="mr-3">Description: {{ currentBook.description }}</span> <v-icon size="15px">mdi-pencil</v-icon>
        </div>
        <div class="d-flex align-center">
          <span class="mr-3">
            Author: {{ currentBook.author.name.firstName }} {{ currentBook.author.name.lastName }}
          </span>
          <v-icon size="15px">mdi-pencil</v-icon>
        </div>
      </v-card-text>
    </template>
    <template v-else>
      <v-skeleton-loader />
    </template>
  </v-card>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  export default {
    name: 'CurrentBook',

    computed: {
      ...mapState('books', ['currentBook'])
    },

    mounted() {
      console.log(this.$route.params)
      const bookId = this.$route.params.id
      this.getCurrentBook(bookId)
    },

    methods: {
      ...mapActions('books', ['getCurrentBook'])
    }
  }
</script>

<style scoped>

</style>
