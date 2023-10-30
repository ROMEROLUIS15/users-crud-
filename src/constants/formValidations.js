const EMAIL_VALIDATIONS = {
  required: {
    value: true,
    message: "This field is required",
  },
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Enter a valid email",
  },
};

const PASSWORD_VALIDATIONS = {
  required: {
    value: true,
    message: "This field is required",
  },
  maxLength: {
    value: 50,
    message: "This field accepts a maximum of 50 characters",
  },
  minLength: {
    value: 4,
    message: "This field accepts a minimum of 4 characters",
  },
};

const FIRST_NAME_VALIDATIONS = {
  required: {
    value: true,
    message: "This field is required",
  },
  maxLength: {
    value: 50,
    message: "This field accepts a maximum of 50 characters",
  },
  minLength: {
    value: 2,
    message: "This field accepts a minimum of 2 characters",
  },
};

const LAST_NAME_VALIDATIONS = {
  required: {
    value: true,
    message: "This field is required",
  },
  maxLength: {
    value: 50,
    message: "This field accepts a maximum of 50 characters",
  },
  minLength: {
    value: 2,
    message: "This field accepts a minimum of 2 characters.",
  },
};

export { FIRST_NAME_VALIDATIONS, LAST_NAME_VALIDATIONS, EMAIL_VALIDATIONS, PASSWORD_VALIDATIONS };
