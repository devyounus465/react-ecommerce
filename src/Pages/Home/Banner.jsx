import { useState } from "react";
import productdata from "../../products.json";
import { Link } from "react-router-dom";
import SelectedCategory from "../../components/SelectedCategory/SelectedCategory";

const title = (
  <h2>
    Search your one from <span>thousednds</span> products
  </h2>
);
const description = "We have the largest collection of products";

const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filterProducts, setFilterProducts] = useState(productdata);
  //   console.log(filterProducts);

  // handle search functionality
  const handleSerch = (e) => {
    //   console.log(e.target.value);
    const searchterm = e.target.value;
    setSearchInput(searchterm);

    //   filtering products based on search

    const filtered = productdata.filter((product) =>
      product.name.toLowerCase().includes(searchterm.toLowerCase())
    );
    setFilterProducts(filtered);
  };
  console.log(filterProducts);

  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <SelectedCategory select={"all"}></SelectedCategory>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Serch your products"
              value={searchInput}
              onChange={handleSerch}
            />
            <button type="submit">
              <i className="icofont-search-1"></i>
            </button>
          </form>
          <p>{description}</p>
          <ul className="lab-ul">
            {searchInput &&
              filterProducts.map((product, i) => (
                <li key={i}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
