<template>
<div id="app">
	<header>
		<nav class="content  h-12">
			<router-link to="/" class="flex items-center">
				<img alt="QR Hunt Logo" src="@/assets/images/logo.png" class="inline w-12">
				<h1 class="pl-1 font-bold text-xl">QR Hunt</h1>
			</router-link>
		</nav>
	</header>
	<main>
		<router-view class="content" />
	</main>
</div>
</template>

<style lang="postcss">
@import 'assets/styles/tailwind.postcss';

#app {
	@apply font-sans antialiased text-gray-900;
}

nav a {
	@apply text-purple-900;
	&.router-link-exact-active {
		@apply text-gray-900;
	}
}

.content {
	@apply mx-auto;
	width: 768px;
	max-width: 100%;
}

.inset {
	@apply mx-4;
}
</style>
