<script>
  import {
    Page,
    Block,
    Button,
  } from 'konsta/svelte';
  import { goto } from '$app/navigation';
	import { base } from "$app/paths";
</script>
  
<Page> 
  <Block class="flex flex-col space-x-4 h-[calc(100vh-74px)]">
    <Block class="flex w-full h-full flex-col items-center content-center self-center justify-center">
      <div class="flex flex-col w-full space-y-12">
        <Button large align-middle class="flex flex-auto"
          onClick={()=>goto(base + "/play")}>Start
        </Button>
        <Button large align-middle class="flex flex-auto" 
          onClick={()=>goto(base + "/train")}>Train
        </Button>
      </div>
    </Block>
  </Block>
</Page>