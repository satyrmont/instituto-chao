import { useState } from "react";
import styled from "styled-components";
import { Section } from "../style/PageContainers";

const MapSection = styled(Section)`
  iframe {
    pointer-events: ${({ $active }) => ($active ? "auto" : "none")};
  }
`;

function Mapa() {
  const [active, setActive] = useState(false);

  return (
    <MapSection
      id="mapa"
      $active={active}
      onClick={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <iframe
        src="https://www.google.com/maps/d/embed?mid=15LextW38AfDS_751br-7emSPmktAtsI&ehbc=2E312F"
        width="100%"
        height="100%"
      ></iframe>
    </MapSection>
  );
}

export default Mapa;
