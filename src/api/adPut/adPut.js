import api from '../index';

const path = {
  searchData: '/fbad/getinterestinfos',
  setAll: '/fbaccount/transformjson',
  searchRecommend: '/fbad/getinteresttypes',
  getAdId: '/fbaccount/newpages',
  searchAcc: '/fbadoper/getaccountinfobyurl',
};

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
 * 获取url对应的像素与账号
 * @param
 */
const searchAcc = url => api.get(path.searchAcc, {
  params: {
    short_url: url,
  },
});

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
 * 获取主页ID
 * @param
 */
const getAdId = () => api.get(path.getAdId);
/**
 * 提交
 * @param
 */
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
  searchData,
  searchAcc,
  setAll,
  searchRecommend,
  getAdId,
};
