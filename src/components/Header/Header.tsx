const BASE_CLASS = "header"

const Header = () => {
    return (
        <header className={BASE_CLASS}>
            <div className={BASE_CLASS + "__title"}>
                <h1>Podcaster</h1>
            </div>
        </header>
    )
}

export default Header;