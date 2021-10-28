import React from "react";
import "./Form.css";

interface IFormProps {
  onItemSubmit: (text: string) => void;
}

interface IFormState {
  text: string;
}

class Form extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);

    this.state = {
      text: ""
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  onSubmit(evt: { target: any; preventDefault: () => void; }) {
    evt.preventDefault();
    evt.target.reset();

    this.props.onItemSubmit(this.state.text);
    
    this.setState({
      text: ""
    });
  }

  onTextChange(evt: { target: { value: any; } }) {
    this.setState({
      text: evt.target.value
    });
  }

  render() {
    return (
      <form className="form app__form" onSubmit={ this.onSubmit }>
        <input className="form__input" type="text"
               placeholder="New item"
               onChange={this.onTextChange}/>
        <button className="form__button" type="submit">Add</button>
      </form>
    );
  }
}

export default Form;
