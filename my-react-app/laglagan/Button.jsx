function Button(){
    
    // let count = 0;

    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} tang ina mo naka click ka na ng ${count} ha`);   
    //     } else {
    //         console.log(`tama na ${name} gugulpihin kita`);
    //     }
    // }

    const handleClick = (e) => e.target.value;
  

    return(<button className="border-blue-600 bg-blue-400 m-3 p-[8px] border-2 rounded-xl font-bold" onClick={(e) => handleClick(e)}>Click me po</button>);
}

export default Button