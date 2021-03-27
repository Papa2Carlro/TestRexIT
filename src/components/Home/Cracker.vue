<template>
    <section class="cracker">
        <div class="cracker__content">
            <div class="container">
                <div class="cracker__content-title">About Cracker</div>
            </div>

            <div class="cracker__content-info">
                <blockquote class="cracker__content-blockquote">
                <span class="cracker__content-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat, sunt in culpa qui officia deserunt mollit anim id est
                    laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum
                    quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.
                </span>
                </blockquote>

                <img src="../../assets/bg/ovs.jpg" alt="" class="cracker__content-img">
            </div>

            <div class="container">
                <div class="cracker__content-logo">Cracker</div>
            </div>

            <div class="cracker__constructor container">
                <div class="cracker__constructor-title">Cracker constructor</div>

                <form @submit.prevent="submitHandler" class="cracker__constructor-form">
                    <div class="cracker__constructor-total">current value: <span>{{ total }}$</span></div>

                    <ul class="cracker__constructor-list">
                        <li class="cracker__constructor-item">
                            <img src="../../assets/semen/semen1.svg" alt="" class="cracker__constructor-icon">

                            <input class="cracker__constructor-body green" type="range" min="0" max="100" step="1"
                                   v-model="option1">

                            <div class="cracker__constructor-price">{{ option1 }}%</div>
                        </li>

                        <li class="cracker__constructor-item">
                            <img src="../../assets/semen/semen2.svg" alt="" class="cracker__constructor-icon">

                            <input class="cracker__constructor-body dark-green" type="range" min="0" max="100" step="1"
                                   v-model="option2">

                            <div class="cracker__constructor-price">{{ option2 }}%</div>
                        </li>

                        <li class="cracker__constructor-item">
                            <img src="../../assets/semen/semen3.svg" alt="" class="cracker__constructor-icon">

                            <input class="cracker__constructor-body puke" type="range" min="0" max="100" step="1"
                                   v-model="option3">

                            <div class="cracker__constructor-price">{{ option3 }}%</div>
                        </li>

                        <li class="cracker__constructor-item">
                            <img src="../../assets/semen/semen4.svg" alt="" class="cracker__constructor-icon">

                            <input disabled class="cracker__constructor-body gray" type="range" min="0" max="100"
                                   step="1" v-model="option4">

                            <div class="cracker__constructor-price">{{ option4 }}%</div>
                        </li>

                        <li class="cracker__constructor-item">
                            <img src="../../assets/semen/semen4.svg" alt="" class="cracker__constructor-icon">

                            <div class="cracker__drop">
                                <div @click="openKg = !openKg" class="cracker__drop-btn" :class="{isOpen: openKg}">
                                    Choose your pack
                                </div>

                                <ul class="cracker__drop-list" :class="{isOpen: openKg}">
                                    <li v-for="item in kgList"
                                        :key="item.value"
                                        @click="kgHandler(item.value)"
                                        class="cracker__drop-item"
                                        :class="{active: kg === item.value}">{{ item.title }}
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>

                    <button type="submit" class="cracker__constructor-btn">
                        <span>Add to cart</span><img src="../../assets/plus.svg" alt="">
                    </button>
                </form>
            </div>
        </div>

        <div class="cracker__bg">
            <img src="../../assets/bg/bg2.jpg" alt="">
        </div>
    </section>
</template>

<script>
export default {
    name: "Cracker",
    data: () => ({
        option1: 10,
        option2: 36,
        option3: 14,

        kg: 1.4,

        kgList: [
            {
                title: 'small pack',
                value: .8
            },
            {
                title: 'medium pack',
                value: 1.4
            },
            {
                title: 'large pack',
                value: 2
            }
        ],
        openKg: false,

        price: {
            option1: 20,
            option2: 15,
            option3: 10,
            option4: 5,

            kg: 34
        },
    }),
    computed: {
        option4() {
            const result = 100 - this.option1 - this.option2 - this.option3
            return result > 0 ? result : 0
        },
        total() {
            const list = ['option1', 'option2', 'option3', 'option4']
            let result = 0

            list.map(variable => result += (this.price[variable] / 100) * this[variable])
            result += this.price.kg * this.kg

            return result.toFixed(2)
        }
    },
    watch: {
        option1() {
            this.option1 = this.option4 === 0
              ? 100 - this.option2 - this.option3
              : this.option1
        },
        option2() {
            this.option2 = this.option4 === 0
              ? 100 - this.option1 - this.option3
              : this.option2
        },
        option3() {
            this.option3 = this.option4 === 0
              ? 100 - this.option1 - this.option2
              : this.option3
        }
    },
    methods: {
        submitHandler() {
            const data = {
                option1: this.option1,
                option2: this.option2,
                option3: this.option3,
                option4: this.option4,

                kg: this.kg
            }

            this.$store.commit('addProduct', data)
        },

        kgHandler(value) {
            this.kg = value
            this.openKg = false
        }
    }
}
</script>