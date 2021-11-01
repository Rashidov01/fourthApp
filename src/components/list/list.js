function ListItem({name, population, region, capital, flag}){
  return(
    <li className="country col-sm-6 col-md-4 col-xl-3 mb-4 d-flex justify-content-center">
      <div className="w-100 rounded overflow-hidden bg-white shadow-sm">
        <div className="country__img-wrapper">
          <img className="country__img d-block img-fluid w-100" src={flag} />
        </div>
        <div className="country__inner p-3">
          <h3 className="country__title h4 mb-2 d-block text-truncate btn-link text-body font-weight-bold"> {name} </h3>
          <dl className="country__info-list mb-1">
            <div className="d-flex">
              <dt className="font-weight-bold mr-1">Population:</dt>
              <dd className="country__info-item country__info-item--population">{population}</dd>
            </div>
            <div className="d-flex">
              <dt className="font-weight-bold mr-1">Region:</dt>
              <dd className="country__info-item country__info-item--region">{region}</dd>
            </div>
            <div className="d-flex">
              <dt className="font-weight-bold mr-1">Capital:</dt>
              <dd className="country__info-item country__info-item--capital text-truncate">{capital}</dd>
            </div>
          </dl>

        </div>
      </div>
    </li>
  );
}

export default ListItem;