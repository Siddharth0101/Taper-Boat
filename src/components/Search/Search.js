import { useSelector } from "react-redux";

const Search = () => {
  const data = useSelector((state) => state.Data.items);
  const enteredSentence = useSelector((state) => state.Data.enteredSentence);
  console.log(data);
  console.log(enteredSentence);
  return <div></div>;
};
export default Search;
