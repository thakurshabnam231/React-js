import './Card.css';

 function Card(props) {
     const classes = 'card' + props.className;
    return (
    <div className='Card'>{props.Children}</div>);
    
}
