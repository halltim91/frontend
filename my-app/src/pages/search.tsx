import {useState} from 'react';

export default function Search() {
    const [name, setname] = useState<string>('');

    function onClick(){
        alert(`You pressed me for ${name}!`);
    }
    return (
        <div className='bg-secondary w-100 h-100 pt-5 ps-5'>
            <h1>Search</h1>
            <label className='w-100' htmlFor='nameinput'>Enter the name of a GoT Character to look up</label>
            <input className='input' type='text' id='nameinput' onChange={e => setname(e.target.value)}/>
            <button className="btn text-light bg-dark" id='searchbtn' onClick={onClick}>Search</button>
        </div>
    );
};