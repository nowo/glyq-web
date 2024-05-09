import { createRouter, defineEventHandler, useBase } from 'h3'
import { uploadFile } from '~/server/controller/common'
import { getSystemInfo, setSystemInfo } from '~/server/controller/system'
import { getBannerList, setBannerCreate, setBannerDelete, setBannerUpdate } from '~/server/controller/banner'

import { getAdminList, getLoginInfo, setAdminCreate, setAdminDelete, setAdminUpdate, setLoginSign, setPasswordUpdate, setRegister } from '~/server/controller/admin'
import { createToken } from '~/server/utils/token'
import { getMenuList, setMenuCreate, setMenuDelete, setMenuUpdate } from '~/server/controller/menu'
import { getProductList, setProductCreate, setProductDelete, setProductUpdate } from '~/server/controller/product'
import { getNewsList, setNewsCreate, setNewsDelete, setNewsUpdate } from '~/server/controller/news'
import { getOtherInfo, setOtherUpdate } from '~/server/controller/other'

const router = createRouter()

router.use('/common/upload', uploadFile) // 文件上传
router.use('/system/info', getSystemInfo) // 获取系统信息
// router.use('/system/info', defineEventHandler(event => getSystemInfo(event))) // 获取系统信息
router.use('/system/edit', setSystemInfo) // 修改系统信息

router.use('/admin/get_list', getAdminList) // 获取用户列表
router.use('/admin/add', setAdminCreate) // 添加用户
router.use('/admin/edit', setAdminUpdate) // 修改用户
router.use('/admin/delete', setAdminDelete) // 删除用户

// 登录相关 ///////////////////////////////////
router.use('/admin/login', setLoginSign) // 用户登录
router.use('/admin/signup', setRegister) // 注册
router.use('/admin/edit_password', setPasswordUpdate) // 修改密码
router.use('/admin/info', getLoginInfo) // 获取登录用户信息

// 、、、//////////////////////////////////////////////////
router.use('/banner/get_list', getBannerList) // 获取轮播图列表
router.use('/banner/add', setBannerCreate) // 添加轮播图
router.use('/banner/edit', setBannerUpdate) // 修改轮播图
router.use('/banner/delete', setBannerDelete) // 删除轮播图
// 菜单
router.use('/menu/get_list', getMenuList) // 获取菜单列表
router.use('/menu/add', setMenuCreate) // 添加菜单
router.use('/menu/edit', setMenuUpdate) // 修改菜单
router.use('/menu/delete', setMenuDelete) // 删除菜单
// 产品
router.use('/product/get_list', getProductList) // 获取产品列表
router.use('/product/add', setProductCreate) // 添加产品
router.use('/product/edit', setProductUpdate) // 修改产品
router.use('/product/delete', setProductDelete) // 删除产品
// 新闻
router.use('/news/get_list', getNewsList) // 获取新闻列表
router.use('/news/add', setNewsCreate) // 添加新闻
router.use('/news/edit', setNewsUpdate) // 修改新闻
router.use('/news/delete', setNewsDelete) // 删除新闻

// 其他
router.use('/other/info', getOtherInfo) // 获取关于我们、联系我们的内容
router.use('/other/edit', setOtherUpdate) // 修改关于我们、联系我们的内容

export default useBase('/api/v1', router.handler)
