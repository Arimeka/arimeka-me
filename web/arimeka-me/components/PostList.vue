<template>
  <b-col sm="8">
    <div class="list-posts">
      <PostPreview />
      <PostPreview show-image />
    </div><!-- /.list-posts -->

    <nav class="pagination pagination-02">
      <ul>
        <li class="hidden">
          <a href="#" aria-label="Previous">Previous</a>
        </li>
        <li class="active">
          <a href="#">1</a>
        </li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#" aria-label="Next">Next</a></li>
      </ul>
    </nav><!-- /.pagination -->
  </b-col>
</template>

<script>
import PostPreview from './partials/PostPreviewInline'
export default {
  name: 'PostList',
  components: { PostPreview }
}
</script>

<style>
  .list-posts {
    margin-bottom: 22px;
  }
  .list-posts article {
    border-bottom: 1px solid #eaeaea;
    margin: 23px 0 0;
    padding-bottom: 25px;
    width: 100%;
  }
  .list-posts article:last-child {
    border-bottom: none;
  }
  .list-posts article .entry-thumbnail {
    max-width: 40%;
    margin: 0 30px 0 0;
    padding: 0;
  }
  .list-posts article .entry-content {
    padding-top: 7px;
  }
  .list-posts article .entry-content .entry-title {
    font-size: 22px;
    line-height: 1.2;
    margin: 17px 0 6px;
  }
  .list-posts article .entry-content .time:before,
  .list-posts article .entry-content .time:after {
    display: none;
  }

  .pagination {
    display: inline-block;
    margin-bottom: 32px;
    width: 100%;
  }
  .pagination.pagination-01 {
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 700;
    margin-top: 15px;
    text-transform: uppercase;
    width: 100%;
  }
  .pagination.pagination-01 a {
    color: #af7152;
  }
  .pagination.pagination-01 a.previous-page i {
    margin: 0 5px 0 0;
  }
  .pagination.pagination-01 a.next-page i {
    margin-left: 5px;
  }
  .pagination.pagination-01 i {
    font-size: 16px;
  }
  .pagination.pagination-02 ul,
  .pagination.pagination-03 ul {
    margin: 0;
    padding: 0;
  }
  .pagination.pagination-02 ul li,
  .pagination.pagination-03 ul li {
    font-family: 'Lato', sans-serif;
    font-size: 12px;
    font-weight: 400;
    float: left;
    list-style: none;
    margin: 3px 4px 3px 0;
  }
  .pagination.pagination-02 ul li:last-child,
  .pagination.pagination-03 ul li:last-child {
    margin-right: 0;
  }
  .pagination.pagination-02 ul li a,
  .pagination.pagination-03 ul li a {
    color: #000;
    background: #fff;
    border: 1px solid #eaeaea;
    display: inline-block;
    line-height: 34px;
    padding: 0 13.53px;
  }
  .pagination.pagination-02 ul li a:hover,
  .pagination.pagination-03 ul li a:hover {
    background: #eaeaea;
  }
  .pagination.pagination-02 ul li.active a,
  .pagination.pagination-03 ul li.active a {
    background: #eaeaea;
  }
  .pagination.pagination-03 ul li a:hover {
    background: #af7152;
    border-color: #af7152;
    color: #fff;
  }
  .pagination.pagination-03 ul li.active a {
    background: #af7152;
    border-color: #af7152;
    color: #fff;
  }
  @media (max-width: 992px) {
    .list-posts article .entry-thumbnail {
      max-width: initial;
    }
  }
</style>
