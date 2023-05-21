import './Card.css';

const Card = ({capsule, setPop, popRef})=>{
    const {capsule_serial, type, status} = capsule
    const handleClick = ()=>{
        setPop(capsule);
        popRef.current.style.top = '0px';
    }

    return(
        <div className="card" onClick={handleClick}>
            <h3>{type}</h3>
            <small>{capsule_serial}</small>
            <span className={`status ${status}`}>{status}</span>
        </div>
    )
}
export default Card;