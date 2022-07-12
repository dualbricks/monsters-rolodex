import { Component } from "react";
import './card.styles.css'
const Card = ({monster}) => (
    <div className="card-container" key={monster.id}>
        <img
            alt={`monster ${monster.name}`}
            src={`http://robohash.org/${monster.id}?set=set3%size=180x180`}
        />
        <h2>{monster.name}</h2>
        <p>{monster.email}</p>
    </div>
)

export default Card