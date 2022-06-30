import { Component } from "react";
import './card.styles.css'
class Card extends Component {
    render() {
        const monsters = this.props.monsters
        return (
            <div className="card-list">
                {monsters.map((monster)=>{
                    const {email, id, name} = monster
                    return (
                    <div className="card-container" key={id}>
                        <img alt={`monster ${name}`} src={`https://robohash.org/${name}${id}`} />
                        <h2>{name}</h2>
                        <p>{email}</p>
                    </div>
            )})}
            </div>
        )
    }
}

export default Card