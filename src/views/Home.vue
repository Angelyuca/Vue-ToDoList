<template>
    <div class="home">
        <Header/>
        <div class="container">
            <div class="title"><span class="text-tdl">ToDoList</span></div>
            <div class="row block">
                <div class="col-lg-8">
                    <v-row justify="center">
                        <v-btn color="#95f0a9" dark to="/add" style="margin-top: 20px">Добавить задачу</v-btn>
                    </v-row>
                    <router-view></router-view>
                    <div class="block-tasks">
                        <div v-if="items.length>0">
                            <div
                                    v-for="(item, index) in items" :key="index"
                                    class="alert alert-dismissible alert-info bubble">
                                <button @click="del(item)" type="button" class="close delete">&times;</button>
                                <div class="flex-task">
                                    <v-checkbox
                                            class="custom-checkbox"
                                            color="rgba(0, 190, 30, 1)"
                                            @click.native="done(item)"
                                            :input-value="item.is_complete"

                                    ></v-checkbox>
                                    <span class="text-task" :class="{'done': item.is_complete }">{{item.text}}</span>
                                </div>

                            </div>
                        </div>
                        <p class="not-tasks" v-else>Задач нет</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header'

    export default {
        name: 'Home',
        components: {
            Header
        },
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
            sort() {
                this.items = this.items.sort((a, b) => a.is_complete - b.is_complete);
            },

            del(item) {
                let index = this.items.indexOf(item);
                this.$store.dispatch('actionDelete', index);
            },

            done(item) {
                let index = this.items.indexOf(item);
                let obj = {
                    text: item.text,
                    is_complete: !item.is_complete
                };
                this.$store.dispatch('actionDone', {obj: obj, index: index});
                setTimeout(this.sort, 10);
            }
        },
        created: function () {
            this.items = this.$store.getters.getTasks;
            this.sort();
        }
    }

</script>
<style>

    .text-tdl {
        margin-top: 20px;
        color: #767676;
        font-size: 50px;
        position: relative;
        font-weight: 300;
    }

    .title {
        display: flex;
        justify-content: center;
    }


    .block {
        justify-content: center;
    }

    .block-tasks {
        font-weight: 300;
        margin-top: 30px;
        padding-top: 10px;
        height: 400px;
        background: #f8f8f8;
        border-radius: 8px;
        overflow: auto;
        scrollbar-width: none;
    }

    .not-tasks {
        font-size: 25px;
        display: flex;
        justify-content: center;
        margin-top: 100px;
    }


    .bubble {
        margin: 10px;
        text-align: left;
        padding-right: 2rem !important;
    }

    .flex-task {
        display: flex;
        align-items: center;
        margin: -5px;
        font-size: 20px;
    }

    .delete {
        color: #ff2d0c !important;
        margin-top: -5px
    }

    .custom-checkbox {
        margin-right: 10px !important;
        margin-top: 0px !important;
        margin-bottom: -18px !important;

    }

    .done {
        text-decoration: line-through;
        text-decoration-color: black;
        color: #dae1e8;
    }

    ::-webkit-scrollbar { /* chrome based */
        width: 0px; /* ширина scrollbar'a */
        background: transparent; /* опционально */
    }

</style>