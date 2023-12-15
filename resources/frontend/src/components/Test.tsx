import { FC } from "react";
import { getDefaultProps } from "@/assets/utils";

interface Props {
    count?: string;
	name?: string;
	test: string;
}

const Test: FC<Props> = ({ test }) => (
	<div>
		{ test }
	</div>
);

Test.defaultProps = {
	count: "5",
};

const test = getDefaultProps(Test);
test

console.log(test);
export default Test;
