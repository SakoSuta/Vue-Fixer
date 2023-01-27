const Fixer = {
    data(){
        return{
            Nbr:"",
            Currencies:"",
            CurrenciN:"",
            CurrenciC:"",
            Result:"",
        }
    },methods:{
        convert(){
            fetch(`https://api.frankfurter.app/latest?amount=${this.Nbr}&from=${this.CurrenciN}&to=${this.CurrenciC}`)
            .then(responsee => responsee.json())
            .then(jsonn => {
                console.log(jsonn);
                this.Result=jsonn.rates;
            })
        }
    },
    mounted(){
        fetch('https://api.frankfurter.app/currencies')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            this.Currencies=json;
        });
    }
}
Vue.createApp(Fixer).mount("#app")