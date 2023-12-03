/* eslint-disable no-unused-vars */
import * as yup from "yup"

const commentSchema = yup.object().shape({
        name: yup.string()
                .min(2, 'Too Short!')
                .max(20, 'Too Long!')
                .required('Required'),
        email: yup.string()
                .email('Invalid email')
                .required('Required'),
        subject :yup.string()
                .min(2, 'Too Short!')
                .max(20, 'Too Long!')
                .required('Required'),
        comment:yup.string()
                .min(20,"too shotr")
                .max(100,"too long")
                .required("Required")
    });

export default commentSchema;