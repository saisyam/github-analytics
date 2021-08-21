<script>
  import { Container } from 'sveltestrap';
  import Navbar from './components/Navbar/Navbar.svelte';
  import BasicDetails from './Views/BasicDetails/BasicDetails.svelte';
  
</script>

<main>
	<Container fluid style="margin-top:55px;">
		<Navbar></Navbar>
		<BasicDetails username="saisyam"></BasicDetails>
	</Container>
	
</main>