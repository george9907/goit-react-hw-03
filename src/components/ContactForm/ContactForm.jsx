import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from 'nanoid'
import css from "./ContactForm.module.css"

const UserSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Мінімум 3 символи!")
        .max(51, "Максимум 50 символів!")
        .required("Це обов'язкове поле!"),
    number: Yup.string()
        .min(6, "Мінімум 6 символів!")
        .required("Це обов'язкове поле!"),
});

export default function ContactForm({ onAdd }) {

    const handleSubmit = (values, actions) => {
        onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
        actions.resetForm();
    };

    const fieldId = useId();

     
    return (
        <Formik
            initialValues={{
                name: "",
                number:""
            }}
            validationSchema={UserSchema}
            onSubmit={handleSubmit}
        >
        <Form className={css.form}>
            <div className={css.formGroup}>
                <label htmlFor={`${fieldId}-name`}>Name</label>
                    <Field className={css.input} type="text" name="name" id={`${fieldId}-name`} />
                    <ErrorMessage className={css.error} name="name" component="span"/>
                </div>
                 <div className={css.formGroup}>
                <label htmlFor={`${fieldId}-number`}>Number</label>
                    <Field className={css.input} type="tel" name="number" id={`${fieldId}-number`} />
                    <ErrorMessage className={css.error} name="number" component="span"/>
            </div>
            <button className={css.button} type="submit">Add contact</button>
            </Form>
            </Formik>
    )}