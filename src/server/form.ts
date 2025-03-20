"use server";

import {formSchema} from "@/lib/shared-form-data";
import {type z} from "zod";

export default async function submitForm(formData: z.infer<typeof formSchema>) {
    const errors = await formSchema.safeParseAsync(formData)
    const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    await wait(5000); // wait for 5 seconds

    return errors
}
