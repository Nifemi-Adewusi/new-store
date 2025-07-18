import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleSubmit = function (e) {
    e.preventDefault();
    if (!searchQuery) return;
    navigate(`/order/${searchQuery}`);
    setSearchQuery("");
  };

  //    useEffect(function(){
  //     navigate(`/order${searchQuery}`)

  //     }, [searchQuery, navigate])
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="h-10 w-52 placeholder:text-center  border border-yellow-300 md:w-72 md:h-20 rounded-full placeholder:text-stone-400 transition-all focus:w-56 md:focus:w-96 duration-300 focus:outline-none focus:ring text-center focus:ring-yellow-500"
        placeholder="Search Order By ID"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
