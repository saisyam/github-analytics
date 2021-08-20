<script>
    import { Row, Col } from "sveltestrap";
    import Card from "../../components/Card/Card.svelte";

    export let username;
    export let url = "https://api.github.com/users/";
    
    const fetchDetails = (async () => {
        const response = await fetch(url+username);
        return await response.json();
    })();
</script>

{#await fetchDetails}
    <Row>
        <Col>
            <h3>Waiting....</h3>
        </Col>
    </Row>
{:then data}
    <Row>
        <Col>
            <Card
                color="cherry"
                title="Repos"
                text={data.public_repos}
                icon="layers"
            />
        </Col>
        <Col>
            <Card
                color="blue-dark"
                title="Gists"
                text={data.public_gists}
                icon="journals"
            />
        </Col>
        <Col>
            <Card
                color="green-dark"
                title="Followers"
                text={data.followers}
                icon="person-plus"
            />
        </Col>
        <Col>
            <Card
                color="orange-dark"
                title="Stars"
                text={data.following}
                icon="star"
            />
        </Col>
    </Row>
{:catch error}
    <Row>
        <Col>
            <h3>Oops! An error occured</h3>
        </Col>
    </Row>
{/await}
