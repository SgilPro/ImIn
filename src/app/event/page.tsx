"use client";

import { use } from "react";
import styled from "styled-components";
import useEventController from "@/api/useEventController";

const Event = () => {
  const [eventData, loading, setupEventData, getEventData] = useEventController();

  return (
    <div>
      Event
      <ButtonStyled onClick={setupEventData}>Click add event</ButtonStyled>
      <ButtonStyled onClick={getEventData}>Get event</ButtonStyled>
      <ContentStyled>Event content</ContentStyled>
    </div>
  );
};

const ButtonStyled = styled("div")`
  border: 1px solid black;
`;

const ContentStyled = styled("div")`
  border: 1px solid black;
`;

export default Event;
