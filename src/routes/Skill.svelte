<script>
	import SiIcon from '$lib/Icons/SiIcon/index.svelte';

	/** @type {import("simple-icons/types").SimpleIcon} */
  export let icon;
  /** @type number */
  export let size = 100;
  /** @type string */
  export let name;
</script>

<div class="flex flex-col items-center">
	<SiIcon src={icon} size={size} />
	<span class="mt-2">{name}</span>
</div>
