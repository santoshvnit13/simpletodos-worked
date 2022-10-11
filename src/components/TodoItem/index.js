// Write your code here
const TodoItem = props => {
  const {list, deleteItem} = props
  const {title, id} = list
  const delteFunction = () => {
    deleteItem(id)
  }
  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={delteFunction}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
