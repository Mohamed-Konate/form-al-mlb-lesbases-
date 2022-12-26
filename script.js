const application = {
    data(){
        return {
            title: "Hello World",
            message: "Voici ma prémière application Vue js 3"
        }
    }
}
Vue.createApp(application).mount('#app')
