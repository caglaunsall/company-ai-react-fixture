declare module "react" {
    export function useState<S>(
        initial: S | (() => S)
    ): [S, (value: S | ((previous: S) => S)) => void];
}

declare namespace JSX {
    interface IntrinsicElements {
        input: {
            type?: string;
            value?: string;
            placeholder?: string;
            "aria-label"?: string;
            onChange?: (event: {
                target: { value: string };
                currentTarget: { value: string };
            }) => void;
            [attribute: string]: unknown;
        };
        [elementName: string]: { [attribute: string]: unknown };
    }
}