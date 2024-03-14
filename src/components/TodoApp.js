import { useState } from "react"

const TodoApp = () => {
    const [itemList, updateItemList] = useState([
        { title: "Item1", completed: false },
        { title: "Item2", completed: true }
    ]);
    return (
        <div className="todo-wrapper">
            <TodoForm updateItemList={updateItemList} itemList={itemList} />
            <TodoList updateItemList={updateItemList} itemList={itemList} />

        </div>

    )
}

const TodoForm = ({ updateItemList, itemList }) => {
    const [newItemList, setNewItemList] = useState("");
    const handleCHange = (e) => {
        setNewItemList(e.target.value);
    }

    const handleAdditemList = () => {
        updateItemList([...itemList, { title: newItemList, completed: false }]);

    }
    return (
        <div className="todo-form">
            <input placeholder="Add todo..." onChange={handleCHange}></input>
            <button onClick={handleAdditemList}>Add </button>
        </div>
    )
}
 
const TodoList = ({ itemList, updateItemList }) => {
    const handleTodoCompletion = (e) => {
        const currentIdx = Number(e.target.dataset.index);
        const updatedItemList = {...itemList[currentIdx], completed: e.target.checked};
        const updatedItemLists = [...itemList];
        updatedItemLists.splice(currentIdx, 1, updatedItemList);
        updateItemList(updatedItemLists);
    }
    return (
        <div className="todo-list">
            {itemList.length === 0 ? (<span>Please add todo...</span>) : ''}
            {
                itemList.map((itemList, idx) => (
                    <div className="todo-item">
                        <input type="checkbox" checked={itemList.completed} data-index={idx} onChange={handleTodoCompletion} />
                        <span className={itemList.completed? 'strike' : ''}>{itemList.title}</span>
                    </div>
                ))
            }
        </div>
    )
}


export default TodoApp;