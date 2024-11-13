import { IconType } from "react-icons";

export interface IIdentity {
    id: number;
    title: string;
    subtitle: string;
    icon: IconType;
};

export interface IDepartment {
    id: number;
    title: string;
    imgUrl: string;
    subDepartments?: ISubDepartments[];
    desc: string;
    icon: IconType;
};

export interface ISubDepartments {
    id: number;
    title: string;
}