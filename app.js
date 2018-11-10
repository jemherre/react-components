// TODO
//stateless function
// var GroceryList = (props) => (
// <div>
//     <h3>GroceryList: </h3>
//     <GroceryListItem items={['Butter','Milk','Cheese','Eggs']}/>
// </div>
// );

//class component
class GroceryList extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            done: false
        };
    }

    onListItemHover() {
        this.setState({
          done: true
        });
    }

    offListItemHover() {
        this.setState({
          done: false
        });
    }

    render() {
        // Making the style conditional on our `state` lets us 
        // // update it based on user interactions.
        // font-weight:bold;
        var style = {
            fontWeight: this.state.done ? 'bold' : 'normal'
            // textDecoration: this.state.done ? 'line-through' : 'none'
        };
        return (
            <li style={style} onMouseOver={this.onListItemHover.bind(this)} onMouseOut={this.offListItemHover.bind(this)}>Eggs</li>
          );
    }
}

// var GroceryListItem = (props) => (
//     <ul> 
        
//         <li>{props.items[1]}</li>
//         <li>{props.items[2]}</li>
//         <li>{props.items[3]}</li>
//     </ul> 
// );

ReactDOM.render(
    <GroceryList />,
    document.getElementById('app')
);