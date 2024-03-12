import Platform from "./Platform"
import Support from "./Support"

export default function Blog(props) {
    const blogs = props.blog

    return (
        <>
            {
                blogs.map((B) => (
                    <div className="blogs " key={B.id}>
                        <h2>{B.title}</h2>
                        <p>{B.body}</p>
                        <button on>Delete</button>
                    </div>
                ))
            }
            <Platform />
        </>
    )
}