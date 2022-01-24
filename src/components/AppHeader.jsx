import { Header, Nav, NavigLink } from "../styles/styled";

export default function AppHeader() {
  return (
    <Header>
      <Nav>
        <NavigLink to={"/"}>Home</NavigLink>
        <NavigLink to={"movies"}>Movies</NavigLink>
      </Nav>
    </Header>
  );
}
