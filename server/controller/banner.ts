import type { H3Event } from 'h3'
import { ResponseMessage } from '~/config/message'

// banner

/**
 * 列表查询
 * @param event
 * @returns
 */
export const getList = async (event: H3Event) => {
    // 接口校验(是否登录)
    if (!event.context.user) return ResponseMessage.token

    // 获取参数
    const param = await getEventParams<{ type: number } & ListPage>(event)

    if (!param?.type) return { msg: '请传递类型' }

    const where: any = {
        type: param.type,
    }

    // 查询菜单姓"张"，1页显示20条
    let page: number | undefined
    let pageSize: number | undefined
    let pageSkip: number | undefined

    if (param?.isPage) {
        page = param.page || 1
        pageSize = param.pageSize || 20
        pageSkip = pageSize * (page - 1) || 0
    }

    const [res1, res2] = await Promise.all([
        event.context.prisma.link.findMany({
            skip: pageSkip,
            take: pageSize,
            where,
            orderBy: {
                sort: 'asc', // 按id正序排序
            },
            // include: {
            //     children: true,
            // },
            // select: { // 只返回指定的字段
            //     username: true,
            //     account: true,
            // },
        }),
        event.context.prisma.link.count({
            where,
        }),
    ])
    const list = res1.map((item) => {
        return {
            ...item,
            password: '',
        }
    })
    if (res1) {
        return { code: 200, data: { list, total: res2 } }
    } else {
        return { code: 400, message: '查询失败' }
    }
}

/**
 * 新增
 * @param event
 * @returns
 */
export const insert = async (event: H3Event) => {
    // 接口校验(是否登录)
    if (!event.context.user) return ResponseMessage.token

    // 获取参数
    const param = await getEventParams<BannerCreateParam>(event)
    // console.log('param-----', param)
    if (!param?.title) return { msg: '标题不能为空' }

    const res = await event.context.prisma.link.create({
        data: param,
    })

    if (res) {
        return { code: 200, msg: '添加成功' }
    } else {
        return { msg: '网络错误' }
    }
}

/**
 * 修改
 * @param event
 * @returns
 */
export const update = async (event: H3Event) => {
    // 接口校验(是否登录)
    if (!event.context.user) return ResponseMessage.token

    // 获取参数
    const param = await getEventParams<BannerCreateParamEdit>(event)
    // console.log('param-----', param)

    if (!param?.id) return { msg: '缺少参数id' }
    if (!param?.title) return { msg: '标题不能为空' }

    const res = await event.context.prisma.link.update({
        data: param,
        where: {
            id: param.id,
        },
    })

    if (res) {
        return { code: 200, msg: '修改成功' }
    } else {
        return { msg: '网络错误' }
    }
}

/**
 * 删除
 * @param event
 * @returns
 */
export const del = async (event: H3Event) => {
    // 接口校验(是否登录)
    if (!event.context.user) return ResponseMessage.token

    // 获取参数
    const param = await getEventParams<{ id: number }>(event)
    // console.log('param-----', param)

    if (!param?.id) return { msg: '缺少参数id' }

    const res = await event.context.prisma.link.delete({
        where: {
            id: param.id,
        },
    })

    if (res) {
        return { code: 200, msg: '删除成功' }
    } else {
        return { msg: '网络错误' }
    }
}
