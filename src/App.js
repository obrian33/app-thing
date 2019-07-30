import React from 'react';
import './App.scss';

export function NavBar() {
  return (
    <div className="row p-2">
      <div className="col">
        THING
      </div>
    </div>
  );
}

export function FormComponent() {
  const formStuff = [
    <div className="form-group col">
      <label for="name">Name</label>
      <input type="name" className="form-control" placeholder="Name"></input>
    </div>
  ];
  return (
    <form>
      <div className="form-row">
        {formStuff.map(x => x)}
        {formStuff.map(x => x)}
        {formStuff.map(x => x)}
      </div>
      <div className="form-row">
        {formStuff.map(x => x)}
        {formStuff.map(x => x)}
        {formStuff.map(x => x)}
      </div>
      <div className="form-row">
        {formStuff.map(x => x)}
        {formStuff.map(x => x)}
        {formStuff.map(x => x)}
      </div>
      <button type="button" className="btn btn-secondary">Other</button>
      <button type="button" className="btn btn-success float-right">Sign in</button>
    </form>
  );
}


function App() {
  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <NavBar></NavBar>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header bg-info">
              Thing 2
            </div>
            <div className="card-body">
              <FormComponent></FormComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
