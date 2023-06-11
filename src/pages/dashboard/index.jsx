import React from "react";
import { Head } from "./head";
import { List } from "./list";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <Wrapper>
      <Head />
      <List />
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: auto;
  right: 0;
  bottom: 0;
  background-color: rgba(237, 237, 237, 1);
`;
