import {
  Title,
  Text,
  Button,
  StyledButton,
  Wrapper,
  FlexWrap,
  Spacer,
  Image
} from "./Library";
import Input from "./Input";
import { Col, Row } from "react-styled-flexboxgrid";

export default function App() {
  return (
    <Wrapper>
      <Image src="./Images/kM5C-cat.png" />

      <Title>Adopt an Email Pet</Title>
      <Text>
        Get a daily morning email. Tell your pet how you feel.
        <br />
        <br />
        It feeds on your feels, so make sure you write something nice.
      </Text>

      <FlexWrap>
        <Input required type="text" label="Your Email" id="inputId" />
        <StyledButton>Adopt Email Pet</StyledButton>
      </FlexWrap>
      <Spacer />
      <Spacer />
      <Text>
        Made by <a href="">Ste</a>
      </Text>
    </Wrapper>
  );
}
