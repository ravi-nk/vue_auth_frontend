<template>
  <main id="content">
    <!-- <div class="ot-breatcrumbs">
					<div class="container">
						<div>
							<ul id="ot-breadcrumbs-list">
								<li itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="index.html" itemprop="url"><meta itemprop="title" content="Homepage"/>Homepage</a></li>
								<li itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="blog.html" itemprop="url"><meta itemprop="title" content="Blog"/>Blog</a></li>
							</ul>
						</div>
					</div>
				</div>

				<div class="ot-breatcrumbs">
					<div class="container">
						<div>
							<span>Some optional subtitle goes here...</span>
							<a href="#" class="ot-bread-action">Call to action button</a>
						</div>
					</div>
				</div>

				<div class="ot-breatcrumbs">
					<div class="container">
						<div>
							<h1 class="entry-title">Page width sidebar</h1>
							<a href="#" class="ot-bread-action">Call to action button</a>
						</div>
					</div>
				</div> -->

    <!-- <div class="ot-breatcrumbs">
					<div class="container">
						<div>
							<h1 class="entry-title">Page width sidebar</h1>
							<span>Some optional subtitle goes here...</span>
							<a href="#" class="ot-bread-action">Call to action button</a>
						</div>
					</div>
				</div> -->

    <!-- <div class="ot-breatcrumbs">
					<div class="container">
						<div class="aside-long-head">
							<a href="#"><img src="images/aside-2.png" alt="" /></a>
						</div>
					</div>
				</div> -->

    <div class="ot-breatcrumbs">
      <div class="container">
        <div>
          <h1 class="entry-title">Members area</h1>
          <ul id="ot-breadcrumbs-list">
            <li itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">
              <a href="index-2.html" itemprop="url"
                ><meta itemprop="title" content="Homepage" />Homepage</a
              >
            </li>
            <li itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">
              <a href="signup.html" itemprop="url"
                ><meta itemprop="title" content="Signup" />Signup</a
              >
            </li>
          </ul>
          <!-- <a href="#" class="ot-bread-action">Call to action button</a> -->
        </div>
      </div>
    </div>

    <!-- <div class="ot-wide-container ot-wide-container-border" style="background-image: url(../images/bg-texture-grey.jpg);">
					<div class="container">

						<div class="ot-wide-container-inner">
							<p>asd</p>
						</div>

					</div>
				</div>

				<div class="ot-wide-container ot-wide-container-border ot-wide-container-dark">
  
					<video autoplay loop>
						<source type="video/mp4" src="http://blucube.net/stuff/codepen-assets/html5vid/beepl-pink-vynil.mp4">
						<source type="video/webm" src="http://blucube.net/stuff/codepen-assets/html5vid/beepl-pink-vynil.webm">
						<source type="video/ogg" src="http://blucube.net/stuff/codepen-assets/html5vid/beepl-pink-vynil.ogv">
					</video>

					<div class="container">

						<div class="ot-wide-container-inner">
							<h1>Video block</h1>
							<p>asd</p>
						</div>

					</div>
				</div> -->

    <div class="ot-wide-container ot-wide-container-border">
      <div class="container">
        <div class="ot-wide-container-inner">
          <div class="otg ot-full-width-block otg-h-40">
            <!-- BEGIN .ot-main-content -->
            <div class="otg-item otg-t-12 ot-main-content">
              <form @submit.prevent="submit">
                <p v-if="showError" id="error" style="color:red">
                  All Fields are Required
                </p>
                <div class="ot-form-login">
                  <h1>Sign up</h1>
                  <p>
                    <input
                      type="text"
                      autocomplete="off"
                      v-model="form.name"
                      placeholder="Name"
                    />
                  </p>
                  <p>
                    <input
                      type="text"
                      autocomplete="off"
                      v-model="form.email"
                      placeholder="E-mail address"
                    />
                  </p>
                  <p>
                    <input
                      type="password"
                      autocomplete="off"
                      v-model="form.password"
                      placeholder="Password"
                    />
                  </p>
                  <!-- <p>
                    <input
                      type="password"
                      autocomplete="off"
                      v-model="form.rpwd"
                      placeholder="Password repeat"
                    />
                  </p> -->

                  <p class="submit">
                    <input
                      type="submit"
                      value="Create an account"
                      class="button"
                    />
                  </p>
                  <!-- <p>
                    <a href="#">Login</a> if you are a member already!<br />Or
                    did you <a href="#">forgot your password</a> ?
                  </p> -->
                </div>
              </form>
              <!-- END .ot-main-content -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- BEGIN #content -->
  </main>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
  components: {},
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        // rpwd: "",
      },
      showError: false,
    };
  },
  methods: {
    ...mapActions(["Register"]),
    async submit() {
      if (
        this.form.email !== "" &&
        this.form.password !== "" &&
        this.form.name !== ""
      ) {
        this.showError = false;
        try {
          await this.Register(this.form);
          this.$router.push("/vue_auth/");
        } catch (err) {
          alert(err);
        }
      } else {
        this.showError = true;
      }
    },
  },
};
</script>

<style></style>
