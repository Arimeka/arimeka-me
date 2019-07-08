<template>
  <article class="post type-post">
    <div v-if="showImage" class="entry-thumbnail">
      <img src="/images/posts/02/1.jpg" alt="Thumbnail Image">
    </div><!-- /.entry-thumbnail -->
    <div class="entry-content">
      <span class="tag"><a href="/tags/foobar">Lifestyle</a></span><!-- /.tag -->
      <h2 class="entry-title">
        <a href="/posts/foobar">Cruising into Spring </a>
      </h2><!-- /.entry-title -->
      <p>
        Proin gravida nibh vel velit auctor aliquet. Aenean sollicin lorem quisma bibendum auctor, nisi it consequat ipsnecsa gittis sem nibh idelit. Duis sed odio sit amet nibh vulputate cursus amet mauris ultrices nunc.
      </p>
      <a href="/posts/foobar" class="btn">Read more</a><!-- /.btn -->
    </div><!-- /.entry-content -->
  </article><!-- /.post -->
</template>

<script>
export default {
  name: 'PostPreviewBlock',
  props: {
    showImage: Boolean
  }
}
</script>

<style scoped>

</style>
