import "@testing-library/jest-dom";

jest.mock("@mui/material/Modal", () => {
  return ({ children, open }) => (open ? <div>{children}</div> : null);
});
