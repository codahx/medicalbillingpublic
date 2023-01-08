<template>
	<q-layout view="hHh Lpr fFf">
		<q-header elevated class="bg-primary text-white">
			<q-toolbar>
				<q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

				<q-toolbar-title>
					<q-avatar>
						<img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
					</q-avatar>
					Dashboard
				</q-toolbar-title>
			</q-toolbar>
		</q-header>

		<q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
			<br />
			<q-checkbox v-model="selection" val="task1" label="task1" color="teal" />
		</q-drawer>

		<q-page-container align="center">
			<h5 align="center">Upload Your File Here</h5>
			<div class="q-pa-md" style="max-width: 300px">
				<q-uploader url="http://127.0.0.1:5000/upload" />
			</div>
		</q-page-container>
		<q-footer elevated class="bg-grey-8 text-white">
			<q-toolbar>
				<q-toolbar-title>
					<q-avatar>
						<img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
					</q-avatar>
					<div>Title</div>
				</q-toolbar-title>
			</q-toolbar>
		</q-footer>
	</q-layout>
</template>

<script>
	import { ref } from 'vue';

	export default {
		setup() {
			const leftDrawerOpen = ref(false);

			return {
				leftDrawerOpen,
				toggleLeftDrawer() {
					leftDrawerOpen.value = !leftDrawerOpen.value;
				},
			};
		},
	};
</script>
