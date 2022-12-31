const application = {
    data(){
        return {
            tasks: [
                {name: 'Task 1', done: false},
                {name: 'Task 2', done: true},
            ]
        }
    },
    methods: {

    },

}
Vue.createApp(application).mount('#app')
