const { getMailBranding } = require("./mailLogo");
const { buildEmailLayout, escapeHtml, fontSans } = require("./mailLayout");

exports.paymentSuccessEmail = (name, amount, orderId, paymentId) => {
  const { clientUrl, logoSrc } = getMailBranding();
  const safeName = escapeHtml(name);
  const safeAmount = escapeHtml(String(amount));
  const safeOrder = escapeHtml(String(orderId));
  const safePay = escapeHtml(String(paymentId));
  const bodyHtml = `
    <p style="margin:0 0 6px; font-size:15px; color:#44403c;">Dear ${safeName},</p>
    <p style="margin:0 0 22px; color:#57534e; font-size:16px; line-height:1.7;">Your payment is confirmed. Keep this email for your records.</p>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #d6d3d1; border-radius:2px; overflow:hidden;">
      <tr>
        <td align="left" style="padding:20px 22px; background:linear-gradient(135deg, #0f766e 0%, #0d9488 50%, #115e59 100%);">
          <span style="font-family:${fontSans}; font-size:9px; font-weight:600; letter-spacing:0.3em; text-transform:uppercase; color:#ccfbf1; opacity:0.95;">Amount received</span>
          <p style="margin:6px 0 0; font-size:32px; font-weight:500; color:#f0fdfa; letter-spacing:-0.02em; font-family:Georgia, serif;">₹${safeAmount}</p>
        </td>
      </tr>
      <tr>
        <td style="padding:16px 22px; font-size:13px; color:#44403c; font-family:${fontSans}; line-height:1.55; border-bottom:1px solid #e7e5e4; background:#fafaf8;">
          <span style="font-size:9px; font-weight:600; letter-spacing:0.2em; text-transform:uppercase; color:#78716c; display:block; margin-bottom:4px;">Payment ID</span>
          <span style="font-family:ui-monospace, Consolas, monospace; font-size:12px; word-break:break-all; color:#1c1917;">${safePay}</span>
        </td>
      </tr>
      <tr>
        <td style="padding:16px 22px; font-size:13px; color:#44403c; font-family:${fontSans}; line-height:1.55; background:#fafaf8;">
          <span style="font-size:9px; font-weight:600; letter-spacing:0.2em; text-transform:uppercase; color:#78716c; display:block; margin-bottom:4px;">Order ID</span>
          <span style="font-family:ui-monospace, Consolas, monospace; font-size:12px; word-break:break-all; color:#1c1917;">${safeOrder}</span>
        </td>
      </tr>
    </table>
  `;
  return buildEmailLayout({
    clientUrl,
    logoSrc,
    pageTitle: "Payment received — VediCode",
    preheader: `Receipt · ₹${safeAmount} · ${safeOrder}`,
    heading: "Payment received",
    bodyHtml,
    primaryCta: { href: `${clientUrl}/dashboard`, label: "View your space" },
  });
};
