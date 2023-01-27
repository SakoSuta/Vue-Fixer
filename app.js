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
    }
}
Vue.createApp(Fixer).mount("#app")