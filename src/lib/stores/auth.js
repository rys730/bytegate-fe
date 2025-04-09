import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const initialValue = browser ? localStorage.getItem('isLogin') === 'true' : false;

export const isLogin = writable(initialValue);

if (browser) {
  isLogin.subscribe((val) => {
    localStorage.setItem('isLogin', val.toString());
  });
}

export const showLogoutModal = writable(false)