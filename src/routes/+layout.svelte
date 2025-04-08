<script>
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex flex-col h-screen items-center justify-center bg-neutral-200">
	{@render children()}
</div>
