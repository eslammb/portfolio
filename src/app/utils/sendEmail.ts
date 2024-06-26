import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'Yahoo', // or any other email service
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your email password
      },
    });

    // Set up email data
    let mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // the email address you want to receive the message
      subject: `Contact form submission from ${name}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error: any) {
      console.error(error);
      res
        .status(500)
        .json({ message: 'Error sending email: ' + error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default handler;
