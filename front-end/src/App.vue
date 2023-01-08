<template>
	<Navbar />
	<router-view />
	<MainFooter />
</template>

<script setup>
	import Navbar from './components/Navbar.vue';
	import MainFooter from './components/MainFooter.vue';
</script>
