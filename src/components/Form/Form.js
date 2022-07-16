
import './form.scss';
function Form(props) {
  return (<form
    onSubmit={props.handleSubmit()}/>);
}

export default Form;