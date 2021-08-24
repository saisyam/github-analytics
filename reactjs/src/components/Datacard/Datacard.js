import React from 'react';
import './style.css'

function Datacard(props) {
    return (
        <div className={`card l-bg-${props.color}`}>
            <div className="card-statistic-3 p-4">
                <div className="card-icon card-icon-large">
                    <i className={`fas bi-${props.icon}`} />
                </div>
                <div className="mb-4">
                    <h4 className="card-title mb-0">{props.title}</h4>
                </div>
                <div className="row align-items-center mb-2 d-flex">
                    <div className="col-8">
                        <h2 className="d-flex align-items-center mb-0">{props.text}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Datacard;