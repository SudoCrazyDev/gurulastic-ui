import { KTSVG } from "../../../../../_metronic/helpers";
import * as Yup from "yup";
import { useFormik } from "formik";

const TeacherSchema = Yup.object({
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

export default function EditTeacher() {
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

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    validationSchema: TeacherSchema,
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
        Edit Teacher
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
                  <div class="col-12 my-1">
                    <label for="teacher_id" class="form-label">
                      Employee ID #
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      name="teacher_id"
                      id="teacher_id"
                      aria-describedby="teacher_id"
                      onChange={formik.handleChange}
                      onblur={formik.handleBlur}
                    />
                    {formik.errors.teacher_id ? (
                      <div class="form-text text-danger">
                        {formik.errors.teacher_id}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div class="col-6 my-1">
                    <label for="first_name" class="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="first_name"
                      aria-describedby="first_name"
                      onChange={formik.handleChange}
                      onblur={formik.handleBlur}
                    />
                    {formik.errors.first_name ? (
                      <div class="form-text text-danger">
                        {formik.errors.first_name}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div class="col-6 my-1">
                    <label for="middle_name" class="form-label">
                      Middle Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="middle_name"
                      aria-describedby="middle_name"
                      onChange={formik.handleChange}
                      onblur={formik.handleBlur}
                    />
                    {formik.errors.middle_name ? (
                      <div class="form-text text-danger">
                        {formik.errors.middle_name}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div class="col-12 my-1">
                    <label for="last_name" class="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="last_name"
                      aria-describedby="last_name"
                      onChange={formik.handleChange}
                      onblur={formik.handleBlur}
                    />
                    {formik.errors.last_name ? (
                      <div class="form-text text-danger">
                        {formik.errors.last_name}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div class="col-6 my-1">
                    <label for="gender" class="form-label">
                      Gender
                    </label>
                    <select
                      id="gender"
                      class="form-select"
                      aria-label="Default select example"
                      onChange={formik.handleChange}
                      onblur={formik.handleBlur}
                    >
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                    </select>
                  </div>
                  <div class="col-6 my-1">
                    <label for="birthday" class="form-label">
                      Birthday
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      id="birthday"
                      aria-describedby="birthday"
                      onChange={formik.handleChange}
                      onblur={formik.handleBlur}
                    />
                  </div>
                  <div class="col-12 my-1">
                    <label for="subject_taught" class="form-label">
                      Subject Taught
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="subject_taught"
                      aria-describedby="subject_taught"
                      onChange={formik.handleChange}
                      onblur={formik.handleBlur}
                    />
                    {formik.errors.subject_taught ? (
                      <div class="form-text text-danger">
                        {formik.errors.subject_taught}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div class="col-12 my-1">
                    <label for="educational_attainment" class="form-label">
                      Highest Educational Attainment
                    </label>
                    <select
                      id="educational_attainment"
                      class="form-select"
                      aria-label="Default select example"
                      onChange={formik.handleChange}
                      onblur={formik.handleBlur}
                    >
                      <option value="Bachelor">Bachelor's Degree</option>
                      <option value="Masters">Masters Degreee</option>
                      <option value="Doctorate">Doctorate Degreee</option>
                    </select>
                  </div>
                  <div class="col-12 my-1">
                    <label for="vaccine_status" class="form-label">
                      Vaccine Status
                    </label>
                    <select
                      id="vaccine_status"
                      class="form-select"
                      aria-label="Default select example"
                      onChange={formik.handleChange}
                      onblur={formik.handleBlur}
                    >
                      <option value="Vaccinated">Vaccinated</option>
                      <option value="Non-Vaccinated">Non-Vaccinated</option>
                      <option value="Booster">Booster</option>
                    </select>
                  </div>
                  {formik.values.vaccine_status === "Non-Vaccinated" ? (
                    <div class="col-12 my-1">
                      <label for="reason" class="form-label">
                        NOT VACCINATED (STATE REASON)
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="reason"
                        aria-describedby="reason"
                        onChange={formik.handleChange}
                        onblur={formik.handleBlur}
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
