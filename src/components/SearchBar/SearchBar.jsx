import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";
import { getCharactersApi } from "../../api/getCharactersApi";
import { apiContext } from "../../views/Home/Home";

import "./SearchBar.scss";

import Title from "../titles/Title";
import FormInput from "../forms/formFields/FormInput";
import FormButton from "../forms/formButtons/FormButton";

const SearchBar = () => {
  const { setApiCharacters } = useContext(apiContext);

  const formik = useFormik({
    initialValues: {
      input: "",
    },
    onSubmit: async (formData) => {
      const input = formData.input;

      try {
        if (input !== "") {
          const response = await getCharactersApi(input);
          await setApiCharacters(response.data.results);
        }
      } catch (error) {
        console.log(error);
        swal({
          title: "Oh no :C",
          text: "This field can not be blank",
          icon: "error",
          button: "Aww yiss!",
        });
      }
    },
    validationSchema: Yup.object({
      input: Yup.string().required("This field is required"),
    }),
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="container-searchbar d-flex justify-content-between align-items-end mt-1">
          <div className="w-75">
            <Title text="Heroes search" />
            <FormInput
              type="text"
              placeholder="Enter a name"
              name="input"
              formik={formik}
              danger={formik.errors.input}
              touched={formik.touched.input}
            />
          </div>
          <div className="w-25 ms-3">
            <FormButton text="Search" color="button-secondary"/>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
