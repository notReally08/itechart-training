import "./addNewTaskForm.less";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addNewTask } from "../../redux/actions/addNewTask";
import { Formik, Field, Form } from "formik";
import { validateForm } from "../../features/validation/validateForm";

export const AddNewTaskForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        taskText: ""
      }}
      onSubmit={
        useCallback(
        (values, { setSubmitting }) => {
          setSubmitting(true);
          const taskObject = {
            text: values.taskText,
            status: false
          };
          dispatch(addNewTask(taskObject)).then(() => setSubmitting(false));
        },
        [dispatch]
      )}
    >
       {({ isSubmitting, errors, touched }) => (
         <Form className="add-task-form">
           <Field name="taskText" validate={ validateForm } className="add-task-form__input"/>
           {errors.taskText && touched.taskText && <span className="error-message">{ errors.taskText }</span>}

           <button type="submit" disabled={ isSubmitting } className="add-task-form__button">Submit</button>
         </Form>
       )}
    </Formik>
  );
}