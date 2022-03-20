import User from "./user";
import { useGlobalContext } from "../context";
import styled from "styled-components";

const Users = () => {
  const { users } = useGlobalContext();

  if (users.length < 1) {
    return <h2>no users found</h2>;
  }
  return (
    <Wrapper>
      <h2>Список пользователей</h2>
      <article className='user-info'>
        {users.map((user, index) => {
          return <User key={index} {...user} />;
        })}
      </article>
      <p>Найдено : {users.length}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 500px;
  margin-top: 20px;

  h2 {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    margin-bottom: 15px;
  }
  .user-info {
    display: grid;
    gap: 1rem;
    max-width: 420px;
  }
`;
export default Users;
