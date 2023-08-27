<script>
	import { ICON_DEFAULT_COLOR, ICON_DEFAULT_SIZE } from '../../utils/constants';

	/** @type {import("@fortawesome/fontawesome-common-types/index").IconDefinition} */
	export let src;
	/** @type number */
	export let size = ICON_DEFAULT_SIZE;
	/** @type string */
	export let color = ICON_DEFAULT_COLOR;
	/** @type string */
	export let title = '';

	const viewBox = `0 0 ${src.icon[0]} ${src.icon[1]}`;
	const svgPathData = typeof src.icon[4] === 'string' ? src.icon[4] : '';
</script>

<svg role="img" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={viewBox} fill={color}>
	<title>{title}</title>
	<path d={svgPathData} />
</svg>
