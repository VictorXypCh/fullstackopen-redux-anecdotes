import { useDispatch } from "react-redux";
import { createAnecdote, voteAnecdote } from "../reducers/anecdoteReducer";
const AnecdotesForm = () => {
  const dispatch = useDispatch();

  const create = (event) => {
    event.preventDefault();
    const content = document.getElementById("content").value;
    console.log("create", content);
    dispatch(createAnecdote(content));
  };
  return (
    <div>
      <h2>create new</h2>
      <form>
        <div>
          <input id="content" />
        </div>
        <button onClick={(e) => create(e)}>create</button>
      </form>
    </div>
  );
};

export default AnecdotesForm;
