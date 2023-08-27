<script>
	import Profile from './Profile.svelte';
	import Skills from './Skills.svelte';
</script>

<svelte:head>
	<title>Andrés Castillo - Front End Developer</title>
</svelte:head>

<section class="mb-8">
	<div class="container mx-auto p-4">
		<div class="max-w-5xl mx-auto">
			<Profile />
		</div>
	</div>
</section>

<section class="mb-8">
	<div class="container mx-auto p-4">
		<div class="max-w-6xl mx-auto">
			<Skills />
		</div>
	</div>
</section>
