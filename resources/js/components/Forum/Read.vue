<template>
    <div v-if="question">
        <edit-question :data="question" v-if="editing"></edit-question>
        <show-question :data="question" v-else></show-question>
    </div>
</template>

<script>
import EditQuestion from "../Forum/EditQuestion";
import ShowQuestion from "../Forum/ShowQuestion.vue";
export default {
    data() {
        return {
            question: null,
            editing: false
        };
    },
    components: { ShowQuestion, EditQuestion },
    created() {
        this.listen();
        this.getQuestion();
    },
    methods: {
        listen() {
            EventBus.$on("startEditing", () => {
                this.editing = true;
            });
            EventBus.$on("cancelEditing", () => {
                this.editing = false;
            });
        },
        getQuestion() {
            axios
                .get(`/api/question/${this.$route.params.slug}`)
                .then(res => (this.question = res.data.data))
                .catch();
        }
    }
};
</script>
<style></style>
