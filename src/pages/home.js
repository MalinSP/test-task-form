import React from "react";
import Sort from "../components/sort";
import Users from "../components/users";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import Loading from "../components/loading";

const Home = () => {
  const { loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  return (
    <main>
      <Wrapper>
        <Sort />
        <Users />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  max-width: 665px;
  width: 90vw;
  gap: 2rem;
`;

export default Home;
