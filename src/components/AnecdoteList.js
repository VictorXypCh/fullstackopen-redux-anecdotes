import { useSelector, useDispatch } from "react-redux";
import { createAnecdote, voteAnecdote } from "../reducers/anecdoteReducer";
const AnecdotesList = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();
  const vote = (id) => {
    console.log("vote", id);
    dispatch(voteAnecdote(id));
  };
  return (
    <div>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AnecdotesList;
