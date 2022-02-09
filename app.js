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

        deleteNote(index) {
            this.notes.splice(index, 1)
        },
    },

    /*выполняется только в случае изменения данных, а не когда происходит какое либо событие, в отличии от объекта methods*/
    computed: {
        countNote(arr) {
            console.log('lal')
            return this.notes.length
        }
    },

    watch: {
        input(val) {
            if (val.length > 10) {
                this.input = ''
            }
        }
    }
}

Vue.createApp(app).mount('#app')