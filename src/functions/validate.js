export default function validate(values) {
  let errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.username) {
    errors.username = "Username is required";
  }

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.street) {
    errors.street = "Street is required";
  }
  if (!values.city) {
    errors.city = "City is required";
  }
  if (!values.zipcode) {
    errors.zipcode = "Zipcode is required";
  }
  if (!values.website) {
    errors.website = "Website is required";
  }

  return errors;
}
