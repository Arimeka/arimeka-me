<template>
  <footer class="site-footer colophon">
    <b-container>
      <b-row>
        <b-col sm="3">
          <a href="./" class="footer-logo pull-left"><img src="http://demos-jeweltheme.ipunu91y.maxcdn-edge.com/sasha/images/logo4.png" alt="Logo"></a><!-- /.footer-logo -->
        </b-col>

        <b-col sm="6">
          <div class="copyright text-center">
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            This template is made with <i class="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
          </div><!-- /.copyright -->
        </b-col>

        <b-col sm="3">
          <div class="footer-social pull-right">
            <a href="#"><i class="fa fa-instagram" /></a>
            <a href="#"><i class="fa fa-facebook" /></a>
            <a href="#"><i class="fa fa-twitter" /></a>
            <a href="#"><i class="fa fa-pinterest-p" /></a>
          </div><!-- /.footer-social -->
        </b-col>
      </b-row><!-- /.row -->
    </b-container><!-- /.container -->
  </footer><!-- /.site-footer -->
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
  footer {
    background: #171717;
    color: #aaa;
    display: inline-block;
    float: left;
    font-family: 'Raleway', sans-serif;
    font-size: 11px;
    padding: 25px 0;
    width: 100%;
  }
  footer a {
    color: #aaa;
    text-transform: uppercase;
  }
  footer .footer-logo {
    max-width: 50px;
    max-height: 10px;
  }
  footer .footer-social a {
    color: #fff;
    display: inline-block;
    font-size: 12px;
    padding-left: 8px;
  }
</style>
