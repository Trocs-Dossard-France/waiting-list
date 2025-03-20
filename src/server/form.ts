"use server";

import {formSchema} from "@/lib/shared-form-data";
import {z} from "zod";

export default async function submitForm(formData: z.infer<typeof formSchema>) {
    try {
        const errors = await formSchema.safeParseAsync(formData)
        const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
        await wait(5000); // wait for 5 seconds
    } catch (e: Error) {
        // Some other error occurred while validating your form
        throw e
    }

    // Your form has successfully validated!
}
