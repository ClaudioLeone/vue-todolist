const { createApp } = Vue;

createApp({
    data() {
        return {
            addBar: true,
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
        addToDo() {
            if (this.newToDo === "") {
                return;
            }
            else {
                this.return = this.toDoItems.unshift({ text: this.newToDo, done: false, id: this.newToDo });
                this.newToDo = "";
            }
        },

        deleteToDo(object) {
            this.toDoItems.splice(object, 1);
        },

        deleteLine() {
            if ((this.newToDo !== "")) {
                this.newToDo = "";
            }
        }
    }
}).mount("#app")