import { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";
import { mockAuth } from "../../app/modules/auth";
import { mockTeachers } from "../../app/pages/teachers/modules/__mocks__/mockTeachers";

export default function mockAxios(axios: AxiosInstance) {
  const mock = new MockAdapter(axios, { delayResponse: 300 });
  mockAuth(mock);
  mockTeachers(mock);
  return mock;
}
