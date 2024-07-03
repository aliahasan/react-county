import Card from "./Card/Card";
import ChildComponent from "./ChildComponent";
import Countries from "./Countries/Countries";
import DataFetch from "./DataFetch";
import EventBinding from "./EventBinding";
import Form from "./Form";
import FetchCountry from "./HOOKS/FetchCountry";
import NewTodo from "./NewTodo";
import Data from "./Newfile/data.json";
import State from "./State";
import "./index.css"
import "./App.css"
function App() {
  const handleChildData = (childData) => {
    console.log(childData);
  };

  const handleNewTodo = (newTodo) => {
    console.log(newTodo);
  };

  return (
    <>
      <h1>Hello</h1>
      {Data?.map((item) => (
        <Card key={item.id} item={item}></Card>
      ))}
      <State></State>
      <EventBinding></EventBinding>
      <Form></Form>
      <ChildComponent onChildData={handleChildData}></ChildComponent>
      <NewTodo onHandleNewTodo={handleNewTodo}></NewTodo>
      <DataFetch></DataFetch>
      {/* <Countries></Countries> */}
      <FetchCountry></FetchCountry>
    </>
  );
}

export default App;
