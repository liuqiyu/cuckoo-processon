import api from '../index';

const path = {
  searchBatch: '/fbaccount/getsearch',
  getLists: '/fbaccount/getadsbyname',
  getAdId: '/fbaccount/newpages',
  update: '/fbaccount/updateadbyid',
  remarkSubmit: '/fbaccount/updateadbytype',
  searchAcc: '/fbadoper/getaccountinfobyurl',
};

const searchBatch = () => api.get(path.searchBatch);


/**
 * 获取列表数据
 * @param page
 * @param form
 * @returns {AxiosPromise<any>}
 */
const getLists = (page, form) => api.get(path.getLists, {
  params: {
    page,
    account_id: form.account_id,
    page_id: form.page_id,
    post_id: form.post_id,
    auto_type: form.auto_type,
    ower_name: form.ower_name,
    version_tag: form.version_tag,
    status: form.status,
    short_url: form.short_url,
  },
});

/**
 * 获取url对应的像素与账号
 * @param
 */
const searchAcc = url => api.get(path.searchAcc, {
  params: {
    short_url: url,
  },
});

/**
 * 获取主页ID
 * @param
 */
const getAdId = () => api.get(path.getAdId);

/**
 * 编辑提交
 * @param
 */
const update = form => api.post(path.update, form, {
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
const remarkSubmit = form => api.post(path.remarkSubmit, form, {
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
  getLists,
  getAdId,
  update,
  remarkSubmit,
  searchAcc,
};
