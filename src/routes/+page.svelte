<script>
	import { goto } from "$app/navigation";
	import ConfirmModal from "$lib/components/modals/ConfirmModal.svelte";
    import { isLogin, showLogoutModal } from "$lib/stores/auth";
    let url = '';
    let shortUrl = '';
    let error = '';
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            // const response = await fetch('https://bytegate.byteki.dev', {
            //     method: 'GET',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     }
            // });
            // if (!response.ok) {
            //     throw new Error('failed fetch');
            // }
            // const data = await response.json();
            // shortUrl = data.message || 'unknown'
            shortUrl = "bytegate.dev/test"
            // throw new Error('failed shortening')
        } catch (err) {
            error = err.message
        }
    }

    function logout() {
        showLogoutModal.set(true);
    }
</script>

<div class="flex flex-col h-screen">
    <div class="flex p-6 justify-between items-center">
        <header>
            <span class="text-blue-600 text-2xl font-bold">Byte</span><span class="text-2xl font-bold">Gate</span>
        </header>
        {#if !$isLogin}
        <a href="/login" class="bg-blue-600 py-2 px-4 rounded-2xl text-white">Login</a>
        {:else}
        <div>
            <button on:click={()=>goto('/manage')} class="bg-blue-600 py-2 px-4 rounded-2xl text-white mr-4">Manage</button>
            <button class="bg-blue-600 py-2 px-4 rounded-2xl text-white" on:click={logout}>Logout</button>
        </div>
        {/if}
    </div>
    <div class="flex flex-col items-center justify-center bg-neutral-200 h-screen">
        <div class="flex items-center font-bold text-6xl p-4">
            <span class="text-blue-600">Byte</span><span>Gate</span>
        </div>
        <span>Simple URL Shortener. Make your URL byte-sized</span>
        <form class="mt-10" on:submit={handleSubmit}>
            <div>
                <input type="text" placeholder="https://yourlongurl.com" class="rounded-xl" bind:value={url}>
                <button type="submit" class="px-4 border border-gray-500 rounded-xl bg-blue-600 py-2 text-white">Shorten!</button>
            </div>
        </form>
        <div class="mt-4 text-2xl">
            {#if shortUrl}
            <span>Your short URL: </span> <a href="https://blog.byteki.dev" target="_blank" rel="noopener noreferrer" class="text-blue-600">{shortUrl}</a>
            {/if}
            {#if error}
            <span class="text-red-500">Error shortening URL: {error}</span>
            {/if}
        </div>
    </div>
</div>