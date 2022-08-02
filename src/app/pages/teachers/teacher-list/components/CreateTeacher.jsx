import { KTSVG } from "../../../../../_metronic/helpers";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";

const createTeacherSchema = Yup.object({
  teacher_id: Yup.number()
    .typeError("Must be a number")
    .required("Teacher ID is required"),
  first_name: Yup.string().required("First Name is Required"),
  last_name: Yup.string().required("Last Name is Required"),
  subject_taught: Yup.string().required("Subject Taught Required"),
  gender: Yup.string(),
  birthday: Yup.string(),
  educational_attainment: Yup.string(),
  vaccine_status: Yup.string(),
  reason: Yup.string(),
});

const initialValues = {
  teacher_id: "",
  first_name: "",
  middle_name: "",
  last_name: "",
  gender: "",
  birthday: "",
  subject_taught: "",
  educational_attainment: "",
  vaccine_status: "",
  reason: "",
};

export default function CreateTeacher({setTeachers}) {
  const onSubmit = (values) => {
    axios.post("test/api", values)
    .then((res) => {
      setTeachers(res.data);
      console.log(res);
    });
  };

  const formik = useFormik({
    initialValues,
    validateonBlur: true,
    validationSchema: createTeacherSchema,
    onSubmit,
  });

  return (
    <>
      <button
        type="button"
        className="btn btn-primary align-self-center"
        data-bs-toggle="modal"
        data-bs-target="#kt_modal_1"
      >
        Create Teacher
      </button>

      <form className="w-100" onSubmit={formik.handleSubmit}>
        <div className="modal fade" tabIndex={-1} id="kt_modal_1">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Teacher</h5>
                <div
                  className="btn btn-icon btn-sm btn-active-light-primary ms-2"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <KTSVG
                    path="/media/icons/duotone/Navigation/Close.svg"
                    className="svg-icon svg-icon-2x"
                  />
                </div>
              </div>

              <div className="modal-body">
                <div className="row">
                  <div className="col-12 my-1">
                    <label htmlFor="teacher_id" className="form-label">
                      Employee ID #
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="teacher_id"
                      id="teacher_id"
                      aria-describedby="teacher_id"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.teacher_id ? (
                      <div className="form-text text-danger">
                        {formik.errors.teacher_id}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-6 my-1">
                    <label htmlFor="first_name" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="first_name"
                      aria-describedby="first_name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.first_name ? (
                      <div className="form-text text-danger">
                        {formik.errors.first_name}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-6 my-1">
                    <label htmlFor="middle_name" className="form-label">
                      Middle Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="middle_name"
                      aria-describedby="middle_name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.middle_name ? (
                      <div className="form-text text-danger">
                        {formik.errors.middle_name}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-12 my-1">
                    <label htmlFor="last_name" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="last_name"
                      aria-describedby="last_name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.last_name ? (
                      <div className="form-text text-danger">
                        {formik.errors.last_name}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-6 my-1">
                    <label htmlFor="gender" className="form-label">
                      Gender
                    </label>
                    <select
                      id="gender"
                      className="form-select"
                      aria-label="Default select example"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                    </select>
                  </div>
                  <div className="col-6 my-1">
                    <label htmlFor="birthday" className="form-label">
                      Birthday
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="birthday"
                      aria-describedby="birthday"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <div className="col-12 my-1">
                    <label htmlFor="subject_taught" className="form-label">
                      Subject Taught
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject_taught"
                      aria-describedby="subject_taught"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.subject_taught ? (
                      <div className="form-text text-danger">
                        {formik.errors.subject_taught}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-12 my-1">
                    <label htmlFor="educational_attainment" className="form-label">
                      Highest Educational Attainment
                    </label>
                    <select
                      id="educational_attainment"
                      className="form-select"
                      aria-label="Default select example"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value="Bachelor">Bachelor's Degree</option>
                      <option value="Masters">Masters Degreee</option>
                      <option value="Doctorate">Doctorate Degreee</option>
                    </select>
                  </div>
                  <div className="col-12 my-1">
                    <label htmlFor="vaccine_status" className="form-label">
                      Vaccine Status
                    </label>
                    <select
                      id="vaccine_status"
                      className="form-select"
                      aria-label="Default select example"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value="Vaccinated">Vaccinated</option>
                      <option value="Non-Vaccinated">Non-Vaccinated</option>
                      <option value="Booster">Booster</option>
                    </select>
                  </div>
                  {formik.values.vaccine_status === "Non-Vaccinated" ? (
                    <div className="col-12 my-1">
                      <label htmlFor="reason" className="form-label">
                        NOT VACCINATED (STATE REASON)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="reason"
                        aria-describedby="reason"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="reset"
                  className="btn btn-light"
                  data-bs-dismiss="modal"
                  onClick={(e) => formik.resetForm()}
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
