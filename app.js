const Fixer = {
    data(){
        return{
            Nbr:"",
            Currencies:"",
            CurrenciN:"",
            CurrenciC:"",
            Result:"",
        }
    },
    mounted(){
        fetch('https://api.frankfurter.app/currencies')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            this.Currencies=json;
        })
    },
    mounted(){
        fetch(`'https://api.frankfurter.app/latest?amount=' + Nbr`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            this.Result=json;
        })
    }
}
Vue.createApp(Fixer).mount("#app")