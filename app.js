const app = {
    data() {
        return {
            title: 'Заметки',
            input: '',
            placeHold: 'ваша заметка',
            notes: [1, 2, 3]
        }
    },
    methods: {
        addNote(e) {
            this.notes.push(this.input)
            this.input = ''
        },

        fillInput(e) {
            this.input = e.target.value
        }
    }
}

Vue.createApp(app).mount('#app')