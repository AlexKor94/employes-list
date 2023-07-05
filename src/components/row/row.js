import './row.css';
import { Component } from 'react';

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false
    }
  }

  onIncrease = () => {
    this.setState(({ increase }) => ({
      increase: !increase
    }));
  }
  render() {
    const { name, salary } = this.props;
    const { increase } = this.state;

    let classNames = "row";
    if (increase) {
      classNames += " increase";
    }

    return (
      <div className={classNames}>
        <span className='name'>{name}</span>
        <span className='cost'>{salary + '$'}</span>
        <div className="icons">
          <i className="fa-solid fa-cookie" onClick={this.onIncrease}></i>
          <i className="fa-solid fa-trash"></i>
          <i className="fa-solid fa-star"></i>
        </div>
      </div>
    );
  }
}

export default Row;