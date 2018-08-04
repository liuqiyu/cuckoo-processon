import api from '../index';
import config from '../../global/config';

const path = {
  lists: 'adsdetector/typestatement',
  detailList: '/adsdetector/geturldetail',
};

/**
 * 获取列表数据
 * @param page
 * @param date
 * @returns {AxiosPromise<any>}
 */
const getLists = (page, date) => api.get(path.lists, {
  params: {
    page,
    date,
  },
});

/**
 * 获取列表数据
 * @param page
 * @param type_cd string (enum: A,B,C,D,E)
 * @param stat_dt date (demo:2018/07/21)
 */
const getDetailLists = (page, count, form) => api.get(path.detailList, {
  params: {
    page,
    count,
    type_cd: form.type_cd,
    stat_dt: form.stat_dt,
  },
});

/**
 * 更新状态
 * @param form
 * @returns {AxiosPromise<any>}
 */
const up = form => api.post(path.up, form, {
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
 * 导出
 * @param form
 * @returns {AxiosPromise<any>}
 */
const exportData = (data) => {
  const sessionId = config.getSession();
  let url = `${config.apiHost}/${path.upload}?`;
  url += `session_id=${sessionId}&type_id=${data.type_id}&facebook_account_id=${data.facebook_account_id}&fb_id=${data.fb_id}&fb_name=${data.fb_name}&event_id=${data.event_id}&status_id=${data.status_id}&handle_dt=${data.handle_dt}&stat_dt=${data.stat_dt}&priority_level=${data.priority_level}`;
  return url;
};

export default {
  getLists,
  getDetailLists,
  up,
  exportData,
};
