import React from "react";
import ReactDOM from "react-dom";

import simple, {View} from "react-simple";

const shade0 = "#657A99";
const shade1 = "#A5B1C1";
const shade2 = "#8191A9";
const shade3 = "#4B6388";
const shade4 = "#304C75";

const Container = simple(View, {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: shade2,
    alignItems: "center",
    justifyContent: "center",
});

const Box = simple(View, {
    padding: 20,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: shade1,
    minWidth: 400,
    minHeight: 350,
});

const Text = simple(View.create("span"), {
    fontFamily: "Helvetica",
});

const Title = simple(Text, {
    color: shade3,
    fontSize: 50,
    fontWeight: "bold",
});

const Description = simple(Text, {
    fontSize: 20,
    color: shade0,
});

const Code = simple(View.create("pre"), {
    backgroundColor: shade3,
    color: shade2,
    padding: 15,
});

const code = `
const Button = simple("button", {
    padding: 10,
    color: "white",
    backgroundColor: "#DDD",
});
`.trim();

const Link = simple(Text.create("a"), {
    textDecoration: "none",
    padding: 10,
    fontSize: 20,
    backgroundColor: shade2,
    color: shade1,
});

const Root = () => (
    <Container>
        <Box>
            <Title>react-simple</Title>
            <Description>
                simple style only components for react
            </Description>
            <Code title="<Button>click</Button>">{code}</Code>

            <Link href="https://github.com/epeli/react-simple">github</Link>
        </Box>
    </Container>
);

const el = document.getElementById("app");
ReactDOM.render(<Root />, el);
