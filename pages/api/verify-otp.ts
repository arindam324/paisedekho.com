import {NextApiRequest, NextApiResponse} from "next";
import {prisma} from '../../utils/Prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const {email, otp} = req.body
    try {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        // if (user?.otp === otp) {
        //     await prisma.user.update({
        //         where: {
        //             email
        //         },
        //         data: {
        //             isVerified: true
        //         }
        //     })
        // }


    } catch (e) {
        console.error(e)
    }
}

export default handler