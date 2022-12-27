const application = {
    data(){
        return {
            title: "Hello World",
            message: "Voici ma prémière application Vue js 3",
            width: 500,
            height: 300,
            fruits: ['Orange', 'Banana', 'cherise', 'mango'],
            lien: 'https://alphorm.com',
            image: 'images/img.png',
            animal: false,
            message_v_model: 'Message par defaut',
            done: false,
            textHtml: '<p class="text-danger"> Attention !</p>',
            km:0
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
        },
        redButton: function (){
            return alert('Tu as cliqué sur le bouton rouge !')
        },
        blueButton: function (){
            return alert('Tu as cliqué sur le bouton bleu!')
        },
        blackButton: function (){
            return alert('La souris est sorti du bouton noir !')
        },
        drive: function(){
            setInterval(()=>{
                this.km++
            }, 1000)
        }

    },
    beforeCreate(){
        console.log(this.km)
    },
    created(){
        this.drive()
    },
}
Vue.createApp(application).mount('#app')
