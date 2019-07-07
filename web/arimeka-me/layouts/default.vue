<template>
  <div class="overlay-wrapper">
    <Header />
    <nuxt />
    <Footer />
    <script src="/js/main.js" />
  </div>
</template>

<script>
import Header from './partials/header'
import Footer from './partials/footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  a {
    -webkit-transition: all .25s ease;
    -moz-transition: all .25s ease;
    -ms-transition: all .25s ease;
    -o-transition: all .25s ease;
    transition: all .25s ease;
  }
  a:hover {
    color: #af7152;
    text-decoration: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    line-height: 1.4;
    margin: 0;
    padding: 0;
  }
  img {
    height: auto;
    max-width: 100%;
  }
  video,
  iframe {
    border: none;
    max-width: 100%;
  }
  p {
    color: #686765;
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    line-height: 24px;
    margin: 10px 0;
  }
  .overlay {
    background: rgba(0, 0, 0, 0.25);
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    position: absolute;
  }
  .background-bg {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: scroll;
  }
  .category {
    border-bottom: 1px solid #af7152;
    color: #af7152;
    display: inline-block;
    font-family: 'Lato', sans-serif;
    font-size: 10px;
    letter-spacing: 1px;
    padding-bottom: 5px;
    text-transform: uppercase;
  }
  .category a {
    color: #af7152;
  }
  .btn {
    background: #af7152;
    border: 1px solid #af7152;
    border-radius: 0;
    box-shadow: none;
    color: #fff;
    font-family: 'Lato', sans-serif;
    font-size: 12px;
    font-weight: 400;
    height: inherit;
    letter-spacing: 0.5px;
    line-height: 28px;
    padding: 0 13px;
    text-transform: capitalize;
  }
  .btn:hover {
    background: #fff;
    color: #af7152;
  }
  .padding {
    padding: 4.25% 0;
  }
  .entry-title {
    color: #000;
    display: inline-block;
    font-size: 24px;
    margin: 14px 0 4px;
    text-transform: uppercase;
    width: 100%;
  }
  .entry-title a {
    color: #000;
  }
  .time {
    color: #999;
    display: inline-block;
    font-family: 'Lato', sans-serif;
    font-size: 12px;
    position: relative;
    text-transform: uppercase;
  }
  .time:before,
  .time:after {
    content: '';
    background: #ccc9c7;
    height: 1px;
    width: 25px;
    top: 50%;
    margin-top: -0.5px;
    position: absolute;
  }
  .time:before {
    left: -35px;
  }
  .time:after {
    right: -35px;
  }
  .post-meta {
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    color: #999;
    display: inline-block;
    font-family: 'Lato', sans-serif;
    font-size: 11px;
    margin-top: 40px;
    padding: 13px 0;
    width: 100%;
  }
  .post-meta a:hover {
    color: #af7152 !important;
  }
  .post-meta .comments {
    font-style: italic;
  }
  .post-meta .comments i {
    font-size: 12px;
    margin-right: 2px;
  }
  .post-meta .comments a {
    color: #999;
  }
  .post-meta .post-social a {
    color: #aaa;
  }
  .post-meta .post-social a i {
    font-size: 12px;
    padding-left: 10px;
  }
  .entry-content .btn {
    margin-top: 9px;
  }
  .widget-title,
  .comment-title,
  .respond-title {
    border-bottom: 1px solid #000;
    color: #000;
    display: inline-block;
    font-family: 'Lato', sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    margin: 0 0 25px;
    padding: 0 0 3px;
    text-transform: uppercase;
  }
  .btn-container {
    display: inline-block;
    margin-top: 10px;
    text-align: center;
    width: 100%;
  }
  .btn-container .btn {
    background: #fff;
    border: 1px solid #e1e1e1;
    color: #171717;
    font-family: 'Lato', sans-serif;
    font-size: 11px;
    font-weight: 400;
    line-height: 38px;
    padding: 0 13.233%;
    text-transform: uppercase;
  }
  .btn-container .btn:hover {
    background: #171717;
    border-color: #171717;
    color: #e1e1e1;
  }
  .btn-container .btn.load-more {
    margin-bottom: 5.9%;
  }
  .gray-bg {
    background: #f5f5f5;
  }
  .section-title {
    border-bottom: 1px solid #000;
    color: #000;
    display: inline-block;
    font-family: 'Lato', sans-serif;
    font-size: 22px;
    letter-spacing: 3px;
    line-height: 1;
    margin: 0 auto;
    padding: 0 0 6px;
    text-transform: uppercase;
  }
  .details-top {
    margin-bottom: 17px;
  }
  blockquote {
    border: none;
    color: #000;
    font-family: 'Poppins', sans-serif;
    font-size: 26px;
    font-weight: 700;
    line-height: 1.35;
    margin: 3.5% 0;
    padding: 3.52% 0;
    position: relative;
    text-align: center;
  }
  blockquote:before,
  blockquote:after {
    content: '';
    background: #eaeaea;
    height: 1px;
    width: 65%;
    left: 50%;
    position: absolute;
    -webkit-transform: translate(-50%, 0);
    -moz-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    -o-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
  }
  blockquote:before {
    top: 0;
  }
  blockquote:after {
    bottom: 0;
  }
  blockquote.style-02 {
    border-left: 2px solid #af7152;
    color: #999;
    font-size: 25px;
    line-height: 1.45;
    padding: 1% 3%;
    text-align: left;
  }
  blockquote.style-02:before,
  blockquote.style-02:after {
    display: none;
  }
  .carousel-control {
    background: none !important;
    box-shadow: none;
    font-size: 24px;
    height: 30px;
    width: 30px;
    line-height: 30px;
    margin-top: -15px;
    opacity: 1;
    text-align: center;
    top: 50%;
  }
  .carousel-control.left {
    left: 25px;
  }
  .carousel-control.right {
    right: 25px;
  }
</style>
