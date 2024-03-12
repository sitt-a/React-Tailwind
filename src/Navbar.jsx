export default function Navbar() {

    return (
        <nav className="navbar flex justify-between mx-64 my-4 ">
            <h1 className="text-red-700 text-4xl">Dojo blog</h1>
            <div className="links">
                <a className="mr-6 text-xl" href="/">home</a>
                <a className="text-xl" href="/create">new blog</a>
                <a className="text-xl" href="/support">support</a>
            </div>

        </nav>


    )
}
