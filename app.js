// TODO
var GroceryList = (props) => (
<div>
    <h3>GroceryList: </h3>
    <GroceryListItem items={['Butter','Milk','Cheese','Eggs']}/>
</div>
);

var GroceryListItem = (props) => (
    <ul> 
        <li>{props.items[0]}</li>
        <li>{props.items[1]}</li>
        <li>{props.items[2]}</li>
        <li>{props.items[3]}</li>
    </ul> 
);

ReactDOM.render(
    <GroceryList />,
    document.getElementById('app')
);