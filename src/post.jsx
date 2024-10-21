export default function Post ({post}){
    console.log(post)
    const {title, body} = post;

    return (
        <div className="box" style={{padding: '20px',}}>
            <h3>Title: {title}</h3>
            <h5>Body: {body}</h5>
        </div>
    )
}