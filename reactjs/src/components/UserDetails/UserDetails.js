import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './style.css'

function UserDetails(props) {
    return (
        <Row>
            <Col md={12}>
                <Row>
                    <Col className="d-flex align-items-center">
                        <div className="custom-user-card">
                            <div className="img-block">
                                <img src={props.avatar} alt="" />
                            </div>
                            <div className="content-block">
                                <h4 className="title">{props.name}</h4>
                                <label className="sub-title">{props.company}</label>
                                <p className="desp">{props.bio}</p>
                                <label className="location-info">{props.location}</label>
                                <div className="d-flex mt-4">
                                    <div className="icon-bg d-flex align-items-center justify-content-center">
                                        <a href={props.email} target="_blank">
                                            <i className={`fas bi-envelope`} />
                                        </a>
                                    </div>
                                    <div className="icon-bg d-flex align-items-center justify-content-center">
                                        <a href={props.twitter} target="_blank">
                                            <i className={`fas bi-twitter`} />
                                        </a>
                                    </div>
                                    <div className="icon-bg d-flex align-items-center justify-content-center">
                                        <a href={props.website} target="_blank">
                                            <i className={`fas bi-link`} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default UserDetails;