<template>
  <b-media tag="article" class="post type-post" no-body>
    <b-media-aside v-if="showImage" class="entry-thumbnail">
      <b-img src="/images/posts/02/1.jpg" alt="Thumbnail Image" />
    </b-media-aside>

    <b-media-body class="entry-content">
      <span class="category"><a href="categories.html">Lifestyle</a></span><!-- /.category -->
      <h2 class="entry-title">
        <a href="/posts/foobar">Cruise to Alaska</a>
      </h2><!-- /.entry-title -->
      <span class="time"><time datetime="2017-12-05">May 12, 2017</time></span><!-- /.time -->
      <p>
        Proin gravida nibhl velit auctor aliquet. Aenean sollicin lorem quisma biben dum auctor, nisi it consequat ipsnecsa gittis sem nibh idelit. Duis sed odio sit amet nibh vulputate cursus
      </p>

      <a href="/posts/foobar" class="btn">Read more</a><!-- /.btn -->
    </b-media-body>
  </b-media>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    showImage: Boolean
  }
}
</script>

<style scoped>

</style>
