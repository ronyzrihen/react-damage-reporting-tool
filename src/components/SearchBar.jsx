const {useState, useEffect} = require('react');
const ReportsContainer = require('./ReportsContainer.jsx');
function SearchBar({setSearchTerm}) {
  const [search, setSearch] = useState('');
    useEffect(() => {
        setSearchTerm(search);
    }, []);

    // todo connect to a serach button and send to reports container
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
}

module.exports = SearchBar;