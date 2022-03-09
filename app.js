const app = Vue.createApp({
    data() {
        return {
            list: [
                {
                    title: 'Основы',
                    description: 'тут гигантское описание для блока Основы',
                    active: true
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
            ]
        }
    },
    methods: {
        zero(val) {
            return val.toString().length === 1 ? `0${val}` : val
        },

        getActive(index) {
            this.list.forEach(item => {
                if (item.active) {
                    delete item.active
                    return
                }
            })
            this.list[index].active = true
        },

        getLast(targetIndex) {
             /*TODO добавить классы пройденных курсов*/
        },

        next(event) {
            let activeItem = findActive(this.list)

            delete this.list[activeItem].active
            if (!(this.list[activeItem + 1] === this.list[this.list.length - 1])) {
                this.list[activeItem + 1].active = true
                event.target.disabled = false
                return
            }
            event.target.disabled = true
            this.list[this.list.length - 1].active = true
            /*TODO активировать кнопки, если выбран не первый и не последний курс*/
        },

        last(event) {
            let activeItem = findActive(this.list)

            delete this.list[activeItem].active
            if (!(this.list[activeItem - 1] === this.list[0])) {
                this.list[activeItem - 1].active = true
                event.target.disabled = false
                return
            }
            event.target.disabled = true
            this.list[0].active = true
        }

    }
})

app.mount('#app')

function findActive(arr) {
    let activeIndex = ''
    arr.forEach((item, index) => item.active ? activeIndex = index : undefined)
    return activeIndex
}