import api from '../index';

const path = {
  statement: '/adsdetector/statement',
  productstatement: '/adsdetector/productstatement',
  websitestatement: '/adsdetector/websitestatement',
  adsetstatement: '/adsdetector/adsetstatement',
  campaignstatement: '/adsdetector/campaignstatement',
  statementist: '/adsdetector/statementist',
};

/**
 * 获取列表数据 - 概览
 * @param page
 * @param count
 * @param form
 * @returns {AxiosPromise<any>}
 */
const getStatement = (page, count, form) => api.get(path.statement, {
  params: {
    page,
    count,
    date: form.date,
    bu_name: form.bu_name,
  },
});

/**
 * 获取产品维度列表
 * @param page
 * @param count
 * @param form
 * @returns {AxiosPromise<any>}
 */
const getProductstatement = (page, count, form) => api.get(path.productstatement, {
  params: {
    page,
    count,
    date: form.date,
    bu_name: form.bu_name,
    product_id: form.product_id,
    product_name: form.product_name,
    category_id_level1: form.category_id_level1,
    targets: form.targets.length > 0 ? JSON.stringify(form.targets) : null,
    order: form.order,
  },
});

/**
 * 获取建站URL维度列表
 * @param page
 * @param count
 * @param form
 * @returns {AxiosPromise<any>}
 */
const getWebsitestatement = (page, count, form) => api.get(path.websitestatement, {
  params: {
    page,
    count,
    date: form.date,
    bu_name: form.bu_name,
    product_id: form.product_id,
    product_name: form.product_name,
    short_url: form.short_url,
    member_id: form.member_id,
    category_id_level1: form.category_id_level1,
    targets: form.targets.length > 0 ? JSON.stringify(form.targets) : null,
    order: form.order,
  },
});


const getCampaignstatement = (page, count, form) => api.get(path.campaignstatement, {
  params: {
    page,
    count,
    date: form.date,
    bu_name: form.bu_name,
    product_id: form.product_id,
    product_name: form.product_name,
    short_url: form.short_url,
    member_id: form.member_id,
    campaign_id: form.campaign_id,
    campaign_name: form.campaign_name,
    targets: form.targets.length > 0 ? JSON.stringify(form.targets) : null,
    order: form.order,
  },
});

/**
 * 获取广告组数据
 * @param page
 * @param count
 * @param form
 * @returns {AxiosPromise<any>}
 */
const getAdsetstatement = (page, count, form) => api.get(path.adsetstatement, {
  params: {
    page,
    count,
    date: form.date,
    bu_name: form.bu_name,
    product_id: form.product_id,
    product_name: form.product_name,
    short_url: form.short_url,
    member_id: form.member_id,
    campaign_id: form.campaign_id,
    campaign_name: form.campaign_name,
    adset_id: form.adset_id,
    adset_name: form.adset_name,
    targets: form.targets.length > 0 ? JSON.stringify(form.targets) : null,
    order: form.order,
  },
});

const getStatementist = () => api.get(path.statementist);

export default {
  getStatement,
  getProductstatement,
  getWebsitestatement,
  getCampaignstatement,
  getAdsetstatement,
  getStatementist,
};
