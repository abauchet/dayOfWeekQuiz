<script>
    import "../app.css";
    import { App, Toolbar, Link, Navbar, NavbarBackLink } from 'konsta/svelte';
	import { base } from "$app/paths";
    import { pwaInfo } from 'virtual:pwa-info';
    import { onMount } from 'svelte'

    onMount(async () => {
        if (pwaInfo) {
        const { registerSW } = await import('virtual:pwa-register')
        registerSW({
            immediate: true,
            onRegistered(r) {
            // uncomment following code if you want check for updates
            // r && setInterval(() => {
            //    console.log('Checking for sw update')
            //    r.update()
            // }, 20000 /* 20s for testing purposes */)
            console.log(`SW Registered: ${r}`)
            },
            onRegisterError(error) {
            console.log('SW registration error', error)
            }
        })
        }
    })
  
    $: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : ''
</script>

<svelte:head>
    {@html webManifest}
</svelte:head>

<App safeAreas  theme="ios">
    <Navbar title="Day of Week Quiz"></Navbar>
    <slot />
    <Toolbar class={'left-0 bottom-0 fixed w-full'}>
        <Link toolbar href="{base}/">Play</Link>
        <Link toolbar href="{base}/settings">Settings</Link>
        <Link toolbar href="{base}/about">About</Link>
    </Toolbar>
</App>