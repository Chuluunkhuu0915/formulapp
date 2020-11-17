<template>
  <v-container>
    <!-- Submit товчийг дарахад login гэсэн method-ийг ажиллуулна -->
    <form @submit.prevent="singup">
      <v-text-field v-model="form.name" label="Хэрэглэгчийн нэр" type="text"></v-text-field>
      <span class="red--text" v-if="errors.name">{{ errors.name[0] }}</span>

      <v-text-field v-model="form.email" label="Цахим хаяг" type="email"></v-text-field>
      <span class="red--text" v-if="errors.email">{{ errors.email[0] }}</span>

      <v-text-field v-model="form.password" label="Нэвтрэх нууц үг" type="password"></v-text-field>
      <span class="red--text" v-if="errors.password">{{ errors.password[0] }}</span>

      <v-text-field
        v-model="form.password_confirmation"
        label="Нэвтрэх нууц үг дахин оруулах"
        type="password"
      ></v-text-field>
      <v-btn type="submit" color="blue">Бүртгүүлэх</v-btn>
      <router-link to="/login">
        <v-btn color="green">Нэвтрэх</v-btn>
      </router-link>
    </form>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
      },
      errors: {},
    };
  },
  created() {
    if (User.LoggedIn()) {
      this.$router.push({ name: "forum" });
    }
  },
  methods: {
    singup() {
      axios
        .post("/api/auth/singup", this.form)
        .then((res) => {
          User.responseAfterLogin(res);
          //   this.$router.push({ name: "forum" });
        })
        // .catch((error) => console.log(error.response.data));
        .catch((error) => (this.errors = error.response.data.errors));
      // User.login(this.form);
    },
  },
};
</script>
<style></style>
