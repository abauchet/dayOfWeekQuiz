<script>
    import {
      Page,
      Navbar,
      Block,
	  List,
	  ListInput,
	  BlockTitle,
    } from 'konsta/svelte';
	import DemoIcon from '../../components/DemoIcon.svelte';
  </script>
  
  <Page>
    <Navbar title="Day of Week Quiz" />
  
    <BlockTitle>Settings</BlockTitle>
    
    <List strongIos insetIos>
      <ListInput   
        label="Start date"
        type="date"
        defaultValue="2014-04-30"
        placeholder="Please choose...">
        <DemoIcon slot="media" />
      </ListInput>

      <ListInput   
        label="End Date"
        type="date"
        defaultValue="2014-04-30"
        placeholder="Please choose...">
        <DemoIcon slot="media" />
      </ListInput>
    </List>
  </Page>