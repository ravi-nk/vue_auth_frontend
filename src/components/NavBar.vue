<template>
  <header id="header">
    <nav class="otm otm-follow">
      <div class="ot-hyper-menu">
        <router-link to="/vue_auth">
          <img
            id="header-logo-img"
            src="vue_auth/images/logo.png"
            data-ot-retina="vue_auth/images/logo@2x.png"
            alt=""
          />
          <!-- <strong id="header-logo-text">Bundy</strong> -->
          <i class="material-icons">menu</i>
        </router-link>
        <div class="ot-hyper-menu-content">
          <ul class="load-responsive" v-if="isLoggedIn">
            <!-- <li>
              <a href="blog.html"
                ><i class="material-icons">book</i><span>Blog page</span></a
              >
            </li>
            <li>
              <a href="post.html"
                ><i class="material-icons">chrome_reader_mode</i
                ><span>Post page</span></a
              >
            </li>
            <li>
              <a href="forum.html"
                ><i class="material-icons">forum</i><span>Forums</span></a
              >
            </li>
            <li>
              <a href="photo-gallery.html"
                ><i class="material-icons">photo_library</i
                ><span>Gallery</span></a
              >
            </li>
            <li>
              <a href="shortcode.html"
                ><i class="material-icons">code</i><span>Shortcodes</span></a
              >
            </li>
            <li>
              <a href="contact.html"
                ><i class="material-icons">place</i><span>Contact us</span></a
              >
            </li>
          </ul>
          <h3>Features</h3>
          <ul class="load-responsive">
            <li>
              <a href="full-width.html"
                ><i class="material-icons">panorama_wide_angle</i
                ><span>Full width</span></a
              >
            </li>
            <li>
              <a href="404-page.html"
                ><i class="material-icons">error</i><span>404 page</span></a
              >
            </li>
            <li>
              <a href="read-later.html"
                ><i class="material-icons">access_time</i
                ><span>Read later</span></a
              >
            </li> -->

            <li>
              <a @click="logout"> Logout</a>
            </li>
          </ul>
          <ul class="load-responsive" v-else>
            <li>
              <router-link to="/vue_auth/login"
                ><i class="material-icons">person</i
                ><span>Login</span></router-link
              >
            </li>
            <li>
              <router-link to="/vue_auth/register"
                ><i class="material-icons">person_add</i
                ><span>Signup</span></router-link
              >
            </li>
            <li>
              <router-link to="/vue_auth/contact"
                ><i class="material-icons">place</i
                ><span>Contact</span></router-link
              >
            </li>

            <!-- <li>
              <a href="forgot.html"
                ><i class="material-icons">lock</i><span>Lost password</span></a
              >
            </li> -->
          </ul>
        </div>
      </div>

      <!-- <div class="ot-right-buttons">
        <ul>
          <li>
            <a href="#ot-search-overlay"
              ><i class="material-icons">search</i></a
            >
          </li>
          <li class="load-responsive-bar">
            <a href="#ot-login-overlay" style="background-color: #82b93a;"
              ><i class="material-icons">add_circle_outline</i
              ><span>Create post</span></a
            >
          </li>
          <li class="load-responsive-bar">
            <a href="#ot-login-overlay"
              ><i class="material-icons">person_outline</i></a
            >
          </li>
        </ul>
      </div> -->

      <ul class="load-responsive">
        <li class="menu-with-icon-n-underline" v-if="User == 'admin@gmail.com'">
          <router-link to="/vue_auth/admin/allusers"
            ><i class="material-icons">person_outline</i>Users</router-link
          >
        </li>
        <li class="menu-with-icon-n-underline">
          <a href="#"><i class="material-icons">whatshot</i>Hot posts</a>
        </li>
        <!--  <li class="menu-with-icon-n-underline">
          <a href="blog.html"
            ><i class="material-icons">star_border</i>Popular</a
          >
        </li>
        <li class="menu-with-icon-n-underline">
          <a href="blog.html"
            ><i class="material-icons">trending_up</i>Trending</a
          >
        </li>
        <li class="menu-with-icon-n-underline">
          <a href="blog.html"
            ><i class="material-icons">access_time</i>Latest</a
          >
        </li> -->
        <!-- <li><a href="#"><span>Blog</span></a>
							<ul class="sub-menu">
								<li><a href="#">Post</a></li>
								<li><a href="#">Post</a></li>
								<li><a href="#">Post</a></li>
							</ul>
						</li>
						<li><a href="#"><span>Mega menu</span></a>
							<ul class="sub-menu ot-mega-menu">
								<li class="menu-widgets">
									<div class="otg otg-items-4">
										<div class="otg-item">
											<p>asd</p>
										</div>
										<div class="otg-item">
											<p>asd</p>
										</div>
										<div class="otg-item">
											<p>asd</p>
										</div>
										<div class="otg-item">
											<p>asd</p>
										</div>
									</div>
								</li>
							</ul>
						</li> -->
      </ul>
    </nav>

    <!-- END #header -->
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NavBar",
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isAuthenticated;
    },
    ...mapGetters({ User: "StateUser" }),
  },

  methods: {
    async logout() {
      await this.$store.dispatch("LogOut");
      this.$router.push("/vue_auth/login");
    },
  },
};
</script>

<style></style>
