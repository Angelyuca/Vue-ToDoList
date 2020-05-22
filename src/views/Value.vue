<template>
    <div>
        <Header/>
        <div style="margin-left: 10px; margin-top: 20px;">
            <input class="input" v-model="param" value="">
            <v-btn @click="write" small>Задать</v-btn>
            {{param_for_store}}
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header'

    export default {
        name: "Value",
        components: {
            Header
        },
        data: () => ({
            param: '',
            param_for_store: ''

        }),
        methods: {
            write() {
                this.$store.dispatch('actionValue', this.param);
                this.param_for_store = this.$store.getters.getValue;
            }

        },
        created() {
            this.param = this.$route.params.value;
        }
    }
</script>

<style scoped>

    .input {
        width: 100px;
        margin-right: 10px;
        border: 1px solid #d2d2d3;
        border-radius: 3px;
        padding-left: 10px;
    }

</style>