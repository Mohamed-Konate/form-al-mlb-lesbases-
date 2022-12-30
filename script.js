const application = {
    data() {
        return {
            users: [
                {
                    firstName: 'Aly',
                    lastName: 'Kane',
                    age: 20,
                },
                {
                    firstName: 'Seydou',
                    lastName: 'Sissoko',
                    age: 22,
                },
            ],
            newUser: {},
            errors: [],

        }
    },
    methods: {
        addUser: function () {
            this.errors = [];
            if (!this.newUser.firstName){
                this.errors.push('First name is required');
            }
            if (!this.newUser.lastName){
                this.errors.push('Last name is required');
            }
            if (!this.newUser.age || !Number.isInteger(this.newUser.age) || this.newUser.age <15){
                this.errors.push('Age must be an integer greater than 15');
            }
            if (this.errors.length){
                return false;
            }
            this.users.push(this.newUser);
            this.newUser = {};
            return true;
        }
    },
}
Vue.createApp(application).mount('#app')
