import React from "react";
import styled from "styled-components";

export const CardContainer = styled.div`
  background: #fff;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: auto;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0 2px 6px 0;
  width: 15%;
  height: 300px;
`;

export const CardTitle = styled.div`
  color: #000;
  padding-top: 30px;
  padding-bottom: 32px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const CardContent = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 8px 12px;
`;
