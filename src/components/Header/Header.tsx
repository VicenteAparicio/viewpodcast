import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

const BASE_CLASS = "header";

const Header = () => {
    return (
        <header className={BASE_CLASS}>
            <div className={BASE_CLASS + "__title"}>
                <Link to=''>Podcaster</Link>
            </div>
            <Loader />
        </header>
    )
}

export default Header;