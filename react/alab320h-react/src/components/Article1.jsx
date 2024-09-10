import article1Img from "../assets/blog-image-1.jpg";

function Article1() {
  return (
    <article>
      <h2>Article 1</h2>
      <div>
        <img src={article1Img} alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cumque
        saepe reprehenderit veritatis corrupti fugiat, ex nisi debitis nulla
        natus beatae enim officiis expedita, illo assumenda nam exercitationem
        illum impedit.
      </p>
      <button>continues...</button>
    </article>
  );
}

export default Article1;
