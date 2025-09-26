import {
  Formik,
  Form,
  Field,
  ErrorMessage
} from "formik";
import type { FieldInputProps, FormikProps } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import './form.scss'
import CustomSelect from "./CustomSelect";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  message: "",
  topic: ""
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Enter minimum 2 symbols")
    .required("Enter your first name"),
  phone: Yup.string()
    .matches(/^\+?\d{10,15}$/, "Incorrect phone number")
    .required("Enter your phone number"),
  email: Yup.string()
    .email("Incorrect email")
    .required("Enter your email address"),
  message: Yup.string()
    .min(10, "There must be at least 10 characters")
    .required("Enter your message"),
  topic: Yup.string().required("Please choose a topic"),
});

const FormContact = () => {
          const { t } = useTranslation("contactForm");
  const handleSubmit = async (
    values: typeof initialValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "da0a179",
          ...values,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error:", errorData);
        throw new Error("Error sending the form");
      }

      const responseData = await response.json();
      console.log("Form submission response:", responseData);

      toast.warn(
        "Wiadomość została pomyślnie wysłana. Skontaktujemy się z Państwem tak szybko, jak to możliwe.",
        {
          icon: <span>📨</span>,
          position: "top-right",
          style: {
            backgroundColor: "#0e41da",
            color: "#fff",
            fontFamily: "Inter",
          },
        }
      );
      resetForm();
    } catch (error) {
      console.error("Error sending the form:", error);
      toast.error("There was an error sending your message.");
    }
  };

  return (
    <>
      <div className="form-container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="form__input-box">
                <label htmlFor="name" className="form__label">
                  <p className="form__number">01</p>
                  <p className="form__text">{t("contactForm.name")}</p>
                </label>
                <Field
                  id="name"
                  className={`form__input ${
                    touched.name && errors.name ? "error-border" : ""
                  }`}
                  type="text"
                  name="name"
                />
                <ErrorMessage name="name" component="div" className="error">
                  {(msg) => (
                    <div className="error">
                      <span className="error__icon">&#9432;</span> {msg}
                    </div>
                  )}
                </ErrorMessage>
              </div>

              <div className="form__input-box">
                <label htmlFor="email" className="form__label">
                  <p className="form__number">02</p>
                  <p className="form__text">{t("contactForm.email")}</p>
                </label>
                <Field
                  className={`form__input ${
                    touched.email && errors.email ? "error-border" : ""
                  }`}
                  type="email"
                  name="email"
                  id="email"
                />
                <ErrorMessage name="email" component="div" className="error">
                  {(msg) => (
                    <div className="error">
                      <span className="error__icon">&#9432;</span> {msg}
                    </div>
                  )}
                </ErrorMessage>
              </div>

              <div className="form__input-box">
                <label htmlFor="phone" className="form__label">
                  <p className="form__number">03</p>
                  <p className="form__text">{t("contactForm.phone")}</p>
                </label>
                <Field name="phone">
                  {({
                    field,
                    form,
                  }: {
                    field: FieldInputProps<string>;
                    form: FormikProps<typeof initialValues>;
                  }) => (
                    <input
                      {...field}
                      type="text"
                      id="phone"
                      className={`form__input ${
                        form.touched.phone && form.errors.phone
                          ? "error-border"
                          : ""
                      }`}
                    />
                  )}
                </Field>
                <ErrorMessage name="phone" component="div" className="error">
                  {(msg) => (
                    <div className="error">
                      <span className="error__icon">&#9432;</span> {msg}
                    </div>
                  )}
                </ErrorMessage>
              </div>

              {/* <div className="form__input-box">
                <label htmlFor="topic" className="form__label">
                  <p className="form__number">04</p>
                  <p className="form__text">{t("contactForm.category")}</p>
                </label>

                <Field name="topic">
                  {({
                    field,
                    form,
                  }: {
                    field: FieldInputProps<string>;
                    form: FormikProps<typeof initialValues>;
                  }) => (
                    <select
                      {...field}
                      id="topic"
                      required
                      className={`form__select ${
                        form.touched.topic && form.errors.topic
                          ? "error-border"
                          : ""
                      }`}
                    >
                      <option value="" disabled hidden>
                        {t("contactForm.choose")}
                      </option>
                      <option value="materials">
                        {t("contactForm.materials")}
                      </option>
                      <option value="equipment">
                        {t("contactForm.equipment")}
                      </option>
                      <option value="raw">{t("contactForm.raw")}</option>
                      <option value="logistic">
                        {t("contactForm.logistic")}
                      </option>
                    </select>
                  )}
                </Field>

                <ErrorMessage name="topic">
                  {(msg) => (
                    <div className="error">
                      <span className="error__icon">&#9432;</span> {msg}
                    </div>
                  )}
                </ErrorMessage>
              </div> */}
              <CustomSelect
                name="topic"
                category={t("contactForm.category")}
                placeholder={t("contactForm.choose")}
                options={[
                  { value: "materials", label: t("contactForm.materials") },
                  { value: "equipment", label: t("contactForm.equipment") },
                  { value: "raw", label: t("contactForm.raw") },
                  { value: "logistic", label: t("contactForm.logistic") },
                ]}
              />

              <div className="form__input-box textarea">
                <label htmlFor="message" className="form__label">
                  <p className="form__number">05</p>
                  <p className="form__text">{t("contactForm.message")}</p>
                </label>
                <Field
                  className={`form__input ${
                    touched.message && errors.message ? "error-border" : ""
                  }`}
                  as="textarea"
                  name="message"
                  id="message"
                  rows="8"
                />
                <ErrorMessage name="message" component="div" className="error">
                  {(msg) => (
                    <div className="error">
                      <span className="error__icon">&#9432;</span> {msg}
                    </div>
                  )}
                </ErrorMessage>
              </div>

              <button type="submit" className="form__btn">
                {t("contactForm.btn")}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
};

export default FormContact;
