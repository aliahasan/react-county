import TodoItem from "./TodoItem";
import useFetch from "./HOOKS/useFetch";
const loadingMeassage = <p>todo is loading</p>;

const DataFetch = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const { data, loading, error } = useFetch(url);

  return (
    <div>
      {error && <p>{error}</p>}
      {loading && loadingMeassage}
      <h1>Total Data {data.length}</h1>
      {data &&
        data?.map((item) => <TodoItem key={item.id} todo={item}></TodoItem>)}
    </div>
  );
};

export default DataFetch;
