<template>
  <footer class="footer_area">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="footer_top flex-column">
            <div class="social">
              <a href="https://github.com/Arimeka" target="_blank"><i class="fa fa-github fa-2x" /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="row footer_bottom justify-content-center">
        <p class="col-lg-8 col-sm-12 footer-text">
          <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
          This template is made with <i class="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
          <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
  @media (max-width: 991px) {
    .footer_area {
      padding-top: 80px !important;
      padding-bottom: 80px !important;
      background-image: none !important; } }
  @media (max-width: 575px) {
    .footer-area {
      padding: 70px 0px; } }
  .footer_area {
    padding: 0 0 120px 0;
    position: relative; }
  .footer_area:before {
    content: '';
    position: absolute;
    top: -200px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: -1; }
  @media (max-width: 1024px) {
    .footer_area {
      padding: 60px 0; } }
  .footer_area .social a i {
    font-size: 22px; }
  @media (max-width: 576px) {
    .footer_area .social a i {
      font-size: 25px; } }
  .footer_area .footer_bottom {
    text-align: center; }
  .footer_area .footer_bottom p {
    margin-bottom: 0; }
  .footer_area .footer_bottom a {
    color: #854fee; }
</style>
