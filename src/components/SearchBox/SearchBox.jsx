import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const onSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <label className={css.search}>
      Find contacts by name
      <input type="text" onChange={onSearch} />
    </label>
  );
};

export default SearchBox;