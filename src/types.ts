export interface LocalGovernments {
    [localGovernment: string]: string[];
}

// Define the structure for the states array
export interface State {
    [stateName: string]: LocalGovernments;
}