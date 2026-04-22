const { getMailBranding } = require("./mailLogo");
const { buildEmailLayout, escapeHtml, fontSerif, fontSans } = require("./mailLayout");

exports.courseEnrollmentEmail = (courseName, name) => {
  const { clientUrl, logoSrc } = getMailBranding();
  const safeName = escapeHtml(name);
  const safeCourse = escapeHtml(courseName);
  const bodyHtml = `
    <p style="margin:0 0 6px; font-size:15px; color:#44403c;">Dear ${safeName},</p>
    <p style="margin:0 0 20px; color:#57534e; font-size:16px; line-height:1.7;">You are now enrolled in</p>
    <p style="margin:0 0 24px; font-family:${fontSerif}; font-size:20px; font-style:italic; font-weight:500; color:#1c1917; line-height:1.4; text-align:center; padding:16px; border:1px solid #d6d3d1; background:#fafaf8;">&ldquo;${safeCourse}&rdquo;</p>
    <p style="margin:0; color:#57534e; font-size:16px; line-height:1.7; font-family:${fontSans};">Your materials and progress live in the dashboard. We look forward to seeing what you build.</p>
  `;
  return buildEmailLayout({
    clientUrl,
    logoSrc,
    pageTitle: "You are enrolled — VediCode",
    preheader: `Welcome to “${safeCourse}” on VediCode.`,
    heading: "You’re in",
    bodyHtml,
    primaryCta: { href: `${clientUrl}/dashboard`, label: "Enter your classroom" },
  });
};
