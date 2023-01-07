import cookie from "js-cookie";

const GetCookie = (cookieName) => {
  cookie.get(cookieName);
};
export default GetCookie;
