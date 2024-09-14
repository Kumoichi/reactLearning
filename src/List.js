// list, sort, filter

//fruitsのListを作る
//id, name, caloriesをリストの中に入れる
//fruitsのcaloriesが100以下のlistを取り出す
//一つ一つのlistをプリントする

function List() {
    const fruits = 
    [{id: 1, name: "apple", calories: 20},
    {id: 2, name: "orange", calories: 210},
    {id: 3, name: "banana", calories: 30},
    {id: 4, name: "coconut", calories: 140},
    {id: 5, name: "pineapple", calories: 120},];

    const lowItems = fruits.filter(fruit => fruit.calories >= 100);
    const lowCalFruits = lowItems.map(lowCalFruit => <li key={lowCalFruit.id}>
        {lowCalFruit.name}: &nbsp;
        <b>{lowCalFruit.calories}</b>
    </li>)
}
export default List