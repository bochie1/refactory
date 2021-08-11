"use strict";
const React = require("react");
const { Text } = require("ink");

const App = ({ name = "Stranger", from = "Nowhere" }) => (
  <Text>
    Hello,{" "}
    <Text color="green">
      {name} from {from}
    </Text>
  </Text>
);

module.exports = App;
