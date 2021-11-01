import ListItem from "../list/list";

function ItemList({country}){
  return(
    <ul className="countries-list list-unstyled row" aria-label="Countries list">
      {country.map((coun) => <ListItem {...coun}/>)}
    </ul>
  );
}

export default ItemList;