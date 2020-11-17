<template>
    <v-toolbar>
        <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
        <v-toolbar-title>Real Time Forum App</v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="hidden-sm-and-down">
            <router-link
                v-for="link in links"
                :key="link.title"
                :to="link.to"
                v-if="link.show"
            >
                <v-btn flat>{{ link.title }}</v-btn>
            </router-link>
        </div>
    </v-toolbar>
</template>
<script>
export default {
    data() {
        return {
            links: [
                { title: "Хэлэлцүүлэг", to: "/forum", show: true },
                {
                    title: "Асуулт",
                    to: "/questionCreate",
                    show: User.loggedIn()
                },
                { title: "Ангилал", to: "/category", show: User.loggedIn() },
                { title: "Нэвтрэх", to: "/login", show: !User.loggedIn() },
                { title: "Гарах", to: "/logout", show: User.loggedIn() }
            ]
        };
    },
    created() {
        EventBus.$on("logout", () => {
            User.logOut();
        });
    }
};
</script>
<style></style>
