const { getMailBranding } = require("./mailLogo");
const { buildEmailLayout, escapeHtml, fontSans } = require("./mailLayout");

exports.contactUsEmail = (
  email,
  firstname,
  lastname,
  message,
  phoneNo,
  countrycode
) => {
  const { clientUrl, logoSrc } = getMailBranding();
  const e = escapeHtml(email);
  const fn = escapeHtml(firstname);
  const ln = escapeHtml(lastname);
  const ph = escapeHtml(phoneNo);
  const cc = escapeHtml(countrycode);
  const msg = escapeHtml(message).replace(/\n/g, "<br/>");
  const bodyHtml = `
    <p style="margin:0 0 6px; font-size:15px; color:#44403c;">Hello ${fn} ${ln},</p>
    <p style="margin:0 0 22px; color:#57534e; font-size:16px; line-height:1.7;">We’ve received your note and a member of the team will respond shortly. A copy of your message is below.</p>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#fffcf9; border:1px solid #d6d3d1; border-radius:2px;">
      <tr>
        <td style="padding:22px 24px; font-size:14px; color:#44403c; line-height:1.65; font-family:${fontSans};">
          <p style="margin:0 0 14px; padding-bottom:14px; border-bottom:1px solid #e7e5e4;"><span style="font-size:10px; font-weight:600; letter-spacing:0.2em; text-transform:uppercase; color:#78716c; display:block; margin-bottom:4px;">Email</span>${e}</p>
          <p style="margin:0 0 14px; padding-bottom:14px; border-bottom:1px solid #e7e5e4;"><span style="font-size:10px; font-weight:600; letter-spacing:0.2em; text-transform:uppercase; color:#78716c; display:block; margin-bottom:4px;">Phone</span>${cc} ${ph}</p>
          <p style="margin:0;"><span style="font-size:10px; font-weight:600; letter-spacing:0.2em; text-transform:uppercase; color:#78716c; display:block; margin-bottom:6px;">Message</span>${msg}</p>
        </td>
      </tr>
    </table>
  `;
  return buildEmailLayout({
    clientUrl,
    logoSrc,
    pageTitle: "We received your message — VediCode",
    preheader: "Thank you — we’ll be in touch soon.",
    heading: "Thank you for writing",
    bodyHtml,
    primaryCta: { href: clientUrl, label: "Return to VediCode" },
  });
};
