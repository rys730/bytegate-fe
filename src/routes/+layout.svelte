<script>
	import '../app.css';
	import { isLogin, showLogoutModal } from '$lib/stores/auth';
	import ConfirmModal from '$lib/components/modals/ConfirmModal.svelte';
	import { goto } from '$app/navigation';

	let { children } = $props();
	function logout() {
		showLogoutModal.set(true);
	}

	function confirmLogout() {
		showLogoutModal.set(false);
		// Clear session / API call if needed
		isLogin.set(false)
	}

	function cancelLogout() {
		showLogoutModal.set(false);
	}
</script>

{@render children()}
{#if $showLogoutModal}
	<ConfirmModal
		message="Are you sure you want to logout?"
		on:confirm={confirmLogout}
		on:cancel={cancelLogout}
	/>
{/if}