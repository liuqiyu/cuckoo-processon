import api from '../index';

const path = {
  searchBatch: '/fbaccount/getsearch',
  getLists: '/fbadoper/getoptimizeinfo',
  getAdId: '/fbaccount/newpages',
  update: '/fbadoper/optimize',
  searchAcc: '/fbadoper/getaccountinfobyurl',
  // ss
  searchData: '/fbad/getinterestinfos',
  searchRecommend: '/fbad/getinteresttypes',
};

const searchBatch = () => api.get(path.searchBatch);


/**
 * 获取推荐品类
 * @param
 */
const searchRecommend = categoryName => api.get(path.searchRecommend, {
  params: {
    category_name: categoryName,
  },
});

/**
 * 获取品类列表
 * @param
 */
const searchData = categoryName => api.get(path.searchData, {
  params: {
    category_name: categoryName,
  },
});

/**
 * 获取列表数据
 * @param page
 * @param form
 * @returns {AxiosPromise<any>}
 */
const getLists = (page, form) => api.get(path.getLists, {
  params: {
    page,
    old_account_id: form.old_account_id,
    old_short_url: form.old_short_url,
    status: form.status,
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
export default {
  searchBatch,
  getLists,
  getAdId,
  update,
  searchData,
  searchAcc,
  searchRecommend,
};
