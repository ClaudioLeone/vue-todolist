const {createApp} = Vue;

createApp ({
    data() {
        return {
            // addBar: false,
            newToDo: "",


            toDoItems: [
                {
                    text: "Lavare i piatti",
                    done: false
                },
                {
                    text: "Fare il caffè",
                    done: true
                },
                {
                    text: "Cercare di non pensare al carosello",
                    done: false
                }
            ]
        }
    },

    methods: {
        // addBarToogle() {
        //     if (this.addBar === false) {
        //         this.addBar = true;
        //     }
        //     else {
        //         this.addBar = false;
        //     }
        // }

        addToDo() {

            this.return = this.toDoItems.unshift({text: this.newToDo, done: false})
        }
    }
}).mount("#app")