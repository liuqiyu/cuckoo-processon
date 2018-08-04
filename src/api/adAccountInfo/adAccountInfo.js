import api from '../index';

const path = {
  getallspendinfos: '/fbaccount/getallspendinfos',
  getallaccountbalance: '/fbaccount/getallaccountbalance',
  getaccountspendinfobyid: '/fbaccount/getaccountspendinfobyid',
};

const getallspendinfos = form => api.get(path.getallspendinfos, {
  params: {
    date: form.date,
  },
});

const getallaccountbalance = (page, count, form) => api.get(path.getallaccountbalance, {
  params: {
    page,
    count,
    date: form.date,
  },
});

const getaccountspendinfobyid = form => api.get(path.getaccountspendinfobyid, {
  params: {
    facebook_account_id: form.facebook_account_id,
    date: form.date,
  },
});

export default {
  getallspendinfos,
  getallaccountbalance,
  getaccountspendinfobyid,
};
