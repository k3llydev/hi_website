import React, {Component} from 'react'

class SubNav extends Component{
    render(){
        return(
            <div>
  {/*  Navigation */}
  <div className="nav-overlay" />
  <div className="nav-inner isDown">
    <nav>
      <ul>
        <li className="subnav">
          <a href="index.html" className="ajax active">
            Home
          </a>
          {/*  Subnav  */}
          <ul>
            <li>
              <a href="index.html" className="ajax">
                Slideshow{" "}
              </a>
            </li>
            <li>
              <a href="index2.html" className="ajax">
                Multi Slideshow 4
              </a>
            </li>
            <li>
              <a href="index3.html" className="ajax">
                Multi Slideshow 3
              </a>
            </li>
            <li>
              <a href="index4.html" className="ajax">
                Video{" "}
              </a>
            </li>
            <li>
              <a href="index5.html" className="ajax">
                Single image
              </a>
            </li>
            <li>
              <a href="index6.html" className="ajax">
                Slider{" "}
              </a>
            </li>
            <li>
              <a href="index7.html" className="ajax">
                Visible Menu
              </a>
            </li>
          </ul>
          {/*  Subnav  end*/}
        </li>
        <li>
          <a href="about.html" className="ajax">
            {" "}
            About{" "}
          </a>
        </li>
        <li className="subnav">
          <a href="portfolio.html" className="ajax">
            Work
          </a>
          {/*  Subnav  */}
          <ul>
            <li>
              <a href="portfolio.html" className="ajax">
                Style 1
              </a>
            </li>
            <li>
              <a href="portfolio2.html" className="ajax">
                Style 2
              </a>
            </li>
            <li>
              <a href="portfolio3.html" className="ajax">
                Style 3
              </a>
            </li>
            <li>
              <a href="portfolio4.html" className="ajax">
                Style 4
              </a>
            </li>
            <li>
              <a href="portfolio5.html" className="ajax">
                Style 5
              </a>
            </li>
            <li>
              <a href="portfolio6.html" className="ajax">
                Style 6
              </a>
            </li>
          </ul>
          {/*  Subnav  end*/}
        </li>
        <li>
          <a href="services.html" className="ajax">
            Services
          </a>
        </li>
        <li>
          <a href="contact.html" className="ajax">
            Contact
          </a>
        </li>
        <li className="subnav">
          <a href="blog.html" className="ajax">
            Journal
          </a>
          {/*  Subnav  */}
          <ul>
            <li>
              <a href="blog.html" className="ajax">
                4 column
              </a>
            </li>
            <li>
              <a href="blog2.html" className="ajax">
                3 column
              </a>
            </li>
            <li>
              <a href="blog-single.html" className="ajax">
                Single{" "}
              </a>
            </li>
          </ul>
          {/*  Subnav  end*/}
        </li>
        <li className="subnav">
          <a href="/">Portfolio single</a>
          {/*  Subnav  */}
          <ul>
            <li>
              <a href="portfolio-single.html" className="ajax">
                Style 1
              </a>
            </li>
            <li>
              <a href="portfolio-single2.html" className="ajax">
                Style 2
              </a>
            </li>
            <li>
              <a href="portfolio-single3.html" className="ajax">
                Style 3
              </a>
            </li>
            <li>
              <a href="portfolio-single4.html" className="ajax">
                Style 4
              </a>
            </li>
            <li>
              <a href="portfolio-single5.html" className="ajax">
                Style 5
              </a>
            </li>
            <li>
              <a href="portfolio-single6.html" className="ajax">
                Style 6
              </a>
            </li>
            <li>
              <a href="portfolio-single7.html" className="ajax">
                Style 7
              </a>
            </li>
            <li>
              <a href="404.html" className="ajax">
                404
              </a>
            </li>
          </ul>
          {/*  Subnav  end*/}
        </li>
      </ul>
    </nav>
  </div>
  {/*  Navigation end */}
</div>

        );
    }
}
export default SubNav;