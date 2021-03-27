<template>
    <div class="basked" :class="{'basked--open': open}">
        <div @click="closeHandler" class="basked__close"><span></span><span></span></div>

        <ul v-if="cards.length > 0" class="basked__thumb">
            <li class="basked__thumb-item">
                <img src="../assets/semen/semen1-b.svg" alt="">
            </li>

            <li class="basked__thumb-item">
                <img src="../assets/semen/semen2-b.svg" alt="">
            </li>

            <li class="basked__thumb-item">
                <img src="../assets/semen/semen3-b.svg" alt="">
            </li>

            <li class="basked__thumb-item">
                <img src="../assets/semen/semen4-b.svg" alt="">
            </li>
        </ul>

        <ul v-if="cards.length > 0" class="basked__list">
            <li v-for="(card, index) in cards" :key="index" class="basked__list-item">

                <img src="../assets/sem.svg" alt="" class="basked__list-thumb">

                <div class="basked__list-info">
                    <div class="basked__list-options">{{ card.option1 }}%</div>
                    <div class="basked__list-options">{{ card.option2 }}%</div>
                    <div class="basked__list-options">{{ card.option3 }}%</div>
                    <div class="basked__list-options basked__list-options--small">{{ card.option4 }}%</div>

                    <div class="basked__list-kg">{{ card.kg }} kg</div>

                    <div class="basked__list-big">{{ total(index) }}$</div>
                </div>

                <div @click="deleteHandler(index)" class="basked__list-delete">
                    <span></span><span></span>
                </div>
            </li>
        </ul>

        <span v-else class="basked__empty">Empty Card!</span>
    </div>
</template>

<script>
export default {
    props: ['cards', 'open', 'total', 'price'],
    methods: {
        deleteHandler(index) {
            this.$store.commit('deleteProduct', index)
        },

        closeHandler() {
            this.$emit('close')
        },

        total(index) {
            const list = ['option1', 'option2', 'option3', 'option4']
            let result = 0
            const data = this.cards[index]

            list.map(variable => result += (this.price[variable] / 100) * data[variable])
            result += this.price.kg * data.kg

            return result.toFixed(2)
        }
    }
}
</script>