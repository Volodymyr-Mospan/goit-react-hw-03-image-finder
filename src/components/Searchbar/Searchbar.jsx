import { Formik } from 'formik';
import {
  SearchHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonIcon,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSabmit }) => {
  return (
    <SearchHeader>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, actions) => {
          onSabmit(values);
          actions.resetForm();
        }}
      >
        <SearchForm>
          <SearchFormInput
            name="query"
            placeholder="Search images and photos"
          />
          <SearchFormButton type="submit">
            <SearchFormButtonIcon aria-label="Search" />
          </SearchFormButton>
        </SearchForm>
      </Formik>
    </SearchHeader>
  );
};
