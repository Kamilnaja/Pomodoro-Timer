import React from 'react';
import { Button } from 'react-bootstrap';
import { CookiesInfoComponentProps } from './CookiesInfoComponentProps';
import './cookiesInfoComponent.scss';

export const CookiesInfoComponent = (props: CookiesInfoComponentProps) => (
  <div className="cookie">
    <p>This site uses cookies. You can accept cookies, by clicking accept.</p>
    <Button onClick={() => props.handleSaveCookieConsent()}>Accept cookies</Button>
  </div>
);
