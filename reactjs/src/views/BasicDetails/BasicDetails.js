import React, { useEffect, useState, useContext } from "react"
import { Row, Col } from 'react-bootstrap';
import Datacard from "../../components/Datacard";
import  UsernameContext from "../../context/UsernameContext";

function BasicDetails() {
    const [repos, setRepos] = useState("");
    const [gists, setGists] = useState("");
    const [followers, setFollowers] = useState("");
    const [following, setFollowing] = useState("");
    const [error, setError] = useState("");

    const { username } = useContext(UsernameContext);

    useEffect(() => {
        const url = "https://api.github.com/users/"+username;

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
    }, [username]);

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
                    title="Following"
                    text={following}
                    icon="person"
                />
            </Col>
        </Row>
    );
};

export default BasicDetails;