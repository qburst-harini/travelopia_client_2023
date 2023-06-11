import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { Header, Footer, Reviews } from "../components";
import { ITravellers } from "./types";
import "../css/style.css";
import "../css/utilities.css";

export const TravellersForm = () => {
  let navigate = useNavigate();

  const BUDGET_PER_PERSON = 1000;
  const initialForm: ITravellers = {
    name: "",
    email: "",
    city: "india",
    travelNumbers: 1,
    dollars: BUDGET_PER_PERSON,
  };

  const FormSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
  });

  return (
    <>
      <div className="form-header">
        <Header />
      </div>
      <main>
        <section id="travellers-form">
          <div className="container ">
            <header className="section-header ">
              <h2>Create My Trip Now</h2>
            </header>
            <Formik
              initialValues={initialForm}
              validationSchema={FormSchema}
              onSubmit={async (values, { resetForm }) => {
                await axios
                  .post(`http://localhost:4000/travellers`, { ...values })
                  .then((res) => {
                    alert(res.data.message);
                    navigate("/travellers-list");
                  })
                  .catch((err) =>
                    alert(`user not added successfully: ${err} `)
                  );
                resetForm(initialForm);
              }}
            >
              {({ values, setFieldValue, errors, touched }) => {
                const saveEnable =
                  Object.keys(touched).length > 0 &&
                  !Object.keys(errors).length;

                return (
                  <Form>
                    <div className="form-display">
                      <Field
                        name="name"
                        placeholder="Enter Name"
                        required
                        className="form-field"
                      />

                      <Field
                        name="email"
                        placeholder="Enter Email"
                        type="email"
                        className="form-field"
                      />

                      <Field as="select" name="city" className="form-field">
                        <option value="india">India</option>
                        <option value="africa">Africa</option>
                        <option value="europe">Europe</option>
                      </Field>

                      <label htmlFor="No.of Travellers">No.of Travellers</label>
                      <Field
                        placeholder="Enter No.of Travellers"
                        name="travelNumbers"
                        type="number"
                        className="form-field"
                        min={1}
                        required
                        onChange={(e: any) => {
                          setFieldValue(
                            "travelNumbers",
                            parseInt(e.target.value)
                          );
                          setFieldValue(
                            "dollars",
                            parseInt(e.target.value) * BUDGET_PER_PERSON
                          );
                        }}
                      />

                      <Field
                        name="dollars"
                        className="form-field"
                        readOnly
                        value={`$${values.dollars} is calculated Dollars as per No.of Travellers`}
                      />

                      <button
                        className={`btn ${!saveEnable ? "btn-disable" : ""}`}
                        type="submit"
                        disabled={!saveEnable}
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </section>

        <Reviews />
      </main>

      <Footer />
    </>
  );
};
