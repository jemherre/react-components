// TODO
var GroceryList = (props) => (
<ul>
  <li>{props.item1}</li>
  <li>{props.item2}</li>
</ul>
);

var list = {};
list.item1 = "Eggs";
list.item2 = "Milk";
ReactDOM.render(
    <GroceryList item1={list.item1} item2={list.item2}/>,
    document.getElementById('app')
);