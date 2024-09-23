import React, {useState} from 'react'

function ColorPicker(){

    const [color, setColor] = useState('#FFFFFF');

    const handleChangeColor = (e) => {
        setColor(e.target.value)
    }

    return(<div className='flex flex-col max-w-[450px] items-center mx-auto p-8'>
                <h1 className='font-bold mb-3 text-3xl'>Color Picker</h1>
                <div className='h-[250px] w-[250px] border-black border-4 p-5 text-center rounded-lg' style={{backgroundColor: color}}>
                    <p>Selected Color: {color}</p>
                </div>
                <label className='font-semibold my-3'>Select a Color:</label>
                <input className='h-5border-4 rounded-sm' type="color" value={color} onChange={handleChangeColor}/>
           </div>);
}

export default ColorPicker