console.log('Vue Ok', Vue);

const app = Vue.createApp({


    data() {
        return {
            discs: []
        }

    },
    created() {
        axios.get('http://localhost/php-dischi-json/api.php').then(res => this.discs = res.data)
    }
})


app.mount('#app')





