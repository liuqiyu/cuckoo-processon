import api from '../index';

const path = {
  searchBatch: '/fbaccount/getsearch',
  searchData: '/fbaccount/getadinfo',
  sucSubmit: '/fbaccount/updateadsinfo',
  verifySubmit: '/fbaccount/checkads',
  dataSubmit: '/fbad/generatejson',
  changeBatchSubmit: '/fbadoper/upadbatchstatus',
  discardSubmit: '/fbadoper/upaddiscarddb',
  failSubmit: '/fbaccount/updateadinfo',
};

const searchBatch = () => api.get(path.searchBatch);

/**
 * 获取品类列表
 * @param
 */
const searchData = campaignName => api.get(path.searchData, {
  params: {
    campaign_name: campaignName,
  },
});

/**
 * 核实广告
 * @param
 */
const verifySubmit = form => api.post(path.verifySubmit, form, {
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

/**
 * 资料生成
 * @param
 */
const dataSubmit = form => api.post(path.dataSubmit, form, {
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

/**
 * 成功提交
 * @param
 */
const sucSubmit = form => api.post(path.sucSubmit, form, {
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

/**
 * 更改批次状态
 * @param
 */
const changeBatchSubmit = form => api.post(path.changeBatchSubmit, form, {
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

/**
 * 更改批次状态
 * @param
 */
const discardSubmit = form => api.post(path.discardSubmit, form, {
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

/**
 * 失败提交
 * @param
 */
const failSubmit = form => api.post(path.failSubmit, form, {
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
  searchBatch,
  searchData,
  failSubmit,
  sucSubmit,
  verifySubmit,
  dataSubmit,
  changeBatchSubmit,
  discardSubmit,
};
