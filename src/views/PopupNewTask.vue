<template>
    <div class="wrapper">
        <v-card class="card">
            <router-link to="/">
                <button type="button" class="close btn-close">&times;</button>
            </router-link>
            <div class="text-popup">
                <textarea class="form-control input-task" rows="3" v-model="obj_task.text"></textarea>
                <button @click="add(obj_task)" class="close add">+</button>
            </div>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "PopupNewTask",
        data: () => {
            return {
                items: [],
                obj_task: {
                    text: '',
                    is_complete: false
                }
            }
        },
        methods: {
            add(obj_task) {
                if (obj_task.text !== '') {
                    let obj = {
                        text: obj_task.text,
                        is_complete: obj_task.is_complete
                    };
                    this.$store.dispatch('actionTasks', obj);
                    this.obj_task.text = '';
                    this.$router.push('/')
                }
            }
        },
        created: function () {

            this.items = this.$store.getters.getTasks;
        }
    }
</script>

<style scoped>

    .wrapper {
        position: fixed;
        z-index: 1;
        background: #00000029;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card {
        height: 350px;
        width: 45%;
        margin-top: -70px;
    }

    .btn-close {
        color: #ff2d0c;
        margin-right: 8px;
        font-size: 30px;
        padding-bottom: 10px;
        height: 30px;
    }

    .text-popup {
        margin-left: 10px;
        margin-right: 10px;
        height: 340px;
    }


    .input-task {
        height: 95% !important;
        font-size: 30px;
    }

    .add {
        font-size: 35px !important;
        margin-top: -35px;
        margin-right: 16px;
        color: #00cc19 !important;
    }

    @media screen and (max-width: 1000px) {

        .card {
            width: 60%;
        }

    }

    @media screen and (max-width: 800px) {

        .card {
            margin-top: 20px;
            width: 80%;
            height: 400px;
        }

        .input-task {
            margin-top: 10px;
            height: 98% !important;
        }

    }

    @media screen and (max-width: 500px) {

        .card {
            width: 90%;
        }

    }

    @media screen and (max-width: 377px) {

        .card {
            width: 95%;
        }

    }

</style>