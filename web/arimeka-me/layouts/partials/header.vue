<template>
  <header class="masthead">
    <div class="header-top d-none d-sm-block">
      <b-container>
        <b-navbar-brand href="./">
          <img src="http://demos-jeweltheme.ipunu91y.maxcdn-edge.com/sasha/images/logo.png" alt="Site Logo">
        </b-navbar-brand>
      </b-container><!-- /.container -->
    </div><!-- /.header-top -->

    <div class="header-bottom">
      <b-container>
        <b-navbar type="default" toggleable="md">
          <b-navbar-brand class="navbar-brand d-sm-none d-block" href="./">
            <img src="http://demos-jeweltheme.ipunu91y.maxcdn-edge.com/sasha/images/logo3.png" alt="Site Logo">
          </b-navbar-brand>
          <b-navbar-toggle
            target="main-menu"
            class="navbar-toggle collapsed"
          >
            <i class="fa fa-bars" />
          </b-navbar-toggle>

          <b-collapse id="main-menu" is-nav>
            <b-navbar-nav>
              <li class="menu-item menu-item-has-children active">
                <a href="#">Home</a>
                <ul class="sub-menu children">
                  <li><a href="index-01.html">Home 01</a></li>
                  <li><a href="index-02.html">Home 02</a></li>
                  <li><a href="index-03.html">Home 03</a></li>
                  <li><a href="index-04.html">Home 04</a></li>
                  <li><a href="index-05.html">Home 05</a></li>
                </ul>
              </li>

              <li class="menu-item menu-item-has-children">
                <a href="#">Features</a>
                <ul class="sub-menu children">
                  <li><a href="standard.html">Post Standard</a></li>
                  <li><a href="sidebar.html">Post Left Sidebar</a></li>
                  <li><a href="image.html">Post Header Image</a></li>
                  <li><a href="side-image.html">Post Side Image</a></li>
                  <li><a href="gallery.html">Post Gallery</a></li>
                  <li><a href="video.html">Post Video</a></li>
                  <li><a href="audio.html">Post Audio</a></li>
                  <li><a href="quote.html">Post Quote</a></li>
                </ul>
              </li>
              <li class="menu-item">
                <a href="categories.html">Categories</a>
              </li>
              <li class="menu-item">
                <a href="about.html">About</a>
              </li>
              <li class="menu-item">
                <a href="contact.html">Contact</a>
              </li>
            </b-navbar-nav><!-- /.navbar-nav -->
          </b-collapse><!-- /.navbar-collapse -->
        </b-navbar>
      </b-container><!-- /.container -->
    </div><!-- /.header-bottom -->
  </header><!-- /.masthead -->
</template>

<script>
export default {
  name: 'Header'
}

