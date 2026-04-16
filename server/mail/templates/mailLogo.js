function getMailBranding() {
  const clientUrl = process.env.CLIENT_URL || "http://localhost:3000";

  // Preferred: embed logo via CID so email clients display it reliably.
  // Source can still be Cloudinary via MAIL_LOGO_URL.
  if (process.env.MAIL_LOGO_URL) {
    return {
      clientUrl,
      logoSrc: "cid:vedicode-logo",
      attachments: [
        {
          filename: "logo.png",
          path: process.env.MAIL_LOGO_URL,
          cid: "vedicode-logo",
        },
      ],
    };
  }

  // Alternative: construct from Cloudinary public id
  if (process.env.CLOUD_NAME && process.env.MAIL_LOGO_PUBLIC_ID) {
    const encodedPublicId = encodeURI(process.env.MAIL_LOGO_PUBLIC_ID);
    return {
      clientUrl,
      logoSrc: `https://res.cloudinary.com/${process.env.CLOUD_NAME}/image/upload/${encodedPublicId}`,
      attachments: [],
    };
  }

  // Fallback (works if frontend serves it)
  return { clientUrl, logoSrc: `${clientUrl}/logo192.png`, attachments: [] };
}

module.exports = { getMailBranding };

