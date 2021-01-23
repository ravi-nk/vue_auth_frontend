<template>
  <main id="content">
    <div class="ot-breatcrumbs">
      <div class="container">
        <div>
          <h1 class="entry-title">Members area</h1>
          <ul id="ot-breadcrumbs-list">
            <li itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">
              <a href="#" itemprop="url"
                ><meta itemprop="title" content="Homepage" />Homepage</a
              >
            </li>
            <li itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">
              <a href="#" itemprop="url"
                ><meta itemprop="title" content="Login" />Login</a
              >
            </li>
          </ul>
          <!-- <a href="#" class="ot-bread-action">Call to action button</a> -->
        </div>
      </div>
    </div>

    <div class="ot-wide-container ot-wide-container-border">
      <div class="container">
        <div class="ot-wide-container-inner">
          <div class="otg ot-full-width-block otg-h-40">
            <!-- BEGIN .ot-main-content -->
            <div class="otg-item otg-t-12 ot-main-content">
              <form @submit.prevent="submit">
                <p v-if="showError" id="error">
                  Email or Password is incorrect
                </p>
                <div class="ot-form-login">
                  <h1>Login</h1>

                  <p>
                    <input
                      type="text"
                      autocomplete="off"
                      name="email"
                      v-model="form.email"
                      placeholder="Email"
                    />
                  </p>
                  <p>
                    <input
                      type="password"
                      autocomplete="off"
                      name="password"
                      v-model="form.password"
                      placeholder="Password"
                    />
                  </p>
                  <p class="submit">
                    <input type="submit" class="button" />
                  </p>
                  <!-- <p>
                    <a href="#">Signup</a> if not a member already!<br />Or did
                    you <a href="#">forgot your password</a> ?
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
  name: "Login",
  components: {},
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      showError: false,
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    async submit() {
      const User = new FormData();
      User.append("email", this.form.email);
      User.append("password", this.form.password);
      try {
        if (this.form.email != "" && this.form.password != "") {
          await this.LogIn(User);
          if (this.form.email === "admin@gmail.com") {
            this.$router.push("/vue_auth/admin");
          } else {
            this.$router.push("/vue_auth/");
          }

          this.showError = false;
        }
      } catch (error) {
        this.showError = true;
      }
    },
  },
};
</script>

<style></style>
