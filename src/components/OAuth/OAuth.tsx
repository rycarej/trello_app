import React, { FunctionComponent } from 'react';
import { RouteChildrenProps, Redirect } from 'react-router';

interface OAuthProps extends RouteChildrenProps {
  onSetToken: (token: string) => void;
}

export const OAuth: FunctionComponent<OAuthProps> = ({ location: { hash }, onSetToken }: OAuthProps) => {
  const token = hash.split('=')[1];
  debugger;
  onSetToken(token);
  return <Redirect to={'/dashboard'} />
}