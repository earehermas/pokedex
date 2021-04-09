import styled from "styled-components";

export const PageContainer = styled.div`
  position: relative;
  background-color: #eee;
  border-radius: 10px;
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  margin: 50px;
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;

export const PokemonContainer = styled.div`
  position: relative;
  background-color: #eee;
  border-radius: 10px;
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  margin: 50px;
`;
