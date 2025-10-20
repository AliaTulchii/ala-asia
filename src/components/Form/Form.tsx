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
import { useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  message: "",
  topic: "",
  consent1: false,
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
  consent1: Yup.boolean().oneOf([true])
});

const FormContact = () => {
  const { t } = useTranslation("contactForm");
  const captchaRef = useRef<HCaptcha>(null);
  const [showCaptchaModal, setShowCaptchaModal] = useState(false);
  const [formData, setFormData] = useState<typeof initialValues | null>(null);
  const [resetFormFn, setResetFormFn] = useState<(() => void) | null>(null);

  const handleRealSubmit = async (
    values: typeof initialValues,
    resetForm: () => void,
    token: string
  ) => {
    try {
      const payload = {
        access_key: "ab506acc-0964-4c4e-97be-9ce4afe03998",
        name: values.name,
        phone: values.phone,
        email: values.email,
        message: values.message,
        hcaptcha_response: token,
      };

      console.log("Sending payload to API:", payload);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();

      if (!response.ok) {
        console.error("API response not OK:", responseData);
        throw new Error(responseData.message || "Error sending the form");
      }

      console.log("Form submission success:", responseData);

      toast.warn(
        "The message has been sent successfully. We will contact you as soon as possible.",
        {
          icon: <span>📨</span>,
          position: "bottom-right",
          style: {
            backgroundColor: "#003380",
            color: "#fff",
            fontFamily: "Arimo",
          },
        }
      );

      resetForm();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("There was an error sending your message.");
    }
  };

  const handleSubmit = (
    values: typeof initialValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    setFormData(values);
    setResetFormFn(() => resetForm);
    setShowCaptchaModal(true);
  };

  const handleCaptchaChange = async (token: string | null) => {
    if (token && formData && resetFormFn) {
      await handleRealSubmit(formData, resetFormFn, token);
      setShowCaptchaModal(false);
    } else {
      toast.error("Please verify that you're not a robot. ", {
        icon: <span>🤖</span>,
        style: {
          backgroundColor: "#003380",
          color: "#fff",
          fontFamily: "Arimo",
        },
      });
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

              <div className="checkbox__item">
                <Field
                  type="checkbox"
                  name="consent1"
                  id="consent1"
                  className="checkbox"
                />
                <label
                  className={`checkbox__label ${
                    touched.consent1 && errors.consent1 ? "error-border" : ""
                  }`}
                  htmlFor="consent1"
                >
                  <p className="checkbox__text">{t("contactForm.consent")}</p>
                </label>
              </div>

              {showCaptchaModal && (
                <div className="captcha-modal">
                  <div
                    className="captcha-modal__overlay"
                    onClick={() => setShowCaptchaModal(false)}
                  />
                  <div className="captcha-modal__content">
                    <p className="captcha-modal__text">
                      Please confirm you're not a robot 🤖
                    </p>
                    <HCaptcha
                      sitekey="ab506acc-0964-4c4e-97be-9ce4afe03998"
                      onVerify={handleCaptchaChange}
                      onError={() =>
                        toast.error("hCaptcha verification failed.")
                      }
                      onExpire={() =>
                        toast.warning("hCaptcha expired. Please try again.")
                      }
                      ref={captchaRef}
                      languageOverride="en"
                    />
                  </div>
                </div>
              )}

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
