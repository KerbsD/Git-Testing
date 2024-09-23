import PropTypes from 'prop-types'

function List(props){

    const itemCategory = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id} className="p-1 border-blue-400      border-2">
                                           {item.name}: &nbsp;
                                           <b>{item.calories}</b></li>)

    return( <>
                <div className="max-w-[500px] mx-auto">
                    <h3 className="mx-7 mt-5 font-bold text-2xl border-black border-2 p-3 text-center">{itemCategory}</h3>
                    <ol className="mx-7 text-center">{listItems}</ol>   
                </div>
            </>);
}

List.proptypes = {
    category: PropTypes.string,
}

List.defaultProps = {
    category: "List of Items",
    items: []  
}

export default List