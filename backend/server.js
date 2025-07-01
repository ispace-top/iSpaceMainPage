// 在所有代码之前，首先加载 .env 文件
require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// 从 process.env 中安全地读取企业微信配置
const qywxConfig = process.env.QYWX_AM.split(',');
const [corpid, corpsecret, touser, agentid] = qywxConfig;

/**
 * 获取企业微信的 Access Token
 */
async function getWxAccessToken() {
    const url = `https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=${corpid}&corpsecret=${corpsecret}`;
    try {
        const response = await axios.get(url);
        if (response.data.access_token) {
            return response.data.access_token;
        } else {
            throw new Error('Failed to get access_token: ' + response.data.errmsg);
        }
    } catch (error) {
        console.error('Error getting WX access token:', error.message);
        return null;
    }
}

/**
 * 发送企业微信通知
 */
async function sendWxNotification(bookingData) {
    const accessToken = await getWxAccessToken();
    if (!accessToken) {
        console.error('Could not send WX notification due to missing access token.');
        return;
    }

    const url = `https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=${accessToken}`;
    const messageContent = `
【新的预约提醒】
孩子姓名: ${bookingData.childName}
孩子年龄: ${bookingData.childAge}
家长手机: ${bookingData.parentPhone}
预约课程: ${bookingData.course}
`;

    const requestBody = {
        touser: touser,
        msgtype: "text",
        agentid: parseInt(agentid),
        text: {
            content: messageContent,
        },
        safe: 0,
    };

    try {
        const response = await axios.post(url, requestBody);
        if (response.data.errcode === 0) {
            console.log('WX notification sent successfully.');
        } else {
            console.error('Failed to send WX notification:', response.data.errmsg);
        }
    } catch (error) {
        console.error('Error sending WX notification:', error.message);
    }
}

/**
 * 发送邮件通知
 */
async function sendEmailNotification(bookingData) {
    // 从 process.env 中读取邮件配置
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: process.env.MAIL_SECURE === 'true', // .env 文件中的布尔值会被读为字符串
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    const mailOptions = {
        from: `"预约系统" <${process.env.MAIL_USER}>`,
        to: process.env.MAIL_TO,
        subject: '新的试听课预约提醒',
        html: `
            <h3>新的试听课预约提醒</h3>
            <p><strong>孩子姓名:</strong> ${bookingData.childName}</p>
            <p><strong>孩子年龄:</strong> ${bookingData.childAge}</p>
            <p><strong>家长手机:</strong> ${bookingData.parentPhone}</p>
            <p><strong>预约课程:</strong> ${bookingData.course}</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    } catch (error) {
        console.error('Error sending email:', error.message);
    }
}

// API路由保持不变
app.post('/api/submit-booking', async (req, res) => {
    console.log('Received booking data:', req.body);
    const bookingData = req.body;

    sendWxNotification(bookingData);
    sendEmailNotification(bookingData);

    res.status(200).json({ message: 'Booking received successfully.' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});