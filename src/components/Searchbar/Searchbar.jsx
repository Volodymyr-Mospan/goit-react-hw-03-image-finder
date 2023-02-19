import { Field, Form, Formik } from 'formik';

export const Searchbar = ({ onSabmit }) => {
  return (
    <Formik
      initialValues={{ query: '' }}
      onSubmit={(values, actions) => {
        onSabmit(values);
      }}
    >
      <Form>
        <Field name="query" placeholder="Search images and photos" />
        <button type="submit">Serch</button>
      </Form>
    </Formik>
  );
};
