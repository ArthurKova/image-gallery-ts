import './Button.css';
import { onClick } from '../types/types';

const Button = ({ onLoadMoreClick }: onClick) => {
  const onClick = () => onLoadMoreClick();

  return (
    <div className="Button__box">
      <button type="button" className="Button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default Button;
