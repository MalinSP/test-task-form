import React from "react";
import { useGlobalContext } from "../context";
import styled from "styled-components";

const Sort = () => {
  const { users, setUsers } = useGlobalContext();

  function companySort() {
    const sorted = [...users].sort((a, b) => {
      return a.company.localeCompare(b.company);
    });
    setUsers(sorted);
  }
  function citySort() {
    const sorted = [...users].sort((a, b) => {
      return a.city.localeCompare(b.city);
    });
    setUsers(sorted);
  }

  return (
    <Wrapper>
      <h4>Сортировка</h4>

      <button onClick={citySort} className='btn'>
        по городу
      </button>
      <button type='button' onClick={companySort} className='btn'>
        по компании
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 152px;
  background-color: #bdbdbd;
  padding: 35px 20px;
  color: #000000;

  h4 {
    font-size: 12px;
  }

  .btn {
    padding: 5px 15px;
    font-size: 12px;
    background: #4b51ef;
    border-radius: 5px;
    color: #ffffff;
    border: transparent;
    margin: 10px 0;
  }
`;

export default Sort;
