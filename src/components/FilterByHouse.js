import '../styles/components/Filterbyhouse.scss';
function FilterByHouse(props) {
  const housesList = props.allHouses.map((house, i) => (
    <option key={i} value={house}>
      {house}
    </option>
  ));
  const handleInputSelect = (ev) => {
    props.handleInputSelect(ev.target.value);
  };
  return (
    <>
      <label htmlFor="House">Casa:</label>
      <select
        className="form__select"
        name="house"
        id="house"
        value={props.selectedHouse}
        onChange={handleInputSelect}
      >
        {housesList}
        <option value="all">Todas</option>
      </select>
    </>
  );
}

export default FilterByHouse;
