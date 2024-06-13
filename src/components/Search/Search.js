import { useDispatch, useSelector } from "react-redux";
import { SearchSliceAction } from "../../store/SearchSlice";

const Search = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Data.items);
  const enteredSentence = useSelector(
    (state) => state.SearchData.enteredSentence
  );
  const filteredData = data.filter((item) =>
    item.Name.toLowerCase().includes(enteredSentence.toLowerCase())
  );
  dispatch(SearchSliceAction.DISPLAY(filteredData));
  return <div></div>;
};
export default Search;
