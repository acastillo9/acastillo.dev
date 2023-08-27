<script>
	import '../app.css';
	import Nav from './Nav.svelte';
	import Contact from './Contact.svelte';
</script>

<header class="mb-8">
	<Nav />
</header>

<main class="mb-8">
	<slot />
</main>

<footer>
	<Contact />
</footer>
