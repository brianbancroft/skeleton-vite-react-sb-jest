import "@testing-library/jest-dom";
import { setGlobalConfig } from "@storybook/testing-react";
import * as globalStorybookConfig from "../.storybook/preview"; // path of your preview.js file
import React from "react";

setGlobalConfig(globalStorybookConfig);