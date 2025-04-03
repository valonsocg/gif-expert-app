import GiftItem from "./GiftItem";
import useFetchGifs from "../hooks/useFetchGifs";
import PropTypes from "prop-types";

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Loading...</h2>}
      <ol className="card-grid">
        {images.map((image) => (
          <GiftItem key={image.id} {...image} />
        ))}
      </ol>
    </>
  );
};

export default GifGrid;

GifGrid.propTypes = {
  category: PropTypes.func.isRequired,
};
