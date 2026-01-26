<template>
    <button class="Button-contact" @click="sayHello">
        <text class="title">{{ titel }}</text>
    </button>
</template>

<script setup>
import { ref, reactive } from "vue";
const number = ref(0);

function sayHello() {
    number.value++;
    console.log("Haloo haliim");
}

defineProps({
    titel: String,
});
</script>

<style scoped>
.Button-contact {
    padding: 5px;
    font-size: 15px;
    background: steelblue;
    border-radius: 5px;
    font-size: 5sp;
}
</style>
