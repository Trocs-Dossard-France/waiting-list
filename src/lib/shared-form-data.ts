import {z} from "zod";

export const formSchema = z.object({
    name: z.string().min(2, {
        message: "Le nom doit contenir au moins 2 caractères.",
    }),
    email: z.string().email({
        message: "Veuillez entrer une adresse email valide.",
    }),
    sport: z.string().min(1, {
        message: "Veuillez sélectionner votre sport principal.",
    }),
});