import React from "react";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const Header = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const Body = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;
