import React from "react";
import { Head } from "./head";
import { List } from "./list";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <Wrapper>
      <Head />
      <div className="">
        <List />
      </div>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: ${window.innerWidth}px;
  height: ${window.innerHeight}px;
  background-color: #d3d3d3;
  justify-content: center;
  align-items: center;
  margin: -120px;
`;
