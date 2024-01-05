import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  max-width: 100%;
  height: 100vh;
  overflow-y: hidden;
`;

export const Sidebar = styled.div`
  flex: 0 0 300px;
  overflow-y: auto;
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const WelcomeStatement = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  font-size: 90px;
  justify-content: center;
  align-items: center;
  color: #333;
`;

export const SubStatement = styled.div`
  opacity: 0.7;
  display: flex;
  font-size: 40px;
  justify-content: center;
  align-items: center;
  color: #333;
`;
