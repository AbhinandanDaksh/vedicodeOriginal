const { getMailBranding } = require("./mailLogo");
const { buildEmailLayout, escapeHtml, fontSans } = require("./mailLayout");

exports.passwordUpdated = (email, name) => {
  const { clientUrl, logoSrc } = getMailBranding();
  const safeEmail = escapeHtml(email);
  const safeName = escapeHtml(name);
  const bodyHtml = `
    <p style="margin:0 0 6px; font-size:15px; color:#44403c;">Hello ${safeName},</p>
    <p style="margin:0 0 18px; color:#57534e; font-size:16px; line-height:1.7;">The password for <strong style="color:#1c1917;">${safeEmail}</strong> was updated successfully.</p>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0; border-left:2px solid #0d9488; background:#f5f3f0; padding:0;">
      <tr>
        <td style="padding:14px 18px; font-size:14px; color:#44403c; font-family:${fontSans}; line-height:1.6;">
          If you did <em>not</em> make this change, contact us immediately so we can help secure your account.
        </td>
      </tr>
    </table>
  `;
  return buildEmailLayout({
    clientUrl,
    logoSrc,
    pageTitle: "Password updated — VediCode",
    preheader: "Your VediCode password was changed.",
    heading: "Password updated",
    bodyHtml,
    primaryCta: { href: `${clientUrl}/login`, label: "Sign in" },
  });
};
