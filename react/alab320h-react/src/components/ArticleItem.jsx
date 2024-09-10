/* eslint-disable react/prop-types */

function ArticleItem(props) {
  return (
    <article style={props.style}>
      <h2>{props.title}</h2>
      <h3>Author: {props.author}!</h3>
      <div>
        <img src={props.imgURL} alt={props.title} />
      </div>
      <p>{props.content}</p>
      <button>continues...</button>
    </article>
  );
}

export default ArticleItem;
