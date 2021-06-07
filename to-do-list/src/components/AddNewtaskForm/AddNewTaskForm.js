import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addNewTask } from "../../redux/actions/addNewTask";
import { Formik, Field, Form } from "formik";
import { vallidate } from "../../features/validation/validate";

export const AddNewTaskForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        taskText: "",
      }}
      onSubmit={useCallback(
        ( values, { setSubmitting } ) => {
          const taskObject = {
            text: values.taskText,
            status: false
          }
          dispatch(addNewTask(taskObject)).then(setSubmitting(false));
        },
        [dispatch]
      )}
    >
       {({isSubmitting, errors, touched}) => (
         <Form>
           <Field name="taskText" validate={vallidate} />
           {errors.taskText && touched.taskText && <div>{errors.taskText}</div>}
 
           <button type="submit" disabled={isSubmitting}>Submit</button>
         </Form>
       )}
    </Formik>
  );
}