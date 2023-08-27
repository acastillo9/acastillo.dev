<script>
	import { siGithub, siLinkedin, siX } from 'simple-icons';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import SiIcon from '$lib/Icons/SiIcon/index.svelte';
	import FaIcon from '$lib/Icons/FaIcon/index.svelte';
	import { ICON_DEFAULT_COLOR } from '$lib/utils/constants';
</script>

<div class="container m-auto mb-4">
	<div class="flex justify-center gap-4">
		<a href="https://x.com/acastillodev" target="_blank"><SiIcon src={siX} color={ICON_DEFAULT_COLOR} /></a>
		<a href="https://github.com/acastillo9" target="_blank"><SiIcon src={siGithub} color={ICON_DEFAULT_COLOR} /></a>
		<a href="https://www.linkedin.com/in/acastillo119/" target="_blank"><SiIcon src={siLinkedin} color={ICON_DEFAULT_COLOR} /></a>
		<a href="mailto:info@acastillo.dev"><FaIcon src={faEnvelope} title="Email" /></a>
	</div>
</div>
