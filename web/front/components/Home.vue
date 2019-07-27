<template>
  <section class="home_area">
    <div class="inner">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="content">
              <h1 class="text-uppercase">
                Navi Arimeka
              </h1>
              <small>(nope it's not real name)</small>
              <h5 class="text-uppercase">
                backend developer
              </h5>
              <div class="d-flex align-items-center social">
                <a href="https://github.com/Arimeka" target="_blank"><i class="fa fa-github fa-4x" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
  .home_area .inner {
    width: 100%; }
  .home_area .inner .col-lg-7 {
    vertical-align: middle;
    align-self: center; }
  .home_area .inner .content {
    text-align: left; }
  @media (max-width: 991px) {
    .home_area .inner .content {
      margin-top: 150px; }
    .home_area {
      margin-top: 0; } }
  .home_area .inner .content h1 {
    margin-top: 20px;
    font-size: 70px;
    line-height: 60px;
    margin-bottom: 25px; }
  @media (max-width: 1024px) {
    .home_area .inner .content h1 {
      font-size: 60px; } }
  @media (max-width: 767px) {
    .home_area .inner .content h1 {
      font-size: 50px; }
    .home_area {
      min-height: 300px; } }
  .home_area .inner .content h5 {
    font-size: 24px;
    margin-bottom: 35px; }

  @media (max-width: 575px) {
    .home_area {
      min-height: 450px; }

    .main_title h2 {
      font-size: 25px; } }
</style>
