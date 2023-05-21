import './Card.css';

const Card = ({capsule, setPop, popRef})=>{
    const {serial, type, status} = capsule
    const handleClick = ()=>{
        setPop(capsule);
        popRef.current.style.top = '0px';
    }

    return(
        <div className="card" onClick={handleClick}>
            <h3>{type}</h3>
            <small>{serial}</small>
            <span className={`status ${status}`}>{status}</span>
        </div>
    )
}
export default Card;