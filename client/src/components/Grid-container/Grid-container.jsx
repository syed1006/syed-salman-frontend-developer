import { useEffect, useRef, useState } from 'react';
import Card from '../Card/Card';
import SearchForm from '../SearchForm/SearchForm';
import './Grid-container.css';
import useAuth from '../../hooks/useAuth';
import PopUp from '../PopUp/PopUp';
const GridContainer = () => {
    const [capsules, setCapsules] = useState([]);
    const [data, setData] = useState({
        page: 1,
        search: false,
        capsule_id: "",
        status: "",
        details: ""
    });

    const [popData, setPop] = useState(null);

    const { auth, setAuth } = useAuth();
    const popUp = useRef();

    async function fetchData(search = true) {
        let url = `http://localhost:5000/capsule?page=${data.page}`
        if (search) {
            const { capsule_id, status, details } = data;
            console.log(search, capsule_id, status, details)
            url += '&search=true';
            if (capsule_id) {
                url += `&capsule_id=${capsule_id}`;
            }

            if (status) {
                url += `&status=${status}`;
            }

            if (details) {
                url += `&details=${details}`;
            }
        }

        try {
            const res = await fetch(url, {
                headers: {
                    authorization: auth.token
                }
            });
            const result = await res.json();
            if (result.status === 'success') {
                setCapsules(result.data);
            } else {
                setCapsules([]);
                setAuth({ ...auth, token: "" });
                localStorage.removeItem('auth-token');
            }
        } catch (error) {
            console.log(error);
            setCapsules([]);
            setAuth({ ...auth, token: "" });
            localStorage.removeItem('auth-token');
        }
    }

    function handlePrev(e) {
        e.target.focus()
        if (data.page > 1) {
            setData({
                ...data, page: data.page - 1
            });
        }
    }

    function handleNext(e) {
        e.target.focus()
        setData({
            ...data, page: data.page + 1
        });
    }

    function handleDiscard() {
        setData({
            page: 1,
            search: false,
            capsule_id: "",
            status: "",
            details: ""
        })
    }

    useEffect(() => {
        fetchData(data.search);

        // eslint-disable-next-line
    }, [data.page, data.search])

    return (
        <>
            <section ref={popUp} className='pop-up-container'>
                {popData !== null && <PopUp data={popData} popRef={popUp} />}
            </section>
            <section className='form-container'>
                <h2>Search Form</h2>
                <SearchForm fetchData={fetchData} data={data} setData={setData} />
                <button className="discard-search btn" onClick={handleDiscard}>Discard Search</button>
            </section>
            <section className="cards-container">
                {
                    capsules?.length === 0 && <h2 className="red">No Capsules to show</h2>
                }
                {
                    capsules.map(capsule => {
                        return (
                            <Card
                                capsule={capsule}
                                setPop={setPop}
                                popRef={popUp}
                                key={capsule.capsule_serial} />
                        )
                    })
                }
            </section>
            <section className="page-btns">
                <button className='btn' onClick={(e) => handlePrev(e)} disabled={data.page === 1 ? true : false} ><i className="fas fa-arrow-left"></i>Prev</button>
                <button className='btn' onClick={(e) => handleNext(e)} disabled={capsules?.length === 0 ? true : false}>Next <i className="fas fa-arrow-right"></i></button>
            </section>
        </>
    )
}
export default GridContainer;