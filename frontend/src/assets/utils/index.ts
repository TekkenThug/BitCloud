import { ComponentType } from "react";

// type Test<P, C> =  C extends ComponentType<P>
// 	? C extends { defaultProps?: infer D }
// 		? D
// 		: Record<string, never>
// 	: Record<string, never>;

type Test<P, C extends ComponentType<P>> = C["defaultProps"];
export const getDefaultProps = <P>(component: ComponentType<P>): Test<P, typeof component> => {
	return component.defaultProps;
};
