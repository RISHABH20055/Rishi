function AddTodo(){
 return ( <div>
    <div className="row Kg-row">
    <div className="col-6">
      <input type="text"></input>
    </div>
    <div className="col-4">
<input type="date"></input>
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-success Kg-button">Add</button>
    </div>
  </div>
 </div>);
}
export default AddTodo;