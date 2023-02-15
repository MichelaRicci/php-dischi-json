console.log('Vue Ok', Vue);

const apiUrl = 'http://localhost/php-dischi-json/api.php';

const app = Vue.createApp({


    data() {
        return {
            discs: []
        }

    },

    methods: {
        fetchApi(endpoint, target) {
            axios.get(endpoint).then(res => this[target] = res.data)
        }
    },

    created() {
        this.fetchApi(apiUrl, 'discs');
    }
})


app.mount('#app')





