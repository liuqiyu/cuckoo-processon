import api from '../index';

const path = {
  getData: '/fbaccount/getallaccountinfos',
  updateaccountbalance: '/fbaccount/updateaccountbalance',
};

const getData = () => api.get(path.getData);

const updateaccountbalance = form => api.get(path.updateaccountbalance, {
  params: {
    id: form.id,
    available: form.available,
  },
});

export default {
  getData,
  updateaccountbalance,
};
