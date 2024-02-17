import ImgCard from '../ImgCard/index.jsx';
import PropTypes from 'prop-types';

function List(props) {
  return (
      <ul>
        {props.content && props.content.map(item =>
            <li key={item.id}>
              <ImgCard image={item}/>
            </li>
        )}
      </ul>
  );
};

List.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  })).isRequired
};

export default List;
