'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import submitForm from "@/server/form"
import {z} from "zod";
import {formSchema} from "@/lib/shared-form-data";

type FormData = {
  name: string
  email: string
  sport: string
}

export function SignupSection() {

    const { 
        register, 
        handleSubmit, 
        formState: { errors, isValid, isSubmitting, isSubmitSuccessful }
    } = useForm<FormData>({
        mode: 'onBlur',
        defaultValues: {
            name: '',
            email: '',
            sport: ''
        }
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            await submitForm(data)
        } catch (error) {
            console.error('Error submitting form:', error)
        }
    }

    console.log(isSubmitSuccessful)
    return (
        <section className="py-20 px-4 md:px-8 lg:px-12" id="waitlist">
            <div className="container mx-auto">
                <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Rejoignez la liste d'attente</h2>
                    <p className="text-blue-100 mb-12 max-w-2xl mx-auto">Soyez les premiers à profiter de notre plateforme dès son lancement. Recevez un accès anticipé et des avantages exclusifs.</p>

                    <div className="max-w-2xl mx-auto p-4">
                        {isSubmitSuccessful ? (
                            <div className="text-center py-8">
                                <h3 className="text-xl font-bold mb-2">Merci pour votre inscription !</h3>
                                <p>Nous vous contacterons dès que la plateforme sera disponible.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex flex-col md:flex-row gap-4 mb-6">
                                    <div className="flex-1">
                                        <input
                                            type="text"
                                            placeholder="Votre nom"
                                            className={`bg-white w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 ${errors.name ? 'border-2 border-red-500' : ''}`}
                                            {...register('name', { required: 'Le nom est requis' })}
                                        />
                                        {errors.name && <p className="text-red-400 text-sm mt-1 text-left">{errors.name.message}</p>}
                                    </div>

                                    <div className="flex-1">
                                        <input
                                            type="email"
                                            placeholder="Votre email"
                                            className={`bg-white w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 ${errors.email ? 'border-2 border-red-500' : ''}`}
                                            {...register('email', { 
                                                required: 'L\'email est requis', 
                                                pattern: { 
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                                                    message: 'Email invalide' 
                                                } 
                                            })}
                                        />
                                        {errors.email && <p className="text-red-400 text-sm mt-1 text-left">{errors.email.message}</p>}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <select
                                        className={`bg-white w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 ${errors.sport ? 'border-2 border-red-500' : ''}`}
                                        {...register('sport', { required: 'Veuillez sélectionner un sport' })}
                                    >
                                        <option value="" disabled>Votre sport principal</option>
                                        <option value="running">Course à pied</option>
                                        <option value="triathlon">Triathlon</option>
                                        <option value="cycling">Cyclisme</option>
                                        <option value="trail">Trail</option>
                                        <option value="other">Autre</option>
                                    </select>
                                    {errors.sport && <p className="text-red-400 text-sm mt-1 text-left">{errors.sport.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`bg-white text-blue-600 font-medium px-6 py-3 rounded-lg transition-all transform
                                    ${isValid && !isSubmitting ? 'hover:scale-105 hover:bg-blue-50' : 'opacity-70 cursor-not-allowed'} w-full md:w-auto`}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg
                                                className="animate-spin h-5 w-5 text-blue-600 mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            Inscription en cours...
                                        </span>
                                    ) : (
                                        <span>S'inscrire à la liste d'attente</span>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}