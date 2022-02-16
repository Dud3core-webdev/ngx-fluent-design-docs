interface IComponentApiData {
    readonly name: string;
    readonly isRequired: boolean;
    readonly description: string;
    readonly isInput?: boolean;
    readonly isOutput?: boolean;
}

export declare type ComponentApiDataList = Array<IComponentApiData>;
