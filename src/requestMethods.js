import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDMxNTdhMjkzZGIzYWViZDRjY2E1YSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjUzOTc2NDcsImV4cCI6MTY2NTY1Njg0N30.nW5U5Cr4rp-Tb3TXsht2tRjfuZkBduyTp7mBCF2LRIA";

export const publicRequest = axios.create({
    baseURL : BASE_URL
});

export const userRequest = axios.create({
    baseURL : BASE_URL,
    header : {token : `Bearer ${TOKEN}`}
});

// github
// import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/";
// // const TOKEN =
// //   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
// //     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

// export const publicRequest = axios.create({
//   baseURL: BASE_URL,
// });

// export const userRequest = axios.create({
//   baseURL: BASE_URL,
//   header: { token: `Bearer ${TOKEN}` },
// });
