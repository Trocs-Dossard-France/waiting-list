"use server";

import {formSchema} from "@/lib/shared-form-data";
import {type z} from "zod";
import {users} from "@/server/db/schema";
import {db} from "@/server/db";

export default async function submitForm(formData: z.infer<typeof formSchema>) {
    const errors = await formSchema.safeParseAsync(formData)

    console.log({
        ...errors
    })
    if (errors.success){
        try {
            console.log({
                name: formData.name,
                email: formData.email,
                sport: formData.sport,
                created_at: new Date().toISOString()
            })
            await db.insert(users).values({
                name: formData.name,
                email: formData.email,
                sport: formData.sport,
                created_at: new Date().toISOString()
            })
        }catch (e){
            console.error(e)
        }

    }

    return errors
}
