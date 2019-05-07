import React, { Component } from "react";
import { MapTo } from "@adobe/cq-react-editable-components";

const TextEditConfig = {
  emptyLabel: "Text",

  isEmpty: function(props) {
    return !props || !props.text || props.text.trim().length < 1;
  }
};

class BusinessOverview extends Component {
  render() {
    return (
      <div
        data-rte-editelement
        dangerouslySetInnerHTML={{ __html: this.props.text }}
      />
    );
  }
}

//export default BusinessOverview;
export default MapTo("react-demo/components/content/text")(
  BusinessOverview,
  TextEditConfig
);
