<template>
  <div>
    <h1>admin panel</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Admin",
  mounted() {
    if (this.User != "admin@gmail.com") {
      this.$router.push("/vue_auth/");
    }
  },
  computed: {
    ...mapGetters({ User: "StateUser" }),
  },
};
</script>

<style></style>
