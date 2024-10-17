import { Link } from "react-router-dom";

const BASE_CLASS = "header"

const Header = () => {
    return (
        <header className={BASE_CLASS}>
            <div className={BASE_CLASS + "__title"}>
                <Link to=''>Podcaster</Link>
            </div>
        </header>
    )
}

export default Header;