import api from '../index';

const path = {
  statementchart: '/adsdetector/statementchart',
  productstatementchart: '/adsdetector/productstatementchart',
  websitestatementchart: '/adsdetector/websitestatementchart',
  campaignstatementchart: '/adsdetector/campaignstatementchart',
  adsetstatementchart: '/adsdetector/adsetstatementchart',
};

/**
 * 获取charts - 概览
 * @param form
 * @returns {AxiosPromise<any>}
 */
const getStatementchart = form => api.get(path.statementchart, {
  params: {
    date: form.date,
    bu_name: form.bu_name,
  },
});


/**
 * 获取charts - 产品
 * @param form
 * @returns {AxiosPromise<any>}
 */
const getProductstatementchart = form => api.get(path.productstatementchart, {
  params: {
    date: form.date,
    bu_name: form.bu_name,
    product_id: form.product_id,
    product_name: form.product_name,
  },
});

/**
 * 获取charts - URL
 * @param form
 * @returns {AxiosPromise<any>}
 */
const getWebsitestatementchart = form => api.get(path.websitestatementchart, {
  params: {
    date: form.date,
    bu_name: form.bu_name,
    product_id: form.product_id,
    product_name: form.product_name,
    short_url: form.short_url,
    member_id: form.member_id,
  },
});

/**
 * 获取charts - 广告系列
 * @param form
 * @returns {AxiosPromise<any>}
 */
const getCampaignstatementchart = form => api.get(path.campaignstatementchart, {
  params: {
    date: form.date,
    bu_name: form.bu_name,
    product_id: form.product_id,
    product_name: form.product_name,
    short_url: form.short_url,
    member_id: form.member_id,
    campaign_id: form.campaign_id,
    campaign_name: form.campaign_name,
  },
});

/**
 * 获取charts - 广告组
 * @param form
 * @returns {AxiosPromise<any>}
 */
const getAdsetstatementchart = form => api.get(path.adsetstatementchart, {
  params: {
    date: form.date,
    bu_name: form.bu_name,
    product_id: form.product_id,
    product_name: form.product_name,
    short_url: form.short_url,
    member_id: form.member_id,
    adset_id: form.adset_id,
    adset_name: form.adset_name,
  },
});

export default {
  getStatementchart,
  getProductstatementchart,
  getWebsitestatementchart,
  getCampaignstatementchart,
  getAdsetstatementchart,
};
