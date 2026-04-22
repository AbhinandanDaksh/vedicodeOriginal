const { getMailBranding } = require("./mailLogo");
const { buildEmailLayout, escapeHtml, fontSans } = require("./mailLayout");

const otpTemplate = (otp) => {
  const { clientUrl, logoSrc } = getMailBranding();
  const safeOtp = escapeHtml(otp);
  const bodyHtml = `
    <p style="margin:0 0 8px; font-size:15px; color:#44403c;">Hello,</p>
    <p style="margin:0 0 24px; color:#57534e; font-size:16px; line-height:1.7;">Thank you for choosing <strong style="color:#1c1917; font-weight:600;">VediCode</strong>. Use this single-use code to confirm your email and unlock your account.</p>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0 0 24px; border-radius:2px; overflow:hidden; border:1px solid #292524; background-color:#1c1917;">
      <tr>
        <td style="height:2px; background:linear-gradient(90deg, #0d9488, #5eead4, #0d9488); font-size:0; line-height:0;">&nbsp;</td>
      </tr>
      <tr>
        <td align="center" style="padding:28px 24px 22px;">
          <p style="margin:0 0 6px; font-family:${fontSans}; font-size:9px; font-weight:600; letter-spacing:0.4em; text-transform:uppercase; color:#a8a29e;">Verification code</p>
          <p style="margin:0; font-size:36px; font-weight:500; letter-spacing:0.28em; font-family:ui-monospace, 'Cascadia Code', Consolas, monospace; color:#5eead4; text-shadow:0 0 1px rgba(94, 234, 212, 0.4);">${safeOtp}</p>
        </td>
      </tr>
    </table>
    <p style="margin:0; font-size:14px; color:#78716c; line-height:1.6; border-left:2px solid #d6d3d1; padding-left:14px;">This code expires in <strong style="color:#44403c;">5 minutes</strong>. If you did not request it, you may ignore this message — your account stays unchanged.</p>
  `;
  return buildEmailLayout({
    clientUrl,
    logoSrc,
    pageTitle: "Verify your email — VediCode",
    preheader: `Your VediCode code: ${safeOtp} · valid 5 minutes`,
    heading: "Confirm your email",
    bodyHtml,
  });
};

module.exports = otpTemplate;