if (process.client) {
  const childMenuToggle = function (btn) {
    btn.addEventListener('click', (event) => {
      event.preventDefault()
      event.stopPropagation()

      const parent = btn.parentElement
      parent.classList.toggle('open')

      let sibling = parent.parentNode.firstChild
      while (sibling) {
        if (sibling.nodeType === 1 && sibling !== parent) {
          sibling.classList.remove('open')
        }
        sibling = sibling.nextSibling
      }
    })
  }

  const mobileMenuBtns = document.querySelectorAll('#main-menu .menu-item-has-children>a')
  for (const btn of mobileMenuBtns) {
    childMenuToggle(btn)
  }
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
  header .nav .open > a,
  header .nav .open > a:focus,
  header .nav .open > a:hover {
    background-color: transparent;
  }
  header .header-top {
    padding: 4.35% 0;
  }
  header .header-top .container {
    position: relative;
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
  header .navbar-default {
    background: transparent;
    border: none;
    border-radius: 0;
    margin: 0;
    padding: 0;
  }
  header .navbar-default .navbar-nav {
    margin: 0;
    padding: 0;
  }
  header .navbar-default .navbar-nav li {
    display: inline-block;
    font-family: 'Lato', sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  header .navbar-default .navbar-nav li a {
    color: #e4e4e4;
    display: inline-block;
    line-height: 60px;
    padding: 0 25px;
  }
  header .navbar-default .navbar-nav li a:hover {
    background: transparent !important;
    color: #af7152 !important;
    text-decoration: none;
  }
  header .navbar-default .navbar-nav li.active a,
  header .navbar-default .navbar-nav li.active a:focus,
  header .navbar-default .navbar-nav li.active a:visited {
    background: transparent;
    color: #af7152;
  }
  header .navbar-default .navbar-nav li.menu-item-has-children {
    position: relative;
  }
  header .navbar-default .navbar-nav li.menu-item-has-children .sub-menu,
  header .navbar-default .navbar-nav li.menu-item-has-children .children {
    background: #171717;
    opacity: 0;
    padding: 0 18px;
    text-align: left;
    -webkit-transition: all .25s ease, opacity 0.35s ease;
    -moz-transition: all .25s ease, opacity 0.35s ease;
    -ms-transition: all .25s ease, opacity 0.35s ease;
    -o-transition: all .25s ease, opacity 0.35s ease;
    transition: all .25s ease, opacity 0.35s ease;
  }
  header .navbar-default .navbar-nav li.menu-item-has-children .sub-menu li,
  header .navbar-default .navbar-nav li.menu-item-has-children .children li {
    width: 100%;
  }
  header .navbar-default .navbar-nav li.menu-item-has-children .sub-menu li a,
  header .navbar-default .navbar-nav li.menu-item-has-children .children li a {
    color: #e4e4e4;
    line-height: 43px;
    padding: 0;
    width: 100%;
  }
  header.style-02 {
    background: #fff;
  }
  header.style-02 .header-top {
    padding: 2.8% 0;
  }
  header.style-02 .header-top .navbar-brand {
    margin-top: 21px;
  }
  header.style-02 .menu-search form {
    top: 4px;
  }
  header.style-02 .menu-search form input {
    padding-left: 15px;
  }
  .navbar-default .navbar-nav > .open > a,
  .navbar-default .navbar-nav > .open > a:focus,
  .navbar-default .navbar-nav > .open > a:hover {
    background: none;
    color: #e4e4e4;
  }
  @media (min-width: 768px) {
    header .navbar-default .navbar-nav {
      float: none;
      justify-content: center;
    }
    header .navbar-default .navbar-nav li {
      float: none;
    }
    header .navbar-default .navbar-nav li.menu-item-has-children .sub-menu,
    header .navbar-default .navbar-nav li.menu-item-has-children .children {
      border-top: 1px solid #2d2d2d;
      left: 0;
      top: 60px;
      position: absolute;
      min-width: 180px;
      z-index: -1;
    }
    header .navbar-default .navbar-nav li.menu-item-has-children .sub-menu li,
    header .navbar-default .navbar-nav li.menu-item-has-children .children li {
      border-top: 1px solid #2d2d2d;
    }
    header .navbar-default .navbar-nav li.menu-item-has-children .sub-menu li:first-child,
    header .navbar-default .navbar-nav li.menu-item-has-children .children li:first-child {
      border-top: none;
    }
    header .navbar-default .navbar-nav li.menu-item-has-children:hover .sub-menu,
    header .navbar-default .navbar-nav li.menu-item-has-children:hover .children {
      opacity: 1;
      z-index: 1;
    }
    header.style-02 .navbar-collapse {
      padding: 0;
    }
    header.style-02 .navbar-collapse .navbar-nav li:first-child a {
      padding-left: 0;
    }
    header.style-02 .navbar-collapse .menu-search .form-trigger {
      color: #fff;
    }
  }
  @media (max-width: 1024px) {
    header.style-02 .header-top .navbar-brand {
      margin-top: 13px;
    }
  }
  @media (max-width: 992px) {
    header.style-02 .header-top .navbar-brand {
      margin-top: 5px;
    }
    header.style-02 .navbar-default .navbar-nav li a {
      padding: 0 15px;
    }
  }
  @media (max-width: 767px) {
    header .navbar-default .navbar-toggle {
      background: none;
      border: none;
      box-shadow: none;
      color: #fff;
      font-size: 25px;
      margin: 12px 5px;
      padding: 0;
    }
    header .navbar-default .navbar-toggle:focus {
      background: none;
      border: none;
      outline: 0;
    }
    header .navbar-default .navbar-brand {
      margin-top: 14px;
      max-width: 105px;
      max-height: 22px;
      padding: 0;
    }
    header .header-top {
      padding: 20px 0;
    }
    header .sidebar-menu .menu-close {
      right: 15px;
      top: 13px;
    }
    header .sidebar-menu .navbar-brand {
      padding: 15% 0;
    }
    header .sidebar-menu .navbar-nav li {
      padding: 0;
    }
    header .sidebar-menu .navbar-nav li a {
      padding: 10px 0;
    }
    header .sidebar-menu .navbar-nav li.menu-item-has-children .sub-menu,
    header .sidebar-menu .navbar-nav li.menu-item-has-children .children {
      display: none;
    }
    header .sidebar-menu .navbar-nav li.menu-item-has-children.open .sub-menu,
    header .sidebar-menu .navbar-nav li.menu-item-has-children.open .children {
      display: block;
      opacity: 1;
    }
    header .navbar-collapse {
      padding: 0;
    }
    header .navbar-collapse .navbar-nav {
      margin: 20px 0;
    }
    header .navbar-collapse .navbar-nav li {
      display: inline-block;
      width: 100%;
    }
    header .navbar-collapse .navbar-nav li a {
      line-height: 35px;
      padding: 0;
      width: 100%;
    }
    header .navbar-collapse .navbar-nav li.menu-item-has-children .sub-menu,
    header .navbar-collapse .navbar-nav li.menu-item-has-children .children {
      display: none;
    }
    header .navbar-collapse .navbar-nav li.menu-item-has-children .sub-menu li a,
    header .navbar-collapse .navbar-nav li.menu-item-has-children .children li a {
      line-height: 30px;
    }
    header .navbar-collapse .navbar-nav li.menu-item-has-children.open .sub-menu,
    header .navbar-collapse .navbar-nav li.menu-item-has-children.open .children {
      display: block;
      opacity: 1;
    }
  }
</style>
