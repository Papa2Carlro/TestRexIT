<template>
    <header class="header" :class="{fixed}">
        <div class="header__top">
            <div class="header__top-panel container">
                <router-link to="/" class="header__logo" :class="{dark: openCard}">Cracker</router-link>

                <div class="header__actions">
                    <div class="header__actions-len">
                        <img src="../assets/sem-w.svg" alt="">

                        <span v-if="card.length > 0">{{ card.length }}</span>
                    </div>

                    <div class="header__actions-total">
                        <div class="header__actions-title">Total:</div>

                        <div class="header__actions-value">{{ total }}$</div>
                    </div>

                    <div @click="cardHandler" class="header__actions-card">
                        <div class="header__actions-title">Details:</div>

                        <img src="../assets/caret-w.svg" alt="" class="header__actions-caret" :class="{open: openCard}">
                    </div>
                </div>
            </div>
        </div>

        <div class="header__top-basked container">
            <Card :cards="card" :total="total" :open="openCard" :price="price" @close="cardHandler"/>
        </div>

        <div class="header__bottom" :class="{open: mMenu}">
            <nav class="container">
                <ul class="header__bottom-list">
                    <li v-for="(nav, index) in navs" :key="index" class="header__bottom-item"
                        :class="{active: index === 0}">
                        <router-link :to="nav.link" class="header__bottom-link">{{ nav.title }}</router-link>
                    </li>
                </ul>
            </nav>
            
            <div @click="mMenu = !mMenu" class="header__bottom-caret" :class="{active: mMenu}">
                <span></span><span></span>
            </div>
        </div>
    </header>
</template>

<script>
import Card from "@/components/Card"

export default {
    name: 'Header',
    components: {Card},
    props: ['fixed'],
    data: () => ({
        openCard: false,
        mMenu: false,

        price: {
            option1: 20,
            option2: 15,
            option3: 10,
            option4: 5,

            kg: 34
        },
        navs: [
            {
                title: 'Home',
                link: '/'
            },
            {
                title: 'About Us',
                link: '/'
            },
            {
                title: 'Contacts',
                link: '/'
            },
            {
                title: 'Checkout',
                link: '/'
            },
            {
                title: 'Account',
                link: '/'
            }
        ]
    }),
    watch: {
        mMenu() {
            if (this.mMenu) {
                document.body.classList.add('lock')
            } else {
                document.body.classList.remove('lock')
            }
        },
        openCard() {
            if (this.openCard) {
                document.body.classList.add('lock')
            } else {
                document.body.classList.remove('lock')
            }
        }
    },
    computed: {
        card() {
            return this.$store.getters.getCard
        },

        total() {
            const list = ['option1', 'option2', 'option3', 'option4']
            let result = 0

            this.card.map(data => {
                list.map(variable => result += (this.price[variable] / 100) * data[variable])
                result += this.price.kg * data.kg
            })

            return result.toFixed(2)
        }
    },
    methods: {
        cardHandler() {
            this.openCard = !this.openCard
        }
    }
}
</script>