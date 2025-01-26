const Card = ({ img, alt, desc, name }) => {
  return (
    <div className="box">
      <div className="box-head">
        <img src={img} alt={alt} />
        <h3>Hi! My {name}</h3>
        <span className="friends-category"> {desc} </span>
      </div>
      <button className="box-bottom">
        <a href="#" className="btn">
          Adopt me!
        </a>
      </button>
    </div>
  );
};

export default Card;
