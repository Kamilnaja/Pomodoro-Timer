import React from 'react';
import { Button } from 'react-bootstrap';
import './cookieInfo.scss';
import { CookieInfoProps } from './CookieInfoProps';

export const CookieInfo = (props: CookieInfoProps) => (
  <div className="cookie">
    <p>This site uses cookies. You can accept cookies, by clicking accept.</p>
    <Button onClick={() => props.handleSaveCookieConsent()}>Accept cookies</Button>
  </div>
);
