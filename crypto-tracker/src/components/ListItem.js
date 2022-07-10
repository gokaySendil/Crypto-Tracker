import "../styles/_ListItem.scss";
const ListItem = (props) => {
  return (
    <li className="list-item">
      <h2>{props.currencyName}</h2>
      <h2>{props.currencyRate}</h2>
    </li>
  );
};

export default ListItem;
