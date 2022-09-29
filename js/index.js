Vue.createApp({
    data() {
        return {
            howMany: 0,
            message: null,
            result: ""
        }
    },
    methods: {
        showResult() {
            if(this.howMany < 0)
                this.result = "Must be non-negative number: "+this.howMany
            else
                this.result = this.message.repeat(this.howMany);   
        }
    }
}).mount("#app")