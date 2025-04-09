<script>
    import { createEventDispatcher } from "svelte";

    export let message = 'Are you sure?';
    const dispatch = createEventDispatcher();
</script>
  
<div class="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
        <p class="text-lg mb-4">{message}</p>
        <div class="flex justify-end gap-4">
            <button
                on:click={()=>dispatch('cancel')}
                class="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition"
            >
                Cancel
            </button>
            <button
                on:click={()=>dispatch('confirm')}
                class="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition"
            >
                Log out
            </button>
        </div>
    </div>
</div>