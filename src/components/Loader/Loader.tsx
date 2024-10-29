
import { RootState } from "../../Store/store";
import { useSelector } from "react-redux";

const BASE_CLASS = "loader"

const Loader = () => {

    const { isLoading } = useSelector(
        (state: RootState) => state.loader
    );

    return (
        <>
        {isLoading && 
            <div className={BASE_CLASS}>
                <div className={BASE_CLASS + "__inner"}></div>
            </div>
        }
    </>
    )
}

export default Loader;