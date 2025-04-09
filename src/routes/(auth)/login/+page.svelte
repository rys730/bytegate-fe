<script>
	import { goto } from '$app/navigation';
    import { isLogin } from '$lib/stores/auth';

    function loginUser() {
      // simulate successful login
      isLogin.set(true);
      goto('/')
    }
</script>

<button on:click={loginUser}>Log in</button>