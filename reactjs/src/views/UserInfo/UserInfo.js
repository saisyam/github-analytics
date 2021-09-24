import React, { useEffect, useState, useContext } from "react"
import UsernameContext from "../../context/UsernameContext";
import UserDetails from "../../components/UserDetails";
import './styles.css';

function UserInfo() {
    const [avatar, setAvatar] = useState("");
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [twitter, setTwittername] = useState("");
    const [company, setCompany] = useState("");
    const [website, setWebsite] = useState("");
    const [location, setLocation] = useState("");
    const [email, setEmail] = useState("");

    const [error, setError] = useState("");
    const { username } = useContext(UsernameContext);
    useEffect(() => {
        const url = "https://api.github.com/users/" + username;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data)
                setAvatar(data.avatar_url);
                setName(data.name);
                setBio(data.bio);
                setTwittername(data.twitter_username);
                setCompany(data.company);
                setWebsite(data.blog);
                setLocation(data.location);
                setEmail(data.email);
                
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, [username]);
    return (
        <UserDetails
            avatar={avatar}
            name={name}
            company={company}
            bio={bio}
            location={location}
            email={email}
            twitter={"https://twitter.com/" + twitter}
            website={website}>
        </UserDetails>

    )
}

export default UserInfo;