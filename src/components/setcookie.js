import cookie from "js-cookie";

const SetCookie = (cookieName, usrin) => {
  cookie.set(cookieName, usrin, {
    expires: 1,
    secure: true,
    sameSite: "strict",
    path: "/login",
  });
};
export default SetCookie;
