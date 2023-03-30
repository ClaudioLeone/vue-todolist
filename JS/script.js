const {createApp} = Vue;

createApp ({
    data() {
        return {
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
    }
}).mount("#app")