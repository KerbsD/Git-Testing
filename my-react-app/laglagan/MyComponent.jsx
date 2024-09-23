import React, {useState} from 'react';

function MyComponent(){
    const [name, setName] = useState("Guest")
    const [quantity, setQuantity] = useState(0)
    const [comment, setComment] =  useState("Nice!")
    const [payment, setPayment] = useState()
    const [option, setOption] = useState()

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleQuantity = (e) => {
        setQuantity(e.target.value);
    }

    const handleComment = (e) => {
        setComment(e.target.value)
    }

    const handlePayment = (e) => {
        setPayment(e.target.value)
    }

    const handleOption = (e) => {
        setOption(e.target.value)
    }


    return(<div className='m-2'>
                <input value={name} onChange={handleNameChange} className='border-black border-2 rounded-md p-1'/>
                <p><b>Name:</b> {name}</p>

                <input value={quantity} onChange={handleQuantity} type="number" className='border-black border-2 rounded-md p-1'/>
                <p><b>Quantity:</b> {quantity}</p>

                <textarea value={comment} onChange={handleComment} className='border-black border-2 rounded-md p-1'></textarea>
                <p><b>Comment: </b>{comment}</p>

                <div className='flex max-w-2 items-center'>
                    <input className='ml-2' name='payment' type="radio" value="Visa" onChange={handlePayment} id='visa'/>
                    <label htmlFor="visa">Visa</label><br />
                    <input className='ml-2' name='payment' type="radio" value="Master" onChange={handlePayment} id='mstr'/>
                    <label htmlFor="mstr">Master</label><br />
                    <input className='ml-2' name='payment' type="radio" value="BDO" onChange={handlePayment} id='bdo'/>
                    <label htmlFor="bdo">BDO</label>
                </div>

                <p><b>Payment:</b> {payment}</p>

                <select className='border-black border-2 rounded-md p-1' value={option} onChange={handleOption}>
                    <option value="">Select a Delivery Option</option>
                    <option value="Pick Up">Pick up</option>
                    <option value="Cash on Delivery">COD</option>
                </select>

                <p><b>Delivery Option:</b> {option}</p>
           </div>)
}

export default MyComponent;