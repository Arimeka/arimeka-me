<template>
  <b-col sm="4">
    <aside class="sidebar text-center">
      <div class="widget widget_about_author">
        <h3 class="widget-title">
          About me
        </h3><!-- /.widget-title -->
        <div class="widget-details">
          <div class="author-avatar">
            <img src="/images/sidebar/a.jpg" alt="Avatar" class="img-circle">
          </div><!-- /.author-avatar -->
          <p>
            Ahasellus rhoncus laoreet odio, sit amet rutrum metus aliquet quis. Sed sed nulla erat. Curabitur ullamcorper dum tortor.
          </p>
          <div class="author-social">
            <a href="#"><i class="fa fa-github fa-2x" /></a>
          </div><!-- /.author-social -->
        </div><!-- /.widget-details -->
      </div><!-- /.widget -->
    </aside><!-- /.sidebar -->
  </b-col>
</template>
<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
  aside.sidebar {
    padding-left: 20px;
  }
  aside.sidebar .widget {
    margin: -6px 0 70px;
  }
  aside.sidebar .widget:last-child {
    margin-bottom: 0;
  }

  .widget_about_author .author-avatar {
    margin: 0 auto 30px;
    max-width: 184px;
  }
  .widget_about_author .author-social {
    display: inline-block;
    margin-top: 17px;
    width: 100%;
  }
  .widget_about_author .author-social a {
    color: #282828;
    display: inline-block;
    font-size: 15px;
    padding: 0 8px;
  }
</style>
