import cookie from "js-cookie";

const RemoveCookie = (cookieName) => {
  cookie.remove(cookieName);
};
export default RemoveCookie;
