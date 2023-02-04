<script>
  import { goto } from '$app/navigation';
	import { base } from "$app/paths";
</script>
  
<div> 
  <div class="flex flex-col space-x-4 h-[calc(100vh-74px)]">
    <div class="flex w-full h-full flex-col items-center content-center self-center justify-center">
      <div class="flex flex-col w-full space-y-12">
        <button class="flex flex-auto"
          on:click={()=>goto(base + "/play")}>Start
        </button>
        <button class="flex flex-auto" 
          on:click={()=>goto(base + "/train")}>Train
        </button>
      </div>
    </div>
  </div>
</div>