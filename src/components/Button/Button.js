import './button.scss';

function Button(props) {
  return (<button disabled={props.disabled}>
    {props.Name}
    </button>)
}

export default Button;