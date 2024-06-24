// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    { text: "Tell me something interesting about the Dominican Republic.", value: "Tell me something interesting about the Dominican Republic." },
    { text: "Cuéntame algo interesante sobre la República Dominicana.", value: "Cuéntame algo interesante sobre la República Dominicana." },
    { text: "Summarize the Specific development objectives of the Transparency and Integrity Agenda in the Dominican Republic.", value: "Summarize the Specific development objectives of the Transparency and Integrity Agenda in the Dominican Republic." }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
