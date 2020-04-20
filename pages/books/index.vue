<template>
    <v-card>
      <v-card-title>Books</v-card-title>
      <v-data-table
        :headers="headers"
        :items="books"
        hide-default-footer
      >
        <template slot="item.title" slot-scope="props">
          <nuxt-link :to="`/books/${props.item._id}`"> {{ props.item.title }} </nuxt-link>
        </template>
      </v-data-table>
    </v-card>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  export default {
    name: 'index',

    data() {
      return {
        headers: [
          { text: 'Title', value: 'title' },
          { text: 'Description', value: 'description' },
          { text: 'Author', value: 'author.name.firstName' },
        ]
      }
    },

    mounted() {
      this.getBooks()
    },

    computed: {
      ...mapState('books', ['books'])
    },

    methods: {
      ...mapActions('books', ['getBooks'])
    }
  }
</script>

<style scoped>

</style>
