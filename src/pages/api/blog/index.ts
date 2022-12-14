import type { NextApiRequest, NextApiResponse } from 'next'
import { loadBlogs } from "@utils/blogs"

async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { page = 0, limit = 18 } = req.query;
        const pageOptions = {
            page: parseInt(page as string),
            limit: parseInt(limit as string)
        }
        const data = await loadBlogs({ page: pageOptions.page, limit: pageOptions.limit })
        res.json(data)
    } catch (error: unknown) {
        const { message } = error as Error;
        res.status(400).json({ success: false, error: message })
    }
}

export default handler;


