import React, { useState, useEffect, memo } from "react";
import { Header } from "@buffetjs/custom";
import { Table } from "@buffetjs/core";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 18px 30px;

  p {
    margin-top: 1rem;
  }
`;

const HomePage = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/React-avancado/repos")
      .then((res) => setRows(res.data))
      .catch((e) => strapi.notification.error(`Ops...github API error, ${e}`));
  }, []);

  const headers = [
    {
      name: "Name",
      value: "name",
    },
    {
      name: "Description",
      value: "description",
    },
    {
      name: "Url",
      value: "html_url",
    },
  ];

  return (
    <Wrapper>
      <Header
        title={{ label: "Advanced React Repositories" }}
        content="A list of our repositories in Advanced React course."
      />
      <Table headers={headers} rows={rows} />
    </Wrapper>
  );
};

export default memo(HomePage);
