import React, { Component } from "react";
import "./PopularBrand.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

class PopularBrand extends Component {
  constructor() {
    super();
    this.state = {
      brandList: [],
    };
  }

  getBrandList = () => {
    fetch("http://localhost:3000/data/brandItem.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          brandList: res.item,
        });
      });
  };
  componentDidMount() {
    this.getBrandList();
  }

  render() {
    const { brandList } = this.state;

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 2.5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div>
        <div className="popularBrandContainer">
          <header>
            <div className="title">
              <h2>인기 브랜드</h2>
            </div>
            <div className="carouselBtn">
              <img
                className="prevBtn"
                src="images/icon/prev1.png"
                alt="좌측으로 넘기는 버튼"
              ></img>
              <img
                className="nextBtn"
                src="images/icon/next1.png"
                alt="우측으로 넘기는 버튼"
              ></img>
            </div>
          </header>
          <div className="carousel">
            <Slider {...settings}>
              {brandList.map((brand) => {
                return (
                  <div className="brandItem">
                    <div className="brandImgBox">
                      <img
                        className="brandItemImg"
                        src={brand.src}
                        alt={brand.alt}
                      />
                    </div>
                    <div className="brandItemDescBox">
                      <div className="brandItemDesc">
                        <span className="brandName">{brand.brandName}</span>
                        <span className="brandProductCnt">
                          ({brand.brandProductCnt})
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <footer>
            <button>
              <span>브랜드 더 보기 `{'>'}`</span>
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

export default PopularBrand;
