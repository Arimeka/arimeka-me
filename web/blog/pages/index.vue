<template>
  <section class="main-content">
    <div class="padding">
      <b-container>
        <b-row>
          <PostList />
          <Sidebar />
        </b-row><!-- /.row -->
      </b-container><!-- /.container -->
    </div><!-- /.padding -->
  </section>
</template>

<script>

import Sidebar from '~/components/partials/Sidebar'
import PostList from '~/components/PostList'
export default {
  components: { Sidebar, PostList }
}
</script>

<style scoped>
</style>
