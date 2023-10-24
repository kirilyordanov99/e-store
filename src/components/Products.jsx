import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  // Use useRef for componentMounted
  const componentMounted = useRef(true);
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted.current) {
        const responseData = await response.json();
  
        // Remove the product with id: 1 from the men's section
        const filteredData = responseData.filter(
          (product) => !(product.category === "men's clothing" && product.id === 1)
        );
  
        // Modify specific men's products (e.g., change the title, price, and add images for products with id: 2 and 3)
        const modifiedData = filteredData.map((product) => {
          if (product.category === "men's clothing") {
            if (product.id === 2) {
              return {
                ...product,
                title: "Mens White Shirt",
                price: 20.18,
                image: "./assets/shirt.jpg", //image URL
              };
            } else if (product.id === 3) {
              return {
                ...product,
                title: "Mens Jeans",
                price: 30.27,
                image: "./assets/jeans.jpg", //image URL
              };
            } else if (product.id === 4) {
              return {
                ...product,
                title: "Mens Jeans",
                price: 30.27,
                image: "./assets/casual shirt.jpg", //image URL
              };
             } 
            }else if (product.category === "jewelery" && product.id === 8) {
              return {
                ...product,
                title: "Pierced Owl Silver",
                price: 19.99,
                description: "Silver Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
                image: "./assets/Pierced Owl.jpg", //image URL
              };
          }
          return product;
        });
  
        setData(modifiedData);
        setFilter(modifiedData);
        setLoading(false);
      }
    };
  
    // Call the function to fetch and modify products
    getProducts();
  }, []);
  
  

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4" key={index}>
            <Skeleton height={592} />
          </div>
        ))}
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>
            All
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("men's clothing")}>
            Men
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("women's clothing")}>
            Women
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("jewelery")}>
            Jewelery
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("electronics")}>
            Electronics
          </button>
        </div>

        {filter.map((product) => (
          <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <div className="card text-center h-100" key={product.id}>
              <img className="card-img-top p-3" src={product.image} alt="Card" height={300} />
              <div className="card-body">
                <h5 className="card-title">{product.title.substring(0, 12)}...</h5>
                <p className="card-text">{product.description.substring(0, 90)}...</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">$ {product.price}</li>
              </ul>
              <div className="card-body">
                <Link to={"/product/" + product.id} className="btn btn-dark m-1">
                  Buy Now
                </Link>
                <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 text-center">Latest Products</h2>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;
