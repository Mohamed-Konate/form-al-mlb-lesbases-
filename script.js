const application = {
    data(){
        return {
            tasks: [],
            newTask: {
                done: false
            },
            errors: [],
        }
    },
    methods: {

        addTask(){
            this.errors = [];
            if(!this.newTask.name){
                this.errors.push("Please enter a name");
                return false;
            }
            this.tasks.push(this.newTask);
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
            this.newTask = {}
        },
        removeAll(){
            if(!confirm("Voulez-vous tous supprimer?")){
                return false;
            }
            this.errors = [];
            this.tasks = [];
            this.newTask = {};
        }


    },

}
Vue.createApp(application).mount('#app')
