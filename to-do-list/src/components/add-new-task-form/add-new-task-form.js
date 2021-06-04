import React from "react";
import { useDispatch } from "react-redux";
import { addNewTask } from "./../../redux/tasks/task-list-slice";
import { Formik, Field, Form } from "formik";
import { vallidateTaskText } from "./../../features/validation/validate-task-text";

export const AddNewTaskForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        taskText: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        const taskObject = {
          text: values.taskText,
          status: false
        }
        dispatch(addNewTask(taskObject)).then(() => setSubmitting(false));
      }}
    >
       {({isSubmitting, errors, touched}) => (
         <Form>
           <Field name="taskText" validate={vallidateTaskText} />
           {errors.taskText && touched.taskText && <div>{errors.taskText}</div>}
 
           <button type="submit" disabled={isSubmitting}>Submit</button>
         </Form>
       )}
    </Formik>
  )
}