const HOD = () => (
    <div className="HOD-form">
    <div className="HOD-page-container">
    <div className="HOD-page-content">
    <form action="/" method="get">
      <h4 className="HOD-form-title">HEAD OF THE DEPARTMENT</h4>
        <label htmlFor="header-search">
            <span>Enter the Course code: </span>
        </label>
        <h3> </h3>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
        />
        <h3> </h3>
        <button className="search-button" type="submit">Search</button>
    </form>
    </div>
    </div>
    </div>
  );
  
  export default HOD;