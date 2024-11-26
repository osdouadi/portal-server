"use server";

import { transporter } from "@/app/config/email";
import { htmlData } from "@/app/templates/notification";

export const sendNotification = async (data) => {
  const html = htmlData
    .replace("{{ fullName }}", data.fullName || "")
    .replace("{{ email }}", data.email || "")
    .replace("{{ phoneNumber }}", data.phoneNumber || "")
    .replace("{{ userType }}", data.userType || "")
    .replace("{{ contentType }}", data.contentType || "")
    .replace("{{ content }}", data.content || "");

  await transporter.sendMail({
    from: "osdouadi@gmail.com",
    to: "thazpxbcrxlyernm",
    subject: "Portal de sugerencias y consultas",
    text: "Nuevo mensaje",
    html,
  });
};
