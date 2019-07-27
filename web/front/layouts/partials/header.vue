<template>
  <header class="header_area">
    <div class="main_menu">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <a class="navbar-brand logo_h" href="/">Arimeka</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="icon-bar" />
            <span class="icon-bar" />
            <span class="icon-bar" />
          </button>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div id="navbarSupportedContent" class="collapse navbar-collapse offset">
            <ul class="nav navbar-nav menu_nav justify-content-end">
              <li class="nav-item active">
                <a class="nav-link" href="/">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
  @media (max-width: 1199px) {
    .header_area .navbar .nav .nav-item {
      margin-right: 28px; }  }
  @media (max-width: 991px) {
    .navbar-toggler {
      border: none;
      border-radius: 0px;
      padding: 0px;
      cursor: pointer;
      margin-top: 27px;
      margin-bottom: 23px; }

    .header_area .navbar {
      background: #000; }

    .navbar-toggler[aria-expanded="false"] span:nth-child(2) {
      opacity: 1; }

    .navbar-toggler[aria-expanded="true"] span:nth-child(2) {
      opacity: 0; }

    .navbar-toggler[aria-expanded="true"] span:first-child {
      transform: rotate(-45deg);
      position: relative;
      top: 7.5px; }

    .navbar-toggler[aria-expanded="true"] span:last-child {
      transform: rotate(45deg);
      bottom: 6px;
      position: relative; }

    .navbar-toggler span {
      display: block;
      width: 25px;
      height: 3px;
      background: #fff;
      margin: auto;
      margin-bottom: 4px;
      transition: all 400ms linear;
      cursor: pointer; }

    .navbar .container {
      padding-left: 15px;
      padding-right: 15px; }

    .navbar .container .logo_h {
      color: white;
      text-transform: uppercase; }

    .nav {
      padding: 0px 0px; }

    .header_area + section,
    .header_area + row,
    .header_area + div {
      margin-top: 117px; }

    .header_top .nav {
      padding: 0px; }

    .header_area .navbar .nav .nav-item .nav-link {
      line-height: 40px;
      margin-right: 0px;
      display: block;
      border-bottom: 1px solid #ededed33;
      border-radius: 0px;
      color: #fff; }

    .header_area .navbar-collapse {
      max-height: 340px;
      overflow-y: scroll; }

    .header_area .navbar .nav .nav-item.submenu ul .nav-item .nav-link {
      padding: 0px 15px; }

    .header_area .navbar .nav .nav-item {
      margin-right: 0px; }

    .header_area + section,
    .header_area + row,
    .header_area + div {
      margin-top: 0px; }

    .header_area.navbar_fixed .main_menu .navbar .nav .nav-item .nav-link {
      line-height: 40px;
      color: #fff; }

    .header_area.white_menu.navbar_fixed .main_menu .navbar .nav .nav-item .nav-link {
      line-height: 40px;
      color: #fff; }

    .header_area.white_menu .navbar .nav .nav-item .nav-link {
      color: #222; } }
  @media (max-width: 575px) {
    .header_area + section,
    .header_area + row,
    .header_area + div {
      margin-top: 0px; } }
  @media (max-width: 480px) {
    .header_area .navbar-collapse {
      max-height: 250px; } }
</style>
