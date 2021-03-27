<template>
    <main class="main">
        <First />

        <Cracker />
    </main>
</template>

<script>
import First from "@/components/Home/First"
import Cracker from "@/components/Home/Cracker"

export default {
    name: 'Home',
    components: {Cracker, First}
}
</script>
