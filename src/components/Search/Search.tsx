import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../Features/filter.slice";
import { RootState } from "../../Store/store";

const BASE_CLASS = "search";

const Search = () => {

    const dispatch = useDispatch();
    const searchFilter = useSelector((state: RootState) => state.filter.searchFilter);
    const filterPodcasts = (event: React.ChangeEvent<HTMLInputElement>) => {
        const filterValue = event.target.value;
                
        dispatch(setSearch(filterValue))

    }

    return (
        <div className={BASE_CLASS}>
            <div className={BASE_CLASS + '__filter'}>
                <div className={BASE_CLASS + '__counter'}>
                    100
                </div>
                <input 
                    type="text"
                    placeholder="Filter podcasts..."
                    value={searchFilter}
                    onChange={filterPodcasts} />
            </div>
        </div>
    )
}

export default Search;