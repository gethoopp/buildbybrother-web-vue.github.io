<template>
    <header class="AppBar">
        <div class="logo">
            <span class="first-sentence">Haliim</span>
            <span class="second-sentence">Projects</span>
        </div>

        <nav class="navBar">
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Portofolio">Portofolio</a></li>
                <li><a href="#sosial-media">Sosial Media</a></li>
                <li>
                    <button class="Button-contact" @click="sayHello">
                        Contact me
                    </button>
                </li>
            </ul>
        </nav>
    </header>

    <p>
        <button @click="sayHello">Contact me</button>
    </p>
    <h2>{{ number }}</h2>
</template>

<!-- Script javascript -->
<script setup>
import { ref } from "vue";

const number = ref(0);

function sayHello() {
    number.value++;
    console.log("Haloo haliim");
}
</script>

<!-- CSS ELEMENT -->
<style scoped>
.first-sentence {
    color: steelblue;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 600;
}

.second-sentence {
    color: white;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    padding-top: 2px;
}

.AppBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 50px;
    background: transparant;

    color: white;
    position: fixed;

    top: 0;
    left: 0;
    right: 0;
}

.navBar {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.navBar ul {
    list-style-type: none;
    display: inline-flex;
    gap: 20px;
    font-size: 20px;
    font-family: Poppins;
    padding-top: 5px;
    padding-right: 20px;
}

.Button-contact {
    padding: 10px;
    font-size: 15px;
    background: steelblue;
    border-radius: 5px;
}
</style>
