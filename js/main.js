const {createApp} = Vue

createApp({
    data() {
        return{
            message: "Ciao a tutti",
            image: "../img/immagini-e-tabelle-html-00.jpg",
            photoInfo: "dogPhoto"
        }
    }
}).mount('#app')