import { mockTeachersTable } from "./mockTeachersTable";

export function mockTeachers(mock) {
  mock.onPost("test/api").reply((config) => {
    let teacher_count = mockTeachersTable.table.length;
    teacher_count++;
    const data = JSON.parse(config.data);

    const teacher = {
        id: teacher_count,
        birthday: data.birthday,
        educational_attainment: data.educational_attainment,
        first_name: data.first_name,
        middle_name: data.middle_name,
        last_name: data.last_name,
        reason: data.reason,
        subject_taught: data.subject_taught,
        teacher_id: data.teacher_id,
        vaccine_status: data.vaccine_status,
      };
      mockTeachersTable.table.push(teacher);

    return [200, mockTeachersTable.table];
  });

  mock.onGet("teacher/list").reply((config) => {
    return [200, mockTeachersTable.table]
  });
}
