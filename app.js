// TODO
//stateless function
// var GroceryList = (props) => (
// <div>
//     <h3>GroceryList: </h3>
//     <GroceryListItem items={['Butter','Milk','Cheese','Eggs']}/>
// </div>
// );

class GroceryList extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <h3>GroceryList: </h3>
                <GroceryListItem items={['Bread','Milk','Cheese','Eggs']}/>
            </div>
        );
    }
}

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