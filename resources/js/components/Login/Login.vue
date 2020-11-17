<template>
    <v-container>
        <!-- Submit товчийг дарахад login гэсэн method-ийг ажиллуулна -->
        <form @submit.prevent="login">
            <v-text-field
                v-model="form.email"
                label="Цахим хаяг"
                type="text"
                required
            ></v-text-field>
            <v-text-field
                v-model="form.password"
                label="Нэвтрэх нууц үг"
                type="password"
                required
            ></v-text-field>
            <v-btn type="submit" color="green">Нэвтрэх</v-btn>
            <router-link to="/singup">
                <v-btn color="blue">Бүртгүүлэх</v-btn>
            </router-link>
        </form>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            form: {
                email: null,
                password: null
            }
        };
    },
    created() {
        if (User.LoggedIn()) {
            this.$router.push({ name: "forum" });
        }
    },
    methods: {
        login() {
            // alert("Login ажиллаж байна");
            User.login(this.form);
            //   this.$router.push({ name: "forum" });
        }
    }
};
</script>
<style></style>
