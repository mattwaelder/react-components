
class App extends React.Component {
  constructor(props) {
    super(props)
    this.onListItemClick = this.onListItemClick.bind(this);
    this.state = {list: ['cucumber', 'butter', 'romaine', 'onions']};
  }


  onListItemClick (e) {
    alert(`${e.target.innerHTML} selected`);
  }

  render() {
    return(
    <div>
      <h1>My Grocery List</h1>
      <GroceryList items = {this.state.list}
        onListItemClick = {(e) => {this.onListItemClick(e)}}
      />
    </div>
    )};
}

/////////////////////////////////////////////////////

var GroceryList = (props) => {

  let groceries = [];

  props.items.map((item) => {
    groceries.push(

        <GroceryListItem
        name = {item}
        onListItemClick = {(e) => props.onListItemClick(e)}
        item = {item} />)
  })

  return(
    <ul className="list">
      {groceries}
    </ul>
  );
}

////////////////////////////////////////////////////

var GroceryListItem = (props) => {

  return(
      <li className="list_item" onClick = {(e) => props.onListItemClick(e)}>{props.item}</li>
  );
}


ReactDOM.render(<App />, document.getElementById('app'));