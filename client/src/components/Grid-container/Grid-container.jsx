import SearchForm from '../SearchForm/SearchForm';
import './Grid-container.css';
const GridContainer = ()=>{
    return(
        <>
        <section className='form-container'>
            <h2>Search Form</h2>
            <SearchForm/>
        </section>
        <section className="cards-container"></section>
        </>
    )
}
export default GridContainer;