<template>
  <b-col sm="4">
    <PostPreview />
  </b-col>
  <b-col sm="4">
    <PostPreview show-image />
  </b-col>
</template>

<script>
import PostPreview from '~/components/partials/PostPreviewBlock'
export default {
  name: 'PostListBlock',
  components: { PostPreview }
}
</script>

<style scoped>

</style>
