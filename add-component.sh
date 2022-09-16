#!/bin/bash

COMPONENT_NAME=$1
mkdir "src/components/$COMPONENT_NAME"

# Tests
read -r -d '' TEST_BOILERPLATE << TEST
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import $COMPONENT_NAME from "./$COMPONENT_NAME";

const { click } = userEvent

test("renders a checked state", () => {
  const handler = jest.fn()
  render(<$COMPONENT_NAME />);
  const $COMPONENT_NAME = screen.getByLabelText(/label text/i);
  expect($COMPONENT_NAME).toBeChecked()
});
TEST

echo $TEST_BOILERPLATE > "src/components/$COMPONENT_NAME/$COMPONENT_NAME.test.tsx"

# Component
read -r -d '' COMPONENT_BOILERPLATE << COMPONENT
import './$COMPONENT_NAME.scss';

type props = {
}

export default function $COMPONENT_NAME({}: props) {
  return (
    <div className="$COMPONENT_NAME">
    </div>
  );
}
COMPONENT

echo $COMPONENT_BOILERPLATE > "src/components/$COMPONENT_NAME/$COMPONENT_NAME.tsx"

# Styles
read -r -d '' STYLE_BOILERPLATE << STYLES
.$COMPONENT_NAME {
}
STYLES

echo $STYLE_BOILERPLATE > "src/components/$COMPONENT_NAME/$COMPONENT_NAME.scss"

# View
read -r -d '' VIEW_BOILERPLATE << VIEW

import Toggle from '../components/$COMPONENT_NAME/$COMPONENT_NAME';
import ComponentDocumentation from './ComponentDocumentation';

export default function View$COMPONENT_NAME() {
  return (
    <ComponentDocumentation
      name="$COMPONENT_NAME"
      usage=""
      example={`
<$COMPONENT_NAME
/>
      `}
      props={[{
        name: "",
        type: "",
        description: "",
      }]}
    >
      <$COMPONENT_NAME
      />
    </ComponentDocumentation>
  )
}
VIEW
echo $VIEW_BOILERPLATE > "src/views/$COMPONENT_NAME.tsx"
