import List from './List.js'

function App() {
  const fruits = 
    [{id: 1, name: "apple", calories: 20},
    {id: 2, name: "orange", calories: 210},
    {id: 3, name: "banana", calories: 30},
    {id: 4, name: "coconut", calories: 140},
    {id: 5, name: "pineapple", calories: 120},];

    const vegetables = 
    [{id: 6, name: "potatoes", calories: 20},
    {id: 7, name: "celery", calories: 210},
    {id: 8, name: "carrots", calories: 30},
    {id: 9, name: "corn", calories: 140},
    {id: 10, name: "broccoli", calories: 120},];

  return(<>
  {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}
  {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/>: null}
</>);
}
export default App
