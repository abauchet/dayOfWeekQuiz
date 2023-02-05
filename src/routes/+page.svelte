<script>
  import { goto } from '$app/navigation';
	import { base } from "$app/paths";
</script>
  
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Hello there</h1>
      <p class="py-6">Time for you to train your brain</p>
      <button on:click={()=>goto(base + "/play")} class="btn btn-primary">Play</button>
      <button on:click={()=>goto(base + "/train")} class="btn btn-primary">Train</button>
    </div>
  </div>
</div>
