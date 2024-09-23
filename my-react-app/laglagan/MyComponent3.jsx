import React, {useState} from 'react';

function MyComponent() {
    const [cars, setCar] = useState([]);
    const [carDate, setCarDate] = useState(new Date().getFullYear());
    const [carMaker, setCarMaker] = useState("");
    const [carModel, setModel] = useState("");

    function handleNewCar() {
        const newCar = {year: carDate,
                        maker: carMaker,
                        model: carModel}

        setCar(c => [...c, newCar])

        setCarDate(new Date().getFullYear());
        setCarMaker("");
        setModel("");
    }

    function handleRemoveCar(index) {
        setCar(c => c.filter((_, i) => i !== index))
    }

    function handleCarDate(e) {
        setCarDate(e.target.value);
    }

    function handleCarMaker(e) {
        setCarMaker(e.target.value);
    }

    function handleCarModel(e) {
        setModel(e.target.value);
    }

    return(<>
            <div>
                <h1 className='text-2xl m-1 font-bold'>My Cars:</h1>
                <ul>
                    {cars.map((car, index) => 
                    <li className='p-1 m-1 font-semibold' key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.maker} {car.model}
                    </li>
                    )}
                </ul>
                <input className='border-black border-2 rounded-lg m-1 p-1' type="number" value={carDate} onChange={handleCarDate}/><br />
                <input className='m-1 border-black border-2 rounded-lg p-1' type="text" value={carMaker} onChange={handleCarMaker} placeholder='Enter Car manifacturer'/><br />
                <input className='m-1 border-black border-2 rounded-lg p-1' type="text" value={carModel} onChange={handleCarModel} placeholder='Enter Car model'/><br />
                <button className='text-[12px] border-blue-600 border-2 bg-blue-500 p-1 rounded-md text-white m-1' onClick={handleNewCar}>Add New Car</button>
           </div>
           </>);
    
}

export default MyComponent