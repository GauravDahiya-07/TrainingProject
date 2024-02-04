import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Search() {

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => res.data)
            .then(data => {
                setFilterData(data);
            })
            .catch(err => console.log(err));
    }, [])


    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])

    const handleFilter = (value) => {
        const res = filterData.filter(f => f.name.toLowerCase().includes(value))
        setData(res);
        if (value === '') {
            setData([])
        }
    }

    return (
        <div className='search-top'>
            <div className="w-full max-w-md mx-auto mt-8">
                <input
                    type='text'
                    placeholder='Search User..'
                    onChange={e => handleFilter(e.target.value)}
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus: ring-2 focus: ring-blue-500 focus:border-transparent' />
            </div>
            <div className='mt-4'>
                {
                    data.map((d, i) => (
                        <div key={i} className='text-sm font-small '>
                            {d.name}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Search