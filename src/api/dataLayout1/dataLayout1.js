import api from '../index';

const path = {
  setAll: '/fbad/autojson',
};

const setAll = form => api.post(path.setAll, form, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  transformRequest: [(data) => {
  // Do whatever you want to transform the data
    let ret = '';
    const keys = Object.keys(data);
    keys.forEach((key) => {
      ret += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}&`;
    });
    const newRet = ret.slice(0, ret.length - 1);
    return newRet;
  }],
});

export default {
  setAll,
};
