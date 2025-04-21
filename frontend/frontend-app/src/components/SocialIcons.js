import React from 'react';

const icons = {
  twitter: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7.47v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c13 8 27 0 27-16a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" fill="#1da1f2"/></svg>
  ),
  facebook: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M22.675 0h-21.35C.595 0 0 .594 0 1.326v21.348C0 23.406.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .594 23.406 0 22.675 0" fill="#4267B2"/></svg>
  ),
  tiktok: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12.8 2.2h3.1c.2 2.2 1.7 3.9 3.7 4.1v3.1c-.7.1-1.5.1-2.2-.1v6.6c0 4.2-2.7 6.1-5.5 6.1-2.6 0-5.3-1.6-5.3-5.5 0-3.8 2.7-5.5 5.3-5.5.3 0 .7 0 1 .1v3.1c-.2 0-.5-.1-.8-.1-1.2 0-2.2.8-2.2 2.4 0 1.5 1 2.4 2.2 2.4 1.3 0 2.1-.7 2.1-2.2V2.2z" fill="#010101"/><circle cx="19.5" cy="4.5" r="1.5" fill="#ee1d52"/><circle cx="4.5" cy="19.5" r="1.5" fill="#69c9d0"/></svg>
  )
};

const SocialIcon = ({ platform }) => (
  <span style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 6 }}>
    {icons[platform] || null}
  </span>
);

export default SocialIcon;
