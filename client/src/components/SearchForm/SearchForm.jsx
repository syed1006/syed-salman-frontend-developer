import './SearchForm.css';

const SearchForm = ({fetchData, setData, data})=>{

    function handleSubmit(e){
        e.preventDefault()
        setData({...data, search: true, page: 1});
        fetchData();
    }
    return(
        <form className="search-form" onSubmit={handleSubmit}>
            <div className="input-container">
                <select
                    onChange={(e)=>setData({...data, capsule_id: e.target.value})}
                    value={data.capsule_id}
                >   
                    <option value="">Select a option</option>
                    <option value="dragon1">Dragon 1</option>
                    <option value="dragon2">Dragon 2</option>
                </select>
            </div>
            <div className="input-container">
                <select
                    onChange={(e)=>setData({...data, status: e.target.value})}
                    value={data.status}
                >
                    <option value="">Select a option</option>
                    <option value="unknown">Unknown</option>
                    <option value="retired">Retired</option>
                    <option value="active">Active</option>
                    <option value="destroyed">Destroyed</option>
                </select>
            </div>
            <div className="input-container">
                <input type="text"
                    onChange={(e)=>setData({...data, details: e.target.value})}
                    placeholder="Enter any details"
                    autoComplete="off"
                    value={data.details}
                />
            </div>
            <div className="input-container">
                <input type="submit" value="Search" />
            </div>
        </form>
    )
}
export default SearchForm;