import PropTypes from 'prop-types';

function ImgCard(props) {
    return (
      <>
        <img src={props.image.webformatURL} alt={props.image.tags}/>
        <div className="text-bg">
          <p>{props.image.tags}</p>
        </div>
      </>
    )
}

ImgCard.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string
  }).isRequired
}

export default ImgCard;
