import React, { useEffect, useState } from "react"
import { Row, Col } from 'react-bootstrap';
import Datacard from "../../components/Datacard";

function BasicDetails(props) {
    const [repos, setRepos] = useState("");
    const [gists, setGists] = useState("");
    const [followers, setFollowers] = useState("");
    const [following, setFollowing] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const url = "https://api.github.com/users/saisyam";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setRepos(data.public_repos);
                setGists(data.public_gists);
                setFollowers(data.followers);
                setFollowing(data.following);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, []);

    return (
        <Row>
            <Col>
                <Datacard
                    color="cherry"
                    title="Repos"
                    text={repos}
                    icon="layers"
                />
            </Col>
            <Col>
                <Datacard
                    color="blue-dark"
                    title="Gists"
                    text={gists}
                    icon="journals"
                />
            </Col>
            <Col>   
                <Datacard
                    color="green-dark"
                    title="Followers"
                    text={followers}
                    icon="person-plus"
                />
            </Col>
            <Col>
                <Datacard
                    color="orange-dark"
                    title="Stars"
                    text={following}
                    icon="star"
                />
            </Col>
        </Row>
    );
};

export default BasicDetails;