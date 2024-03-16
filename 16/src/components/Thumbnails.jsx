const Thumbnails = ({ images }) => {
    return (
      <div>
        {images.map((e) => (
          <img className="thumbnail" src={e}></img>
        ))}
      </div>
    );
  };
  export default Thumbnails;