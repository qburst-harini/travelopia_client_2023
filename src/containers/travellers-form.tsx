import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Header, Footer } from "../components";
import { person1, person2 } from "../images/index";

export const TravellersForm = () => {
  let navigate = useNavigate();

  const BUDGET_PER_PERSON = 1000;
  const initialForm = {
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
      <header className="form-header">
        <Header />
      </header>
      <main>
        <section id="travellers-form">
          <div className="container">
            <header className="section-header ">
              <h2 className="l-heading">Create My Trip Now</h2>
            </header>
            <Formik
              initialValues={initialForm}
              validationSchema={FormSchema}
              onSubmit={async (values, { resetForm }) => {
                console.log("save", values);
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
                        type="button"
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

        <section id="testimonials">
          <div className="container">
            <header className="section-header text-light py-3">
              <h2>What Our Guests Say</h2>
            </header>
            <div className="testimonial">
              <img src={person1} alt="Samantha" />
              <p>
                "Being a newbie to traveling in Europe, I needed guidance. I
                found that and much more with the planning of the trip and
                support through the whole process as well as while being on the
                trip itself. We enjoyed our trip to Portugal without the
                logistical worries. When we plan another big trip, it will again
                be through Enchanting Travels."
              </p>
            </div>

            <div className="testimonial">
              <img src={person2} alt="Jen" />
              <p>
                "Our experience was personalized to us. Each tour guide was
                knowledgeable and so nice. We cannot put into words how great
                the overall experience was for us."
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};
