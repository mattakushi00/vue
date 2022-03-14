const app = Vue.createApp({
    data() {
        return {
            list: [
                {
                    title: 'Основы',
                    description: 'тут гигантское описание для блока Основы',
                    active: true,
                    completed: false,
                },
                {
                    title: 'Компоненты',
                    description: 'а тут какое то описание для блока Компоненты'
                },
                {
                    title: 'Роутер',
                    description: 'и еще здесь тоже чет про описание для блока Роутер'
                },
                {
                    title: 'Vuex',
                    description: 'да и тут какого то хуя описание для блока Vuex'
                },
                {
                    title: 'Composition',
                    description: 'Описание для блока Composition'
                },
            ],
        }
    },
    methods: {
        zero(val) {
            return val.toString().length === 1 ? `0${val}` : val
        },

        getActiveItem(index) {
            const previousIndex = findActive(this.list)

            if (index > previousIndex) {
                delete this.list[previousIndex].active
                this.list[index].active = true

                for (let i = 0; i < index; i++) {
                    this.list[i].completed = true
                }

                return
            }

            delete this.list[previousIndex].active
            this.list[index].active = true

            for (let i = index; i < this.list.length; i++) {
                delete this.list[i].completed
            }
        },

        previousItem() {
            let activeIndex = findActive(this.list)

            delete this.list[activeIndex].active
            if (!(this.list[activeIndex - 1] === this.list[0])) {
                this.list[activeIndex - 1].active = true
                delete this.list[activeIndex - 1].completed
                return
            }
            this.list[0].active = true
            delete this.list[0].completed
        },

        nextItem() {
            let activeIndex = findActive(this.list)

            if (
                !(this.list[activeIndex + 1] === this.list[this.list.length - 1])
                && !(this.list[activeIndex] === this.list[this.list.length - 1])
            ) {
                delete this.list[activeIndex].active
                this.list[activeIndex].completed = true
                this.list[activeIndex + 1].active = true
                return
            }
            delete this.list[activeIndex].active
            this.list[activeIndex].completed = true
            this.list[this.list.length - 1].active = true
        },

        finish() {
            for (let i = 0; i < this.list.length; i++) {
                delete this.list[i].completed
                delete this.list[i].active
            }
            this.list[0].active = true
        }

    },
})

app.mount('#app')

function findActive(arr) {
    let activeIndex = ''
    arr.forEach((item, index) => item.active ? activeIndex = index : undefined)
    return activeIndex
}