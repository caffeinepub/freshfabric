import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Signup {
    hasFungusIssue: boolean;
    city: string;
    name: string;
    submittedAt: bigint;
    email: string;
    phoneNumber: string;
}
export interface backendInterface {
    getAllSignups(): Promise<Array<Signup>>;
    submitSignup(name: string, city: string, hasFungusIssue: boolean, phoneNumber: string, email: string): Promise<void>;
}
