saveData()

function MyComponent(){
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    const handleFoodInput = () => {
        const newFood = document.getElementById("inputFood").value
        document.getElementById("inputFood").value = ""

        setFoods(f => [...f, newFood])
    }

    const handleRemoveFood = (index) => {
        setFoods(foods.filter((_, i) => i !== index))
    }

    return(
        <div>
            <h1 className='text-5xl'>List of Fruits</h1>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={()=> handleRemoveFood(index)}>
                                                {food}
                                            </li>)}
            </ul>
            <input type="text" id='inputFood'/>
            <button onClick={handleFoodInput}>Add Fruit</button>
        </div>
    );
}

export default MyComponent