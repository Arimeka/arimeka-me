<template>
  <section class="main-content">
    <div class="padding">
      <div class="container">
        <div class="row">
          <div class="tags text-center">
            <div class="details-top">
              <h2 class="section-title">
                Tag - Lifestyle
              </h2><!-- /.section-title -->
            </div><!-- /.details-top -->
            <b-col sm="4">
              <PostPreview />
            </b-col>
            <b-col sm="4">
              <PostPreview show-image />
            </b-col>
          </div><!-- /.tags -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </div><!-- /.padding -->
  </section><!-- /.main-content -->
</template>

<script>
import PostPreview from '~/components/partials/PostPreviewBlock'

export default {
  components: { PostPreview }
}
</script>

<style>
  .tags {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
  }
  .tags div[class*="col-"] {
    display: flex;
    flex-direction: column;
  }
  .tags article {
    margin: 20px 0;
  }
  .tags article .entry-thumbnail {
    margin-bottom: 17px;
  }
  .tags article .entry-title {
    font-size: 18px;
  }
  .tags .details-top {
    display: inline-block;
    margin-bottom: 20px;
    width: 100%;
  }
</style>
