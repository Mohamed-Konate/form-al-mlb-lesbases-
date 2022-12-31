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
            this.newTask = {}
            this.$refs.task_name.focus();
        },
        removeAll(){
            if(!confirm("Voulez-vous tous supprimer?")){
                return false;
            }
            this.errors = [];
            this.tasks = [];
            this.newTask = {};
        },
        removeTask(task) {
            if(!confirm(`Voulez-vous supprimer la tâche : ${task.name} ?`)){
                return false;
            }
            this.tasks = this.tasks.filter(el => el !== task);
        }
    },
    created(){
        this.tasks = localStorage.getItem('tasks')? JSON.parse(localStorage.getItem('tasks')): this.tasks;
    },
    mounted(){
        this.$refs.task_name.focus();
    },
    updated(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }

}
Vue.createApp(application).mount('#app')
