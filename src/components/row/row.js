import './row.css';
import { Component } from 'react';

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlight: false
    }
  }

  onHighlight = () => {
    this.setState(({ highlight }) => ({
      highlight: !highlight
    }));
  }

  render() {
    const { name, salary, increase, promote, deleteItem, onIncrease } = this.props;
    const { highlight } = this.state;

    let classNames = "row";
    if (increase) {
      classNames += " increase";
    }

    if (promote) {
      classNames += " highlight";
    }

    return (
      <div className={classNames}>
        <span className='name' onClick={onIncrease} data-toggle="promote">{name}</span>
        <span className='cost'>{salary + '$'}</span>
        <div className="icons">
          <i className="fa-solid fa-cookie" onClick={onIncrease} data-toggle="increase"></i>
          <i className="fa-solid fa-trash" onClick={deleteItem}></i>
          <i className="fa-solid fa-star"></i>
        </div>
      </div>
    );
  }
}

export default Row;