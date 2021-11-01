function CountryHeader(){
  return(
    <header className="site-header py-4 bg-light shadow-sm mb-4">
      <div className="container d-flex align-items-center justify-content-between">
        <a className="text-dark font-weight-bold" href="./">Where in the world?</a>
        <button className="site-header__toggle btn btn-sm btn-white" type="button">Dark Mode</button>
      </div>
    </header>
  );
}

export default CountryHeader;