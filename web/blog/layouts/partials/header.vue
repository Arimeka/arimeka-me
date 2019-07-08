<template>
  <header class="masthead">
    <div class="header-top d-none d-sm-block">
      <b-container>
        <b-navbar-brand href="/">
          <h1 class="site-name">
            Laziness Blog
          </h1>
        </b-navbar-brand>
      </b-container><!-- /.container -->
    </div><!-- /.header-top -->

    <div class="header-bottom">
      <b-container>
        <b-navbar type="default" toggleable="md">
          <b-navbar-brand class="navbar-brand d-sm-none d-block" href="/">
            <h1 class="site-name">
              Laziness Blog
            </h1>
          </b-navbar-brand>
        </b-navbar>
      </b-container><!-- /.container -->
    </div><!-- /.header-bottom -->
  </header><!-- /.masthead -->
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
  /* ------------ Variables and Mixins ------------ */
  a {
    -webkit-transition: all .25s ease;
    -moz-transition: all .25s ease;
    -ms-transition: all .25s ease;
    -o-transition: all .25s ease;
    transition: all .25s ease;
  }
  header .header-top {
    padding: 4.35% 0;
  }
  header .header-top .container {
    position: relative;
  }
  header .site-name {
    font-weight: 700;
  }
  header .header-top .navbar-brand {
    display: block;
    float: none;
    height: 44px;
    width: 206px;
    margin: 0 auto;
    padding: 0;
    text-align: center;
  }
  header .header-top .navbar-brand img {
    margin: 0 auto;
    max-width: 206px;
  }
  header .header-bottom {
    background: #171717;
    overflow: hidden;
  }
  header .header-bottom:hover {
    overflow: visible;
  }
  header .header-bottom .site-name {
    font-size: 1.1em;
    color: white;
  }
  header .navbar-default {
    background: transparent;
    border: none;
    border-radius: 0;
    margin: 0;
    padding: 0;
  }
  @media (min-width: 768px) {
    header .navbar-default .navbar-nav {
      float: none;
    }
    header .navbar-default .navbar-nav li {
      float: none;
    }
  }
  @media (max-width: 767px) {
    header .navbar-default .navbar-brand {
      margin-top: 14px;
      max-width: 105px;
      max-height: 22px;
      padding: 0;
    }
    header .header-top {
      padding: 20px 0;
    }
  }
</style>
