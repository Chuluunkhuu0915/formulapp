<template>
    <v-card>
        <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">
                    <router-link :to="data.path">{{ data.title }}</router-link>
                </h3>
                <div class="grey--text">
                    {{ data.user }} нэртэй хэрэглэгч
                    {{ data.created_at }} хэлсэн.
                </div>
            </div>
            <v-card-text>{{ data.body }}</v-card-text>
        </v-card-title>
    </v-card>
</template>
<script>
export default {
    props: ["data"]
};
</script>
<style></style>
