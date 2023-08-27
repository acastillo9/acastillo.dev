<script>
	import {
		siJavascript,
		siHtml5,
		siCss3,
		siTypescript,
		siVuedotjs,
		siAngular,
		siReact,
		siSvelte,
		siVite,
		siSass,
		siJest,
		siCypress,
		siNodedotjs,
		siNestjs
	} from 'simple-icons';
	import Skill from './Skill.svelte';

	const skills = [
		{
			icon: siHtml5,
			name: 'HTML'
		},
		{
			icon: siCss3,
			name: 'CSS'
		},
		{
			icon: siJavascript,
			name: 'Javascript'
		},
		{
			icon: siSass,
			name: 'Sass'
		},
		{
			icon: siTypescript,
			name: 'Typescript'
		},
		{
			icon: siVuedotjs,
			name: 'Vue.js'
		},
		{
			icon: siAngular,
			name: 'Angular'
		},
		{
			icon: siReact,
			name: 'React'
		},
		{
			icon: siSvelte,
			name: 'Svelte'
		},
		{
			icon: siVite,
			name: 'Vite'
		},
		{
			icon: siJest,
			name: 'Jest'
		},
		{
			icon: siCypress,
			name: 'Cypress'
		},
		{
			icon: siNodedotjs,
			name: 'Node.js'
		},
		{
			icon: siNestjs,
			name: 'NestJS'
		}
	];
</script>

<h2 class="font-monserrat text-3xl mb-8">My Skills</h2>
<ul class="flex gap-14 flex-wrap">
	{#each skills as { icon, name }}
		<li>
			<Skill {icon} {name} />
		</li>
	{/each}
</ul>
