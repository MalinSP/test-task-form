import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import styled from "styled-components";
import Sort from "../components/sort";
import useForm from "../functions/useForm";
import validate from "../functions/validate";
import Loading from "../components/loading";

const urlID = "https://jsonplaceholder.typicode.com/users?id=";

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const form = useRef(null);
  const { loading } = useGlobalContext();
  const { errors, handleChange, setErrors, setIsSubmitting } = useForm(
    login,
    validate
  );

  function login() {
    console.log("No errors, submit callback called!");
  }

  const fetchUser = async (urlID) => {
    try {
      const response = await fetch(urlID);
      const data = await response.json();
      if (data) {
        const { name, username, email, phone, website } = data[0];
        const { street, city, zipcode } = data[0].address;

        const newPerson = {
          name,
          username,
          email,
          phone,
          website,
          street,
          city,
          zipcode,
        };
        setUser(newPerson);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser(`${urlID}${id}`);
  }, [id]);

  const editInput = () => {
    setIsEdit(true);
    setIsReadOnly(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(form.current);
    const values = Object.fromEntries(data.entries());
    if (values) {
      setErrors(validate(values));
      setIsSubmitting(true);
      console.log({ values });
    } else {
      setIsSubmitting(false);
    }
  };

  const { name, username, email, phone, website, street, city, zipcode } = user;

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <Wrapper>
        <Sort />
        <div>
          <header>
            <h3>Профиль пользователя</h3>
            <button onClick={() => editInput()} className='btn'>
              Редактировать
            </button>
          </header>
          <form className='form' ref={form} onSubmit={handleSubmit} noValidate>
            <div className='form-control'>
              <label htmlFor='name'>Имя</label>
              <input
                name='name'
                type='name'
                defaultValue={name}
                required
                readOnly={isReadOnly}
                style={
                  !isEdit
                    ? { color: "rgba(0, 0, 0, 0.3)" }
                    : { color: "#000000" }
                }
                onChange={handleChange}
                autoComplete='off'
              />{" "}
              {errors.name && <p>{errors.name}</p>}
            </div>

            <div className='form-control'>
              <label htmlFor='username'>Username</label>
              <input
                name='username'
                type='username'
                defaultValue={username}
                readOnly={isReadOnly}
                style={
                  !isEdit
                    ? { color: "rgba(0, 0, 0, 0.3)" }
                    : { color: "#000000" }
                }
                onChange={handleChange}
              />{" "}
              {errors.username && <p>{errors.username}</p>}
            </div>
            <div className='form-control'>
              <label htmlFor='email'>Email</label>
              <input
                name='email'
                type='email'
                defaultValue={email}
                readOnly={isReadOnly}
                style={
                  !isEdit
                    ? { color: "rgba(0, 0, 0, 0.3)" }
                    : { color: "#000000" }
                }
                onChange={handleChange}
              />{" "}
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className='form-control'>
              <label htmlFor='street'>Street</label>
              <input
                type='street'
                name='street'
                defaultValue={street}
                readOnly={isReadOnly}
                style={
                  !isEdit
                    ? { color: "rgba(0, 0, 0, 0.3)" }
                    : { color: "#000000" }
                }
                onChange={handleChange}
              />{" "}
              {errors.street && (
                <p className='help is-danger'>{errors.street}</p>
              )}
            </div>
            <div className='form-control'>
              <label htmlFor='city'>City</label>
              <input
                type='city'
                name='city'
                defaultValue={city}
                readOnly={isReadOnly}
                style={
                  !isEdit
                    ? { color: "rgba(0, 0, 0, 0.3)" }
                    : { color: "#000000" }
                }
                onChange={handleChange}
              />{" "}
              {errors.city && <p>{errors.city}</p>}
            </div>
            <div className='form-control'>
              <label htmlFor='zipcode'>Zip code</label>
              <input
                type='zipcode'
                name='zipcode'
                defaultValue={zipcode}
                readOnly={isReadOnly}
                style={
                  !isEdit
                    ? { color: "rgba(0, 0, 0, 0.3)" }
                    : { color: "#000000" }
                }
                onChange={handleChange}
              />{" "}
              {errors.zipcode && <p>{errors.zipcode}</p>}
            </div>
            <div className='form-control'>
              <label htmlFor='website'>Website</label>
              <input
                type='website'
                name='website'
                defaultValue={website}
                readOnly={isReadOnly}
                style={
                  !isEdit
                    ? { color: "rgba(0, 0, 0, 0.3)" }
                    : { color: "#000000" }
                }
                onChange={handleChange}
              />{" "}
              {errors.website && <p>{errors.website}</p>}
            </div>
            <div className='form-control'>
              <label htmlFor='phone'>Phone</label>
              <input
                type='phone'
                name='phone'
                defaultValue={phone}
                readOnly={isReadOnly}
                style={
                  !isEdit
                    ? { color: "rgba(0, 0, 0, 0.3)" }
                    : { color: "#000000" }
                }
                onChange={handleChange}
              />{" "}
              {errors.phone && <p>{errors.phone}</p>}
            </div>
            <div className='form-control'>
              <label htmlFor='comment'>Comment</label>
              <textarea
                name='textarea'
                id=''
                cols='30'
                rows='10'
                readOnly={isReadOnly}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className='btn-container'>
              <Link to='/' className='btn'>
                Назад
              </Link>
              <button
                type='submit'
                className='btn-submit'
                disabled={isReadOnly}
                style={
                  !isEdit
                    ? { backgroundColor: "#afafaf" }
                    : { backgroundColor: "#52CF4F" }
                }
                onClick={handleSubmit}
              >
                Сохранить
              </button>
            </div>
          </form>
        </div>
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
  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
  }
  .btn {
    background: #4b51ef;
    border-radius: 5px;
    padding: 6px 11px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
    border: transparent;
    text-decoration: none;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .form {
    display: grid;
    gap: 10px;

    padding: 20px 0 20px 12px;
    background: #ffffff;
    border: 2px solid #f3f3f3;
    border-radius: 8px;
    box-sizing: border-box;
  }
  .form-control {
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-width: 210px;
  }
  .form-control label {
    font-weight: 400;
    font-size: 8px;
    line-height: 9px;
    color: #000000;
  }
  .form-control input,
  textarea {
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    /* color: rgba(0, 0, 0, 0.3); */
    padding: 5px 0 5px 10px;
    background: #ffffff;
    border: 1px solid #d8d8d8;
    border-radius: 5px;
  }

  .btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn-submit {
    background: #afafaf;
    border-radius: 5px;
    border: transparent;
    padding: 5px 15px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
    margin-left: 10px;
  }
  .danger {
    border: 1px solid red;
  }
  .input {
    border: 1px solid red;
  }
`;

export default Profile;
