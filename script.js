const application = {
    data(){
        return {
            title: "Hello World",
            message: "Voici ma prémière application Vue js 3",
            width: 500,
            height: 300,
        }
    },
    methods: {
        bonjour: function(){
            return 'Bonjour tout le monde'
        },
        getSquareSurface: function (side){
            return Math.pow(side, 2)
        },
        getRectangleSurface: function (){
            return this.width * this.height
        }

    }
}
Vue.createApp(application).mount('#app')
