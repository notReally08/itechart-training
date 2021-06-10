import "./editTaskForm.less";
import React, { useCallback, useState } from "react";
import { Formik, Field, Form } from "formik";
import { validateForm } from "../../features/validation/validateForm";
import { useDispatch } from "react-redux";
import { editTaskText } from "../../redux/actions/editTaskText";

export const EditTaskForm = props => {
  const dispatch = useDispatch();
  const { setEditable, text, id } = props;
  const [value, setValue] = useState(text);

  return (
    <Formik
      initialValues={{
        taskTextEdited: ""
      }}
      onSubmit={
        useCallback(
        (values, { setSubmitting }) => {
          const taskObject = {
            id,
            text: value
          }
          dispatch(editTaskText(taskObject))
            .then(() => setSubmitting(false))
            .then(() => setEditable(false))
        }, [dispatch, id, setEditable, value]
      )}
    >
       {({ isSubmitting, errors, touched }) => (
         <Form className="edit-task-form">
           <Field
            name="taskTextEdited"
            validate={ () => validateForm(value) } 
            onChange={ (e) => setValue(e.target.value) }
            value={ value } 
            autoFocus={ true }
            className="edit-task-form__input"
            />
           {errors.taskTextEdited && touched.taskTextEdited && <span className="error-message edit-task-form__error">{errors.taskTextEdited}</span>}

           <button className="edit-task-form__button" type="submit" disabled={ isSubmitting }>Save</button>
         </Form>
       )}
    </Formik>
  );
}