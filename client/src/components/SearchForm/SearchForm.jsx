import { useState } from "react";
import './SearchForm.css';

const SearchForm = ({handleSubmit})=>{
    const [data, setData] = useState({
        capsule_id: "",
        status: "",
        details: ""
    })
    return(
        <form className="search-form" onSubmit={()=>handleSubmit(data)}>
            <div className="input-container">
                <select
                    onChange={(e)=>setData({...data, capsule_id: e.target.value})}
                    required
                >   
                    <option value="">Select a option</option>
                    <option value="dragon1">Dragon 1</option>
                    <option value="dragon2">Dragon 2</option>
                </select>
            </div>
            <div className="input-container">
                <select
                    onChange={(e)=>setData({...data, status: e.target.value})}
                    required
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
                    required
                    autoComplete="off"
                />
            </div>
            <div className="input-container">
                <input type="submit" value="Search" />
            </div>
        </form>
    )
}
export default SearchForm;