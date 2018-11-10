// TODO
var GroceryList = (props) => (
<div>
    <h3>GroceryList: </h3>
    <ul> 
        <Items item={props.item1}/>
        <Items item={props.item2}/>
    </ul>
</div>
);

var Items = (props) => (
    <li>{props.item}</li>
);

var list = {};
list.item1 = "Eggs";
list.item2 = "Milk";
ReactDOM.render(
    <GroceryList item1={list.item1} item2={list.item2}/>,
    document.getElementById('app')
);