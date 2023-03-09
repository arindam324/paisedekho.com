import {prisma} from '../../../utils/Prisma'
import {NextApiRequest, NextApiResponse} from "next";
import isPhoneNumber from "../../../utils/isphoneNumber";
import isEmail from "../../../utils/isEmail";
import * as SibApiV3Sdk from '@sendinblue/client'
import jwt from "jsonwebtoken";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000)
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()
    apiInstance.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, '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')

    const SECRET = "jabfgjkbajfbjafjasdb";

    if (req.method === 'POST') {
        const {name, email, password} = req.body
        // if (isPhoneNumber(email)) {
        //     await prisma.user.create({
        //         data: {
        //             name: '',
        //             email: "",
        //             password: password
        //         }
        //     })
        // }
        if (isEmail(email)) {
            const sendSmtpEmail = {
                sender: {name: 'PaisaDekho', email: 'support@paisadekho.com'},
                to: [{email}],
                subject: 'Your OTP for our service',
                textContent: `Your OTP is: ${otp}`,
                htmlContent: `Your OTP is: ${otp}`,
            }
            try {
                const user = await prisma.user.create({
                    data: {
                        name: name,
                        email: email,
                        password: password
                    }
                })
                const response = await apiInstance.sendTransacEmail(sendSmtpEmail)
                if (user) {
                    const accessToken = jwt.sign(user, SECRET, {expiresIn: "30d"});
                    return res.status(200).json({user: user, accessToken: accessToken});
                }
            } catch (err) {
                console.log(err)
                res.status(500).json({error: err})
            }
        }
    }
}


export default handler