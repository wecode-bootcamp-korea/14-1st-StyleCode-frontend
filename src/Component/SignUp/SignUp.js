import React, { Component } from "react";
import "./SignUp.scss";
import "../../Styles/reset.scss";
import "../../Styles/common.scss";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      birthdaylist: [],
      monthlist: [],
      daylist: [],
      nickname: "",
      email: "",
      gender_id: "",
      birth_date: "",
      id: "",
      password: "",
      year: "1990",
      month: "4",
      day: "15",
    };
  }

  getBirthdayDate = () => {
    fetch("http://localhost:3000/data/birthday.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          birthdaylist: res.year,
          monthlist: res.month,
          daylist: res.day,
        });
      });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ selectOption: e.target.value });
  };

  handleClick = () => {
    fetch("http://10.58.4.87:8000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        login_id: this.state.id,
        password: this.state.password,
        nickname: this.state.nickname,
        email: this.state.email,
        birth_date: `${this.state.year}-${this.state.month}-${this.state.day}`,
        gender_id: "1",
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log("결과", res));
  };
  //       {if (res.Authorization) {
  //         localStorage.getItem("token");
  //         console.log("토큰 왔음");
  //         localStorage.setItem("token", res.Authorization);
  //       }
  //       if (res.Message === "SUCCESS") {
  //         this.props.history.push("/Login");
  //       } else {
  //         alert("정보가 일치하지 않습니다.");
  //       }
  //     };
  // };
  // .then((result) => console.log("결과", result));
  componentDidMount() {
    this.getBirthdayDate();
    this.handleClick();
  }

  render() {
    // console.log(this.state.monthlist);
    // console.log(this.state.year);
    console.log(this.state.year.value);
    console.log(this.state.month.value);
    console.log(this.state.day.value);
    console.log(this.state.birth_date.value);
    const { birthdaylist, monthlist, daylist } = this.state;
    return (
      <div className="SignUp">
        <div className="main">
          <section className="leftMain">
            <div className="nav">
              <img
                className="nav-my-picture"
                src="images/mainlogo.png"
                alt="mainlogo"
              />
              <button className="nav-choice-picture">사진선택</button>
            </div>
          </section>
          <section className="rightMain">
            <article className="rightMain-info">
              <div className="facebook-information">
                <a href="www.facebook.com" alt="facebook-information">
                  <img
                    src="images/facebookinformation.png"
                    className="facebook-information"
                    alt="facebook"
                  />
                </a>
              </div>
              <div className="id">
                <div>
                  <p>아이디</p>
                </div>
                <input
                  className="id-input"
                  placeholder="ID"
                  value={this.state.id}
                  name="id"
                  onChange={this.handleChange}
                  type="text"
                ></input>
              </div>
              <div className="pw">
                <div>
                  <p>비밀번호</p>
                </div>
                <input
                  className="pw-input"
                  placeholder="PASSWORD"
                  value={this.state.password}
                  name="password"
                  onChange={this.handleChange}
                  type="password"
                ></input>
              </div>
              <div className="nick-name">
                <div>
                  <p>닉네임</p>
                </div>
                <input
                  className="nick-name-input"
                  placeholder="닉네임을 입력하세요"
                  value={this.state.nickname}
                  name="nickname"
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="email">
                <div>
                  <p>이메일</p>
                </div>
                <input
                  className="email-input"
                  placeholder="이메일을 입력하세요."
                  value={this.state.email}
                  onChange={this.handleChange}
                  name="email"
                ></input>
              </div>
              <div className="radio">
                <div>
                  <p>성별</p>
                </div>
                <div className="radio-male">
                  <label>
                    <input
                      name="1"
                      type="radio"
                      value="1"
                      checked={this.state.selectOption === "1"}
                      onChange={this.handleChange}
                    />
                    남자
                  </label>
                </div>
                <div className="radio-female">
                  <label>
                    <input
                      type="radio"
                      value="2"
                      checked={this.state.selectOption === "2"}
                      onChange={this.handleChange}
                    />
                    여자
                  </label>
                </div>
              </div>
              <div className="birth">
                <div>
                  <p>생일</p>
                </div>
                <select
                  className="year"
                  onChange={this.handleChange}
                  // name="year"
                  // value={this.state.year}
                >
                  {birthdaylist.map((item) => (
                    <option key={item.key} value={item.key}>
                      {item.value}
                    </option>
                  ))}
                </select>
                <select className="month">
                  {monthlist.map((item) => (
                    <option key={item.key} value={item.key}>
                      {item.value}
                    </option>
                  ))}
                </select>
                <select className="day">
                  {daylist.map((item) => (
                    <option key={item.key} value={item.key}>
                      {item.value}
                    </option>
                  ))}
                </select>
              </div>
            </article>
            <article className="rightMain-agree-form">
              <div className="agree-form">
                <div className="agree-form-one">
                  <input
                    type="checkbox"
                    value="all-one-agree"
                    // checked={this.state.allChecked}
                    // onChange={this.handleAllChecked}
                  />
                  <p>전체동의</p>
                </div>
                <div className="agree-form-two">
                  <input
                    type="checkbox"
                    value="two-agree"
                    // checked={this.state.checked1}
                  />
                  <p>(필수) 이용약관 동의</p>
                </div>
                <div className="agree-form-three">
                  <input
                    type="checkbox"
                    value="three-agree"
                    // checked={this.state.checked2}
                  />
                  <p>(필수) 개인정보 처리방침 동의</p>
                </div>
                <div className="agree-form-four">
                  <input
                    type="checkbox"
                    value="four-agree"
                    // checked={this.state.checked3}
                  />
                  <p>(필수) 만 14세 이상 입니다.</p>
                </div>
                <div className="agree-form-five">
                  <input
                    type="checkbox"
                    value="five-agree"
                    // checked={this.state.checked4}
                  />
                  <p>(선택) 마케팅 정보 수신 동의</p>
                </div>
              </div>
            </article>
            <article className="alldone">
              <button className="alldone-button" onClick={this.handleClick}>
                다 했어요
              </button>
            </article>
          </section>
        </div>
      </div>
    );
  }
}

export default SignUp;
