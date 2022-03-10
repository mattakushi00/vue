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
            ],
            data: ''
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

        next() {
            let activeItem = findActive(this.list)

            delete this.list[activeItem].active
            if (!(this.list[activeItem + 1] === this.list[this.list.length - 1])) {
                this.list[activeItem + 1].active = true
                return
            }
            this.list[this.list.length - 1].active = true
        },

        last() {
            let activeItem = findActive(this.list)

            delete this.list[activeItem].active
            if (!(this.list[activeItem - 1] === this.list[0])) {
                this.list[activeItem - 1].active = true
                return
            }
            this.list[0].active = true
        },

        btnDisable() {
            const targetIndex = findActive(this.list) + 1
            if (targetIndex === this.list.length) {
                document.querySelector('.btn_forward').disabled = true
            } else {
                document.querySelector('.btn_forward').disabled = false
            }

            if (targetIndex === 1) {
                document.querySelector('.btn_back').disabled = true
            } else {
                document.querySelector('.btn_back').disabled = false
            }
        },

    },
})

app.mount('#app')

function findActive(arr) {
    let activeIndex = ''
    arr.forEach((item, index) => item.active ? activeIndex = index : undefined)
    return activeIndex
}