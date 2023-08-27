<script>
	import { ICON_DEFAULT_SIZE } from '../../utils/constants';

	/** @type {import("simple-icons/types").SimpleIcon} */
	export let src;
	/** @type number */
	export let size = ICON_DEFAULT_SIZE;
	/** @type string */
	export let color = `#${src.hex}`;

</script>

<svg role="img" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color}>
	<title>{src.title}</title>
	<path d={src.path} />
</svg>
