import api from '../index';

const path = {
  searchRecommend: '/fbad/getinterestsrecommend',
  searchData: '/fbad/getinterestsinfos',
};

/**
 * 获取品类列表
 * @param
 */
const searchData = categoryName => api.get(path.searchData, {
  params: {
    interests_name: categoryName,
  },
});

/**
 * 获取推荐品类
 * @param
 */
const searchRecommend = categoryName => api.get(path.searchRecommend, {
  params: {
    interests_name: categoryName,
  },
});

export default {
  searchData,
  searchRecommend,
};
