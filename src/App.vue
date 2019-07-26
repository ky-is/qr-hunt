<template>
<div id="app">
	<div id="nav" class="h-12">
		<router-link to="/">
			<img alt="QR Scavenger Logo" src="@/assets/images/logo.png" class="inline w-12">
			<span class="font-bold text-lg">QR Scavenger</span>
		</router-link>
	</div>
	<router-view />
</div>
</template>

<style lang="postcss">
@import 'assets/styles/tailwind.postcss';

#app {
	@apply font-sans antialiased text-gray-900;
}

#nav a {
	@apply text-purple-900;
}

#nav a.router-link-exact-active {
	@apply text-gray-900;
}
</style>
