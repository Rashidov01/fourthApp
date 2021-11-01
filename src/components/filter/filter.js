function Filter(){
  return(
    <form className="search-form row justify-content-between mx-0 mb-5" action="https://echo.htmlacademy.ru" method="GET">
      <input className="col-sm-6 search-form__input form-control border-0 shadow-sm mb-4 mb-sm-0 py-4" type="search"
        placeholder="Search for a country…" name="q" minlength="1" required />
      <select className="search-form__select col-7 col-sm-4 custom-select border-0 shadow-sm h-auto" name="region">
        <option value="" defaultValue>Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </form>
  );
}

export default Filter;