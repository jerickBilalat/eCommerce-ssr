import React, {Fragment} from 'react';
import { Link } from "react-router-dom";

const header = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="header">

          <div className="col-md-3 col-sm-12">
            <div id="logo">
              <h1>JRK POOLS</h1>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
      <div className="row">
        <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="menu-responsive">
                  <i
                    className="fa fa-chevron-circle-right menu-trigger"
                  />
                </div>
                <nav id="navigation">
                  <ul className="menu" id="responsive">

                    <li><a href="index.html">Home</a></li>
                    <li className="dropdown" >
                      <a href="index.html">Home</a>
                      <ul>
                        <li><a href="index.html">Home 1</a></li>
                        <li><a href="index-2.html">Home 2</a></li>
                        <li><a href="index-3.html">Home 3</a></li>
                        <li><a href="index-4.html">Home 4</a></li>
                      </ul>
                    </li>

                    <li className="dropdown">
                      <a href="#" className="current">Projects</a>
                      <ul>
                        <li><a href="project-categories.html">Categories</a></li>
                        <li><a href="all-projects.html">All Projects</a></li>
                        <li><a href="all-projects-full-width.html">All Projects Full-Width</a></li>
                        <li><a href="#">Single Project Page</a>
                          <ul>
                            <li><a href="single-project-content-right.html">Content Right</a></li>
                            <li><a href="single-project-content-left.html">Content Left</a></li>
                            <li><a href="single-project-content-bottom.html">Content Bottom With Slider</a></li>
                            <li><a href="single-project-before-after.html">Before & After Slider</a></li>
                            <li><a href="single-project-photo-grid.html">Photo Grid</a></li>
                          </ul>
                        </li>
                        <li><a href="all-projects-before-after.html">Before & After</a></li>
                        <li><a href="single-category.html">Single Category</a></li>
                        <li><a href="single-category-full-width.html">Single Category Full-Width</a></li>
                      </ul>
                    </li>

                    <li className="dropdown" >
                      <a href="#">Services</a>
                      <ul>
                        <li><a href="services-1.html">Services List 1</a></li>
                        <li><a href="services-2.html">Services List 2</a></li>
                        <li><a href="single-service-1.html">Single Service Page 1</a></li>
                        <li><a href="single-service-2.html">Single Service Page 2</a></li>
                      </ul>
                    </li>

                    <li>
                      <a href="#">Pages</a>
                      <div className="mega two-cols">

                        <div className="mega-section">
                          <ul>
                            <li><span className="mega-headline">Elements</span></li>
                            <li><a href="shortcodes.html">Shortcodes</a></li>
                            <li><a href="typography.html">Typography</a></li>
                            <li><a href="pricing-tables.html">Pricing Tables</a></li>
                            <li><a href="icons.html">Icons</a></li>
                          </ul>
                        </div>

                        <div className="mega-section">
                          <ul>
                            <li><span className="mega-headline">Example Pages</span></li>
                            <li><a href="all-projects-full-width.html">Projects</a></li>
                            <li><a href="services-1.html">Services List</a></li>
                            <li><a href="shop.html">Shop</a></li>
                            <li><a href="contact.html">Contact</a></li>
                          </ul>
                        </div>


                      </div>
                    </li>

                    <li className="dropdown" >
                      <a href="#">Shop</a>
                      <ul>
                        <li><a href="shop.html">Shop</a></li>
                        <li><a href="shop-product-page.html">Product Page</a></li>
                        <li><a href="shopping-cart.html">Cart</a></li>
                      </ul>
                    </li>

                    <li className="dropdown" >
                      <a href="#">Blog</a>
                      <ul>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="blog-post-page.html">Post Page</a></li>
                      </ul>
                    </li>

                    <li><a href="contact.html">Contact</a></li>


                    <li className="search"><a href="#"><i className="fa fa-search"></i></a></li>
                    <li className="cart-icon"><a href="shopping-cart.html"><i className="fa fa-shopping-cart"></i><span className="cart-counter">1</span></a></li>

                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="clearfix" />
      </div>
    </Fragment>
  );
};

export default header;