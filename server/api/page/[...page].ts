import { createRouter, defineEventHandler, useBase } from 'h3'
import { getAboutInfo, getBannerList, getIndexData, getMenuList, getNewsInfo, getProductInfo, getSystemInfo } from '~/server/controller/page'
import { getNewsList } from '~/server/controller/news'
import { getProductList } from '~/server/controller/product'

const router = createRouter()

router.use('/get_system', getSystemInfo) // 获取系统信息
router.use('/get_menu', getMenuList) // 获取菜单
router.use('/get_banner', getBannerList) // 获取轮播图
router.use('/get_links', getBannerList) // 获取友情链接
router.use('/about', getAboutInfo) // 关于我们、联系我们数据
router.use('/news', getNewsList) // 获取新闻列表
router.use('/news/detail', getNewsInfo) // 获取新闻详情

router.use('/product', getProductList) // 获取商品列表
router.use('/product/detail', getProductInfo) // 获取商品详情
router.use('/index', getIndexData) // 获取首页模块信息

export default useBase('/api/page', router.handler)
