import React from 'react';
import './SocialTestimonial.css';
import SocialIcon from './SocialIcons';

const SocialTestimonial = ({ name, text, avatar, platform, url, date }) => (
  <div className={`social-testimonial social-${platform}`}>  
    <div className="testimonial-header">
      {avatar && <img src={avatar} alt={name} className="testimonial-avatar" />}
      <div style={{display:'flex',alignItems:'center',gap:6}}>
        <SocialIcon platform={platform} />
        <span className="testimonial-name" style={{fontSize:'1rem',fontWeight:500}}>{name}</span>
      </div>
    </div>
    {platform !== 'tiktok' && (
      <p className="testimonial-text">{text}</p>
    )}
    {platform === 'tiktok' && url ? (
      <div className="testimonial-video-preview">
        <iframe
          src={`https://www.tiktok.com/embed/${url.split('/').pop()}`}
          title="TikTok Video Preview"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ width: '100%', height: 90, border: 'none', borderRadius: 8, margin: '0.3rem 0 0.2rem 0' }}
        />
      </div>
    ) : null}
    <div className="testimonial-footer">
      {date && <span className="testimonial-date">{date}</span>}
      {url && <a href={url} target="_blank" rel="noopener noreferrer" className="testimonial-link">Ver original</a>}
    </div>
    {/* No logo ni plataforma abajo, solo arriba junto al nombre */}
  </div>
);

export default SocialTestimonial;
