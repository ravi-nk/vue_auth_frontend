<template>
  <div class="container">
    <table class="table table-responsive">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in Users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Users",
  components: {},
  mounted() {
    if (this.User != "admin@gmail.com") {
      this.$router.push("/vue_auth/");
    }
  },

  computed: {
    ...mapGetters({ Users: "StateUsers", User: "StateUser" }),
  },
};
</script>

<style></style>
