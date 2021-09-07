import React, { useEffect, useState, useContext } from "react"
import { Row, Col } from 'react-bootstrap';
import  UsernameContext from "../../context/UsernameContext";
import './custom-styles.css';

function UserDataCard2(){
    const [userurl, setUserUrl] = useState("");
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [twitter, setTwittername]= useState("");
    const [company, setCompany]= useState("");
    const [blog, setBlog]= useState("");
    const [location, setLocation]= useState("");
    const [email, setEmail]= useState("");
    const [htmlurl, setHtmlurl]= useState("");

    const [error, setError] = useState("");
    const { username } = useContext(UsernameContext);
    useEffect(() => {
        // const url = "https://api.github.com/users/"+username;
        const url = "https://api.github.com/users/Rishit-dagli";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log('data--',data);
                setUserUrl(data.avatar_url);
                setName(data.name);
                setBio(data.bio);
                setTwittername(data.twitter_username);      
                setCompany(data.company);
                setBlog(data.blog);
                setLocation(data.location);
                setHtmlurl(data.html_url);
                if(data.email == ''){
                    return setEmail(data.url);
                }
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, [username]);
    return(

        <Row>
            <Col md={12}>               
                <Row>
                    <Col className="d-flex align-items-center">
                    <div className="custom-user-card">                    
                        <div className="img-block">
                            <img src={userurl} alt="" />
                        </div>
                        <div className="content-block">
                        <h4 className="title">{name}</h4>
                        <label className="sub-title">{company}</label>
                        <p className="desp">{bio}</p>                        
                        <label className="location-info">{location}</label>
                        <div className="d-flex mt-4">
                            <div className="icon-bg d-flex align-items-center justify-content-center">
                               <a href={htmlurl} target="_blank">
                                <i className={`fas bi-envelope`} />
                            </a>
                            </div>
                            <div className="icon-bg d-flex align-items-center justify-content-center">
                            <a href={htmlurl} target="_blank">
                                <i className={`fas bi-twitter`} />
                                </a>
                            </div>                       
                            <div className="icon-bg d-flex align-items-center justify-content-center">
                            <a href={blog} target="_blank">
                                <i className={`fas bi-link`} />
                                </a>
                            </div>                                               
                        </div>                       
                        </div>
                    </div>          
                    </Col></Row> 
                
            </Col>
        </Row>
       
    )
}

export default UserDataCard2;