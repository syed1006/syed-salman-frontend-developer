import './PopUp.css';

const PopUp = ({data, popRef})=>{
    const {capsule_serial, capsule_id, details, landings, missions, original_launch, original_launch_unix, reuse_count, status, type} = data;

    const handleClick = ()=>{
        popRef.current.style = '-300vh';
    }
    return(
        <div className="pop-up">
            <h2>Capsule Details</h2>
            <ul>
                <li><span>Serial</span>: {capsule_serial}</li>
                <li><span>Id</span>: {capsule_id}</li>
                <li><span>Details</span>: {details}</li>
                <li><span>Landings</span>: {landings}</li>
                {
                    missions.length > 0 && <li><span>Missions</span>: {JSON.stringify(missions)}</li>
                }
                <li><span>Original Launch</span>: {original_launch ? original_launch : 'no data'}</li>
                <li><span>Original Launch Unix</span>: {original_launch_unix ? original_launch_unix : 'no data'}</li>
                <li><span>Reuse Count</span>: {reuse_count}</li>
                <li><span>Status</span>: {status}</li>
                <li><span>Type</span>: {type}</li>
            </ul>
            <button className="btn" onClick={handleClick}>Close</button>
        </div>
    )
}
export default PopUp