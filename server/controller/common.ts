import { extname } from 'node:path'
import type { MultiPartData } from 'h3'

export const uploadFile = defineEventHandler(async (event) => {
    const dat = await getEventParams<{ file: MultiPartData }>(event)

    if (dat?.file && dat.file.filename) {
        const ext = extname(dat.file.filename) // .png

        const url = await createFile(ext, dat.file.data, true)
        if (!url) return { msg: '上传失败' }
        return { code: 200, data: url }
    } else {
        return { msg: '文件格式错误' }
    }
})
