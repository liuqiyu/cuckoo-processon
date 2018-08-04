import api from './index';

const path = {
  // 登录
  login: '/user/login',
  // 注销
  logout: '/user/logout',
};

const login = (form) => api.post(path.login, form, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  transformRequest: [function (data) {
    // Do whatever you want to transform the data
    let ret = '';
    for(let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    const newRet = ret.slice(0, ret.length - 1);
    return newRet;
  }]
});

const logout = () => api.get(path.logout);

// const updatePassword = (form) => api.get(path.updatePassword, {
//   params: {
//     old_password: form.old_password,
//     new_password: form.new_password,
//     check_new_password: form.check_new_password,
//   },
// });

export default {
  login,
  logout,
};
