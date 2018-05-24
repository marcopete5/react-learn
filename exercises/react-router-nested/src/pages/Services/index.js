import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import Service from "../Service";
import services from "../../shared/services.json";
import "./index.css";

function Services(props) {
    return (
        <div>
            <h1>Services</h1>
            <div className="service-links">
                {services.map((service, i) => {
                    let { name } = service;
                    return <Link key={i} to={`/services/${i}`}>{name}</Link>
                })}

            </div>
            <Switch>
                <Route path="/services/:index" component={Service}></Route>
            </Switch>
        </div>
    )
}

export default Services;
