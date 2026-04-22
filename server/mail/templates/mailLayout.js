/**
 * Shared HTML email shell — table-based, premium / editorial styling.
 */
const SUPPORT_EMAIL = "abhinandandaksh946@gmail.com";

function escapeHtml(s) {
  if (s == null) return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Warm neutrals + deep teal for a refined, high-end feel */
const BRAND = {
  primary: "#0d9488",
  primaryLight: "#14b8a6",
  primaryDeep: "#0f766e",
  ink: "#1c1917",
  bodyText: "#44403c",
  muted: "#78716c",
  surface: "#fffcf9",
  pageBg: "#ebe8e4",
  border: "#d6d3d1",
  accentLine: "#a8a29e",
};

const fontSerif = "Georgia, 'Palatino Linotype', 'Book Antiqua', Palatino, serif";
const fontSans = "'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif";

/**
 * @param {object} opts
 * @param {string} [opts.eyebrow] - small caps line above title (e.g. brand)
 * @param {{ href: string, label: string } | null} [opts.primaryCta]
 */
function buildEmailLayout({
  clientUrl,
  logoSrc,
  pageTitle,
  preheader = "",
  eyebrow = "VediCode",
  heading,
  bodyHtml,
  primaryCta = null,
}) {
  const preheaderBlock = preheader
    ? `<div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;">${preheader}</div>`
    : "";

  const eyebrowBlock = eyebrow
    ? `<p style="margin:0 0 12px; font-family:${fontSans}; font-size:10px; font-weight:600; letter-spacing:0.32em; text-transform:uppercase; color:${BRAND.muted};">${eyebrow}</p>`
    : "";

  const ctaBlock =
    primaryCta && primaryCta.href && primaryCta.label
      ? `<table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin:32px auto 0;">
      <tr>
        <td bgcolor="${BRAND.ink}" align="center" style="background-color:${BRAND.ink}; border-radius:2px; mso-line-height-rule:exactly;">
          <a href="${primaryCta.href}" target="_blank" rel="noopener noreferrer" style="display:inline-block; padding:16px 40px; font-size:12px; font-weight:600; letter-spacing:0.14em; text-transform:uppercase; color:#fafaf9; text-decoration:none; font-family:${fontSans};">${primaryCta.label}</a>
        </td>
      </tr>
    </table>`
      : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>${pageTitle}</title>
  <!--[if mso]>
  <style type="text/css">table, td, p, a, li, blockquote { -webkit-text-size-adjust:100%; } .mso-sans { font-family: Segoe UI, sans-serif !important; }</style>
  <![endif]-->
  <style type="text/css">
    body { margin:0; padding:0; width:100% !important; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
    .email-body a { color:${BRAND.primaryDeep}; font-weight:600; text-decoration:underline; text-decoration-color:#99d5cf; text-underline-offset:3px; }
    @media only screen and (max-width: 600px) {
      .email-card { width: 100% !important; }
      .inner-pad { padding: 28px 22px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:${BRAND.pageBg};">
  ${preheaderBlock}
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:${BRAND.pageBg};">
    <tr>
      <td align="center" style="padding:40px 18px 56px;">
        <table class="email-card" role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px; width:100%; background-color:${BRAND.surface}; border:1px solid ${BRAND.border}; border-radius:2px; box-shadow:0 16px 48px rgba(28, 25, 23, 0.12);">
          <tr>
            <td style="height:3px; background:linear-gradient(90deg, #042f2a 0%, #0d9488 38%, #5eead4 72%, #0d9488 100%); font-size:0; line-height:0; mso-line-height-rule:exactly;">&nbsp;</td>
          </tr>
          <tr>
            <td class="inner-pad" align="center" style="padding:44px 40px 8px;">
              <a href="${clientUrl}" target="_blank" rel="noopener noreferrer" style="display:inline-block; text-decoration:none;">
                <img src="${logoSrc}" alt="VediCode" width="200" style="max-width:200px; width:100%; height:auto; display:block; border:0; outline:none;" />
              </a>
            </td>
          </tr>
          <tr>
            <td class="inner-pad" align="center" style="padding:8px 40px 0;">
              <table role="presentation" width="64" cellspacing="0" cellpadding="0" border="0" style="margin:0 auto 8px;">
                <tr>
                  <td style="height:1px; background:linear-gradient(90deg, transparent, ${BRAND.accentLine}, transparent); font-size:0;">&nbsp;</td>
                </tr>
              </table>
              ${eyebrowBlock}
              <h1 style="margin:0; font-family:${fontSerif}; font-size:28px; font-weight:500; line-height:1.25; color:${BRAND.ink}; letter-spacing:-0.02em;">${heading}</h1>
            </td>
          </tr>
          <tr>
            <td class="inner-pad email-body mso-sans" align="left" style="padding:24px 40px 16px; font-family:${fontSans}; font-size:16px; line-height:1.65; color:${BRAND.bodyText};">
              ${bodyHtml}
              ${ctaBlock}
            </td>
          </tr>
          <tr>
            <td style="padding:28px 40px 36px; background-color:#f5f3f0; border-top:1px solid ${BRAND.border};">
              <p style="margin:0 0 6px; font-family:${fontSans}; font-size:12px; line-height:1.65; color:${BRAND.muted}; text-align:center; letter-spacing:0.04em;">Concierge</p>
              <p style="margin:0 0 14px; font-family:${fontSans}; font-size:13px; line-height:1.6; color:${BRAND.bodyText}; text-align:center;">
                <a href="mailto:${SUPPORT_EMAIL}" style="color:${BRAND.ink}; font-weight:600; text-decoration:none; border-bottom:1px solid #d4d4d4;">${SUPPORT_EMAIL}</a>
              </p>
              <p style="margin:0; font-size:11px; color:#a8a29e; text-align:center; font-family:${fontSans}; letter-spacing:0.06em; text-transform:uppercase;">
                © ${new Date().getFullYear()} VediCode &nbsp;·&nbsp; <a href="${clientUrl}" target="_blank" rel="noopener noreferrer" style="color:#a8a29e; text-decoration:underline;">${clientUrl.replace(/^https?:\/\//, "")}</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

module.exports = { buildEmailLayout, escapeHtml, SUPPORT_EMAIL, BRAND, fontSans, fontSerif };
