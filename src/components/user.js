import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const User = ({ id, name, city, company }) => {
  return (
    <Wrapper>
      <h5>
        ФИО : <span>{name}</span>
      </h5>
      <h5>
        Город: <span>{city}</span>
      </h5>
      <h5>
        Компания: <span>{company}</span>{" "}
      </h5>
      <div className='btn-container'>
        <Link to={`/user/${id}`} className='btn'>
          Подробнее
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  border: 1px solid black;
  display: grid;
  gap: 8px;
  background: #f3f3f3;
  border-radius: 8px;
  border: transparent;
  padding: 10px 0 10px 10px;
  position: relative;
  h5 {
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #a3a3a3;
  }
  h5 span {
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #000000;
  }
  .btn-container {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
  .btn {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #4b51ef;
    text-decoration: none;
  }
`;
export default User;
