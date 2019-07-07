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
  .main-content.has-left-sidebar .row .col-sm-8 {
    float: right;
  }
  .main-content.has-left-sidebar .row .col-sm-4 {
    float: left;
  }
  .main-content.has-left-sidebar .row .col-sm-4 aside.sidebar {
    padding: 0 20px 0 0;
  }
  .main-content.full-width-thumbnail .padding {
    padding-top: 0;
  }
</style>
